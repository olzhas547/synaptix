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


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_teacher = Column(Boolean)
    is_active = Column(Boolean, default=True)


    items = relationship("Course", secondary=user_course_association, back_populates="owner")
    homeworks = relationship("Homework", secondary=user_homework_association, back_populates="owner")


class Course(Base):
    __tablename__ = "courses"
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    teacher_id = Column(Integer, ForeignKey("users.id"))
    price = Column(Integer)
    category = Column(String)
    time = Column(DateTime)
    description = Column(String)
    #includes = Column(String)
    certificate = Column(String)
    start_date = Column(DateTime)
    language = Column(String)
    thumbnail = Column(String)
    
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
    
Base.metadata.create_all(engine)
print(Course.__table__.c)
print(User.__table__.c)