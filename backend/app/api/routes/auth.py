from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core import security
from app.schemas.auth import UserCreate, UserOut
from app.models.user import User
from app.core.db import get_db

router = APIRouter()

@router.post("/register", response_model=UserOut)
def register(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = security.get_password_hash(user.password)
    new_user = User(email=user.email, password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post("/login", response_model=UserOut)
def login(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if not db_user or not security.verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    return db_user

# TODO: Implement OAuth2 login and token generation
# TODO: Add logout functionality
# TODO: Add password reset functionality