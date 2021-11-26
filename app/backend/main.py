
from fastapi import FastAPI

from DB import models
from DB.database import engine


# Routers
from routers import react
from routers import pokemon


# Create tables mapped by ORM inside models
models.Base.metadata.create_all(bind=engine)


# FastAPI
api = FastAPI()


# ROUTERS

# Pokemon
api.include_router(pokemon.router)
api.include_router(react.router)
