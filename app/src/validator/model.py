from pydantic import BaseModel
from datetime import datetime
from typing import Optional


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
    teacher_id: int
    description: str
    skills: str
    requirements: str
    level: str
    mentor: bool
    paid: bool
    thumbnail: str
    certificate: str

class CourseBase(CourseCreate):
    time: Optional[datetime] = None
    start_date: Optional[datetime] = None

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

class LectureCreate(BaseModel):
    name: str
    description: str
    video_link: str | None
    open_date: datetime
    course_id: int

class Lecture(LectureCreate):
    id: int

class CourseReview(BaseModel):
    id: int
    user_id: int
    stars: int
    text: str
    course_id: int