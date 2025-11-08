from pydantic import BaseModel, EmailStr
from typing import Optional

# Schema for user registration
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

# Schema for user login
class UserLogin(BaseModel):
    username: str
    password: str

# Schema for user response (after login)
class UserResponse(BaseModel):
    username: str
    email: EmailStr
    access_token: str
    token_type: str

# Schema for token response
class Token(BaseModel):
    access_token: str
    token_type: str

# Schema for updating user information
class UserUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None

# Example of how to use these schemas in your routes
# TODO: Implement the routes in auth.py using these schemas for validation and response.