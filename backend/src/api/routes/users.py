from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
import jwt
from jwt.exceptions import InvalidTokenError
import os
from typing import Annotated
import db.db_users

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")
router = APIRouter()

@router.get("/get/user", tags=["users"])
async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, os.getenv("RSA_PUBLIC_KEY"), algorithms=["RS256"])
        username: str = payload["iss"]

        user = db.db_users.get_user(username)

        return {
            "id": user["id"],
            "username": user["username"]
        }
    
    except InvalidTokenError:
        return HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")