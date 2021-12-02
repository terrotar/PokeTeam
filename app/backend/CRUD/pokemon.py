
from sqlalchemy.orm import Session

import httpx

from DB import models, schemas

import json


# Generator of pokebom by his PokéAPI url
def pokemon_generator(db: Session, poke: str):

    # Make the request of pokemon's url
    poke = httpx.get(poke).json()

    # Get pokemon's variables
    name = poke["name"]

    # Checks if a pokemon's already in database
    check_poke = db.query(models.Pokemon).filter(
        models.Pokemon.name == name).first()
    if(not check_poke):

        sprite = poke["sprites"]["front_default"]
        types = []
        for poke_type in poke["types"]:
            types.append(poke_type["type"]["name"])

        # Check pokemon's type(s)
        if(len(types) > 1):
            pokemon = models.Pokemon(name=name,
                                     sprite=sprite,
                                     type_01=types[0],
                                     type_02=types[-1])
        else:
            pokemon = models.Pokemon(name=name,
                                     sprite=sprite,
                                     type_01=types[0])
        db.add(pokemon)
        db.commit()


# Get ALL pokemons
def get_all_pokemons(db: Session):
    all_pokemons = db.query(models.Pokemon).all()
    return all_pokemons


# Get All Pokemons
def generate_all_pokemons(db: Session):

    # GET all all first generation pokemons of PokéAPI's Route
    url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
    all_poke = httpx.get(url).json()["results"]

    # Generate the pokemons
    for poke in all_poke:
        pokemon_generator(db, poke=poke['url'])
