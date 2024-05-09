import hashlib
import random
import string
#from hashing import Hash
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

def get_random_string(length: int=12) -> str: #TESTED
    return "".join(random.choice(string.ascii_letters) for _ in range(length))

def hash_password(password: str, salt: str = None): #TESTED
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

def validate_password(password: str, hashed_password: str) -> bool: #TESTED
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
def login(request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(users.User).filter(users.User.email == request.username).first()
    if not user:
       raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    if not validate_password(
        password=request.password, hashed_password=user.hashed_password
    ):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/current_user")
def read_root(current_user: model.UserBase = Depends(get_current_user)):
	return current_user

@router.post('/create_course')
def create_course(course: model.CourseCreate, db: Session() = Depends(get_db), user = Depends(get_current_user)):
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
    #db_course = users.Course(name=course.name, priced=course.priced, category=course.category, time=course.time, description=course.description, includes=course.includes, certificate=course.certificate, start_date=course.start_date)
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course

@router.get('/courses_list', response_model=list[model.Course])
def get_courses(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    result = db.query(users.Course).offset(skip).limit(limit).all()
    return result

@router.get('/course/{id}')
def get_course(id: int, db: Session = Depends(get_db), user = Depends(get_current_user)):
    result = db.query(users.Course).filter(users.Course.id == id).first()
    return result




@router.post('/create_lecture')
def create_lecture(course: model.LessonCreate, db: Session() = Depends(get_db), user = Depends(get_current_user)):
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

@router.post('/create_homework')
def create_homework(course: model.HomeworkCreate, db: Session() = Depends(get_db), user = Depends(get_current_user)):
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
    #db_course = users.Course(name=course.name, priced=course.priced, category=course.category, time=course.time, description=course.description, includes=course.includes, certificate=course.certificate, start_date=course.start_date)
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course