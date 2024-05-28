from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

from models.user_im import UserIM
from models.token import Token
from db.user import authenticate_user, create_user
import jwt
from dotenv import load_dotenv
import os
import datetime
import pytz

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@router.post("/login", tags=["auth"])
async def login(user_im: UserIM):
    user = authenticate_user(user_im.username, user_im.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    token = jwt.encode({"iss": user["username"], "exp": datetime.datetime.now(tz=pytz.utc) + datetime.timedelta(hours=3)}, os.getenv("RSA_PRIVATE_KEY"), algorithm="RS256") # type: ignore
    
    return Token(access_token=token, token_type="bearer")

@router.post("/token", tags=["auth"])
async def token(user_im: UserIM):
    user = authenticate_user(user_im.username, user_im.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    token = jwt.encode({"iss": user["username"], "exp": datetime.datetime.now(tz=pytz.utc) + datetime.timedelta(hours=3)}, os.getenv("RSA_PRIVATE_KEY"), algorithm="RS256")
    
    return Token(access_token=token, token_type="bearer")

@router.post("/register", tags=["auth"])
async def register(user_im: UserIM):
    user = create_user(user_im.username, user_im.password)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User already exists",
        )