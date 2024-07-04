from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
import jwt
from jwt.exceptions import InvalidTokenError
import os
from typing import Annotated
import db.db
import db.db_messages
import models.message_im
from models.model.model import rag_chain

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")
router = APIRouter()

@router.post("/create/message", tags=["messages"])
async def create_message(token: Annotated[str, Depends(oauth2_scheme)], message: models.message_im.MessageIM):
    try:
        payload = jwt.decode(token, os.getenv("RSA_PUBLIC_KEY"), algorithms=["RS256"])
        username: str = payload["iss"]
        
        db.db_messages.create_message(message, username)

        response = rag_chain.invoke(message.content)

        message.content = response
        message.author = "AI"

        db.db_messages.create_message(message, username)

        return response

    except InvalidTokenError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")