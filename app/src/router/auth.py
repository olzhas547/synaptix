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
    db_course = users.Course(name=course.name, teacher_id=user.id, price=course.price, language=course.language, thumbnail=course.thumbnail)
    #db_course = users.Course(name=course.name, priced=course.priced, category=course.category, time=course.time, description=course.description, includes=course.includes, certificate=course.certificate, start_date=course.start_date)
    db.add(db_course)
    db.commit()
    db.refresh(db_course)
    return db_course

@router.get('/courses_list', response_model=list[model.Course])
def get_courses(db: Session = Depends(get_db), skip: int = 0, limit: int = 100):
    result = db.query(users.Course).offset(skip).limit(limit).all()
    return result

@router.get('course/{id}')
def get_course(id: int, db: Session = Depends(get_db), user = Depends(get_current_user)):
    result = db.query(users.Course).filter(users.Course.id == id).first()
    return result

@router.get('student/dashboard/homeworks')
def student_dashboard_homeworks():
    return {
        "homeworks": [
            {"homework_name": "1. Design a brochure for a restaurant",
             "course_name": "Graphic design",
             "start_date": datetime(2024, 5, 10),
             "end_date": datetime(2025, 5, 18),
             "level": 3
             },
            {"homework_name": "2. Design a brochure for a project",
             "course_name": "UX design",
             "start_date": datetime(2024, 1, 11),
             "end_date": datetime(2025, 12, 31),
             "level": 2
             },
            {"homework_name": "3. Design a brochure for a movie",
             "course_name": "Graphic design",
             "start_date": datetime(2024, 3, 3),
             "end_date": datetime(2025, 5, 6),
             "level": 3
             },
            {"homework_name": "4. Design a brochure for a cafe",
             "course_name": "UI design",
             "start_date": datetime(2024, 4, 4),
             "end_date": datetime(2025, 7, 9),
             "level": 1
             },
            {"homework_name": "5. Design a brochure for a website",
             "course_name": "UX design",
             "start_date": datetime(2024, 3, 2),
             "end_date": datetime(2025, 10, 11),
             "level": 1
             },
            {"homework_name": "6. Design a brochure for a canteen",
             "course_name": "UI design",
             "start_date": datetime(2024, 5, 6),
             "end_date": datetime(2025, 7, 8),
             "level": 2
             }
            ]
        }

@router.get('student/dashboard/schedule')
def student_dashboard_schedule(date: datetime):
    return {
        "date": date,
        "events": [
            {"name": "webinar",
            "start_time": datetime(date.year, date.month, date.day, 16, 0, 0),
            "end_time": datetime(date.year, date.month, date.day, 17, 0, 0),
            "course_name": "Graphic design"
            },
            {"name": "webinar",
            "start_time": datetime(date.year, date.month, date.day, 17, 0, 0),
            "end_time": datetime(date.year, date.month, date.day, 18, 0, 0),
            "course_name": "UX design"
            },
            {"name": "webinar",
            "start_time": datetime(date.year, date.month, date.day, 18, 0, 0),
            "end_time": datetime(date.year, date.month, date.day, 19, 0, 0),
            "course_name": "UI design"
            },
            ]
        }

@router.get('student/dashboard/me')
def student_dashboard_me():
    return {
        "fullname": "Sabina Omirzak",
        "main": "sabina23@gmail.com",
        "all_lectures": 110,
        "visited_lectures": 75,
        "all_hw": 25,
        "completed_hw": 15,
        "all_bonuses": 1000,
        "actual_bonuses": 300,
        "all_certificates": 10,
        "completed_certificates": 8,
        "streak": 4
        }

@router.get('student/dashboard/rating')
def student_dashboard_rating():
    return {
        "courses": [
            {"course_name": "Graphic Design",
             "ranks": [
                 {"rank": 13,
                  "student": "Azamat Qani",
                  "score": 1001},
                 {"rank": 14,
                  "student": "Sabina Omirzak",
                  "score": 987},
                 {"rank": 15,
                  "student": "Yerassyl Sharip",
                  "score": 967},
                 {"rank": 16,
                  "student": "Aidos Askar",
                  "score": 966},
                 ]
             },
            {"course_name": "Graphic Design",
             "ranks": [
                 {"rank": 1,
                  "student": "Yerassyl Sharip",
                  "score": 1002},
                 {"rank": 2,
                  "student": "Sabina Omirzak",
                  "score": 988},
                 {"rank": 3,
                  "student": "Azamat Qani",
                  "score": 968},
                 {"rank": 4,
                  "student": "Aidos Askar",
                  "score": 967},
                 ]
             },
            {"course_name": "Graphic Design",
             "ranks": [
                 {"rank": 5,
                  "student": "Aidos Askar",
                  "score": 1003},
                 {"rank": 6,
                  "student": "Sabina Omirzak",
                  "score": 989},
                 {"rank": 7,
                  "student": "Yerassyl Sharip",
                  "score": 969},
                 {"rank": 8,
                  "student": "Azamat Qani",
                  "score": 968},
                 ]
             }
            ]
        }

@router.get('student/dashboard/my_scores')
def student_dashboard_my_scores():
    return {
        "courses": [
            {"course_name": "Graphic Design",
             "ranks": [
                 {"rank": 13,
                  "student": "Azamat Qani",
                  "score": 1001},
                 {"rank": 14,
                  "student": "Sabina Omirzak",
                  "score": 987},
                 {"rank": 15,
                  "student": "Yerassyl Sharip",
                  "score": 967},
                 {"rank": 16,
                  "student": "Aidos Askar",
                  "score": 966},
                 ]
             },
            {"course_name": "UX Design",
             "ranks": [
                 {"rank": 1,
                  "student": "Yerassyl Sharip",
                  "score": 1002},
                 {"rank": 2,
                  "student": "Sabina Omirzak",
                  "score": 988},
                 {"rank": 3,
                  "student": "Azamat Qani",
                  "score": 968},
                 {"rank": 4,
                  "student": "Aidos Askar",
                  "score": 967},
                 ]
             },
            {"course_name": "UI",
             "ranks": [
                 {"rank": 5,
                  "student": "Aidos Askar",
                  "score": 1003},
                 {"rank": 6,
                  "student": "Sabina Omirzak",
                  "score": 989},
                 {"rank": 7,
                  "student": "Yerassyl Sharip",
                  "score": 969},
                 {"rank": 8,
                  "student": "Azamat Qani",
                  "score": 968},
                 ]
             }
            ]
        }