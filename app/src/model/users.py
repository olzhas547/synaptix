from sqlalchemy import Boolean, Table, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from src.database import Base, engine

#for tbl in reversed(Base.metadata.sorted_tables):
#    engine.execute(tbl.delete())

user_course_association = Table(
    'user_course',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('courses.id')),
    Column('course_id', Integer, ForeignKey('users.id'))
)

user_homework_association = Table(
    'user_homework',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('homeworks.id')),
    Column('homework_id', Integer, ForeignKey('users.id'))
)

user_meeting_association = Table(
    'user_meeting',
    Base.metadata,
    Column('user_id', Integer, ForeignKey('users.id')),
    Column('meeting_id', Integer, ForeignKey('meetings.id'))
)


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    fullName = Column(String)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String)
    is_active = Column(Boolean, default=True)


    items = relationship("Course", secondary=user_course_association, back_populates="owner")
    homeworks = relationship("Homework", secondary=user_homework_association, back_populates="owner")
    meetings = relationship("Meeting", secondary=user_meeting_association, back_populates="owner")


class Course(Base):
    __tablename__ = "courses"
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    teacher_id = Column(Integer, ForeignKey("users.id"))
    description = Column(String)
    skills = Column(String)
    requirements = Column(String)
    level = Column(String)
    language = Column(String)
    mentor = Column(Boolean)
    paid = Column(Boolean)
    price = Column(Integer)
    thumbnail = Column(String)
    certificate = Column(String)
    
    owner = relationship("User", secondary=user_course_association, back_populates="items")

class Homework(Base):
    __tablename__ = "homeworks"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    video_link = Column(String)
    open_date = Column(DateTime)
    course_id = Column(Integer, ForeignKey("courses.id"))
    
    owner = relationship("User", secondary=user_homework_association, back_populates="homeworks")

class CourseReview(Base):
    __tablename__ = "coursereviews"
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer), ForeignKey("users.id")
    stars = Column(Integer)
    text = Column(String)
    course_id = Column(Integer, ForeignKey("courses.id"))

class Chat(Base):
    __tablename__ = "chats"
    
    id = Column(Integer, primary_key=True)
    name = Column(String)

class Meeting(Base):
    __tablename__ = "meetings"
    
    id = Column(Integer, primary_key=True)
    time = Column(DateTime)
    chat_id = Column(Integer, ForeignKey("chats.id"))

    owner = relationship("User", secondary=user_meeting_association, back_populates="meetings")
    
class Message(Base):
    __tablename__ = "messages"
    
    id = Column(Integer, primary_key=True)
    text = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"))
    time = Column(DateTime)
    chat_id = Column(Integer, ForeignKey("chats.id"))

class Lecture(Base):
    __tablename__ = 'lectures'
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    description = Column(String)
    video_link = Column(String)
    open_date = Column(DateTime)
    course_id = Column(Integer, ForeignKey('courses.id'))
    
Base.metadata.create_all(engine)