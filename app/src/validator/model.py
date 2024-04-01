from pydantic import BaseModel
from datetime import datetime


class UserBase(BaseModel):
    email: str
    #first_name: str
    #last_name: str
    fullName: str
    username: str
    role: str

class UserCreate(UserBase):
    password: str
    confirmPassword: str

class User(UserBase):
    id: int
    is_active: bool
    
    class Config:
        orm_mode = True

class TokenData(BaseModel):
    email: str | None

class CourseCreate(BaseModel):
    name: str
    language: str
    price: int
    thumbnail: str

class CourseBase(CourseCreate):
    category: str | None
    time: datetime | None
    description: str | None
    #includes: str | None
    certificate: str | None
    start_date: datetime | None

class Course(CourseBase):
    id: int

class HomeworkCreate(BaseModel):
    name: str
    description: str
    video_link: str | None
    open_date: datetime
    course_id: int

class Homework(HomeworkCreate):
    id: int

class CourseReview(BaseModel):
    id: int
    user_id: int
    stars: int
    text: str
    course_id: int