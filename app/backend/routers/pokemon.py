
from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from CRUD import pokemon

from DB import database


router = APIRouter(prefix='/pokemon',
                   tags=['Pokemon'])


# Get all pokemons
@router.get("/all")
def read_pokemons(db: Session = Depends(database.get_db)):
    app_poke = pokemon.get_all_pokemons(db)
    if app_poke:
        return app_poke.json()

    raise HTTPException(
        status_code=400,
        detail="Couldn't access PokéAPI"
    )
