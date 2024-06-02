import hashlib
import random
import string
from fastapi import (
    APIRouter, HTTPException, Depends, Request, Response, status
)
from fastapi.responses import RedirectResponse
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import HTMLResponse
from sqlalchemy.orm import Session

from src.validator import model
from src.database import SessionLocal, engine
from src.model import users

from datetime import datetime, timedelta
from jose import JWTError, jwt


from fastapi import Depends,HTTPException
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
url = "localhost:8000/api"

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_random_string(length: int=12) -> str:
    return "".join(random.choice(string.ascii_letters) for _ in range(length))

def hash_password(password: str, salt: str = None):
    if salt is None:
        salt = get_random_string()
    enc = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode(), 
        salt.encode(), 
        100_000
    )
    return enc.hex()

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token:str, credentials_exception):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = model.TokenData(email=email)
    except JWTError:
        raise credentials_exception
    return token_data

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/login")

def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    return verify_token(token,credentials_exception)

def validate_password(password: str, hashed_password: str) -> bool:
    salt, hashed = hashed_password.split("$")
    return hash_password(password, salt) == hashed

@router.get('/')
async def test(request: Request):
    return {'Hello': 'World'}

@router.post('/sign-up')
def sign_up(user: model.UserCreate, db: Session = Depends(get_db)):
    print(f"0: {user}")
    check = db.query(users.User).filter(users.User.email == user.email).first()
    if check:
        raise HTTPException(status_code=400, detail="Email already registered")
    salt = get_random_string()
    hashed_password = hash_password(user.password, salt)
    db_user = users.User(
        email=user.email, 
        hashed_password=f"{salt}${hashed_password}", 
        role=user.role,
        fullName = user.fullName,
        username = user.username
        )
    print(f"0: {db_user}")
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.get('/users_list', response_model=list[model.User])
def get_users(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    result = db.query(users.User).offset(skip).limit(limit).all()
    return result

@router.post('/login')
def login(
        request: OAuth2PasswordRequestForm = Depends(), 
        db: Session = Depends(get_db)
    ):
    user = db.query(users.User).filter(
        users.User.email == request.username
    ).first()
    if not user:
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    if not validate_password(
        password=request.password, hashed_password=user.hashed_password
    ):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    access_token = create_access_token(data={"sub": user.email})
    return {
        "access_token": access_token, 
        "token_type": "bearer", 
        "role": user.role
    }

@router.get("/current_user")
def read_root(current_user: model.UserBase = Depends(get_current_user)):
	return current_user

@router.post('/create_course')
def create_course(
        course: model.CourseCreate,
        db: Session() = Depends(get_db),
        user = Depends(get_current_user)
    ):
    user = db.query(users.User).filter(users.User.email == user.email).first()
    db_course = users.Course(
        name=course.courseName, 
        teacher_id=user.id, 
        price=course.coursePriceCost, 
        language=course.courseLanguage, 
        thumbnail=course.thumbnail,
        description = course.description,
        skills = course.skills,
        requirements = course.courseRequirements,
        level = course.courseLevel,
        mentor = course.isMentor,
        paid = course.coursePrice,
        certificate = course.certificate
        )
    
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course

@router.get('/courses_list', response_model=list[model.Course])
def get_courses(
        db: Session = Depends(get_db), 
        skip: int = 0, 
        limit: int = 100
    ):
    result = db.query(users.Course).offset(skip).limit(limit).all()
    outputs = []
    for i in result:
        output = model.Course(
            courseName = i.name,
            courseLanguage = i.language,
            coursePriceCost = i.price,
            thumbnail = i.thumbnail,
            teacher_id = i.teacher_id,
            description = i.description,
            skills = i.skills,
            courseRequirements = i.requirements,
            courseLevel = i.level,
            isMentor = i.mentor,
            coursePrice = i.paid,
            certificate = i.certificate,
            id = i.id
        )
        outputs.append(output)
    return outputs

@router.get('/course/{id}')
def get_course(
        id: int,
        db: Session = Depends(get_db),
        user = Depends(get_current_user)
    ):
    result = db.query(users.Course).filter(users.Course.id == id).first()
    return result




@router.post('/create_lecture')
def create_lecture(
        lecture: model.LectureCreate, 
        db: Session() = Depends(get_db), 
        user = Depends(get_current_user)
    ):
    user = db.query(users.User).filter(users.User.email == user.email).first()
    db_lecture = users.Lecture(
        name=lecture.name,
        description=lecture.description,
        video_link=lecture.video_link,
        open_date=lecture.open_date,
        course_id=lecture.course_id
    )
    db.add(db_lecture)
    db.commit()
    db.refresh(db_lecture)
    return db_lecture

@router.get('/lectures_list')
def lectures_list(
        db: Session() = Depends(get_db), 
        skip: int = 0,
        limit: int = 100
    ):
    result = db.query(users.Lecture).offset(skip).limit(limit).all()
    return result

@router.get('/lecture/{id}')
def get_lecture(
        id: int,
        db: Session = Depends(get_db),
        user = Depends(get_current_user)
    ):
    result = db.query(users.Lecture).filter(users.Lecture.id == id).first()
    return result

@router.post('/create_homework')
def create_homework(
        homework: model.HomeworkCreate, 
        db: Session() = Depends(get_db), 
        user = Depends(get_current_user)
    ):
    user = db.query(users.User).filter(users.User.email == user.email).first()
    db_homework = users.Homework(
        name=homework.name,
        description=homework.description,
        video_link=homework.video_link,
        open_date=homework.open_date,
        course_id=homework.course_id
        )
    db.add(db_homework)
    db.commit()
    db.refresh(db_homework)
    return db_homework

@router.get('/homeworks_list')
def homework_list(
        db: Session() = Depends(get_db), 
        skip: int = 0,
        limit: int = 100
    ):
    result = db.query(users.Homework).offset(skip).limit(limit).all()
    return result

@router.get('/homework/{id}')
def get_homework(
        id: int,
        db: Session = Depends(get_db),
        user = Depends(get_current_user)
    ):
    result = db.query(users.Homework).filter(users.Homework.id == id).first()
    return result

'''
@router.post('/create_test')
def create_test(course: model.LessonCreate, db: Session() = Depends(get_db), user = Depends(get_current_user)):
    user = db.query(users.User).filter(users.User.email == user.email).first()
    db_course = users.Course(
        name=course.name, 
        teacher_id=user.id, 
        price=course.price, 
        language=course.language, 
        thumbnail=course.thumbnail,
        description = course.description,
        skills = course.skills,
        requirements = course.requirements,
        level = course.level,
        mentor = course.mentor,
        paid = course.paid,
        certificate = course.certificate
        )
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course


'''