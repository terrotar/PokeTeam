
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from DB import models
from DB.database import engine


# Routers
from routers import react
from routers import pokemon


# Create tables mapped by ORM inside models
models.Base.metadata.create_all(bind=engine)


# FastAPI
api = FastAPI()


origins = [
    "http://127.0.0.1:8000",
    "http://127.0.0.1:8000",
    "https://localhost:8000",
    "http://localhost:8000",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3000",
    "https://localhost:3000",
    "http://localhost:3000",
]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ROUTERS

# Pokemon
api.include_router(pokemon.router)
api.include_router(react.router)
