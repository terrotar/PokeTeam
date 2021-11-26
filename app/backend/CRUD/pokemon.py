
from sqlalchemy.orm import Session

import httpx

from DB import models
from DB import schemas


# Get All Pokemons
def get_all_pokemons(db: Session):

    # PokéAPI Route GET all pokemons
    url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000"
    all_poke = httpx.get(url)
    return all_poke


"""



# GETTERS USER

# ALL Users
def get_all_users(db: Session):
    return db.query(models.User).all()
"""