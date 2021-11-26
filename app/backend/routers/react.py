
from fastapi import APIRouter


router = APIRouter(tags=['root'])


@router.get('/')
async def get_root():
    return {"message": "Connected to FastReact!"}
