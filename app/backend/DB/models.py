
import sqlalchemy as sql
from sqlalchemy.orm import relationship


from DB.database import Base


class Pokemon(Base):
    # Table's name
    __tablename__ = 'pokemon'

    # Attributes
    id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    name = sql.Column(sql.String(40), unique=True)
    sprite = sql.Column(sql.String)
    type_01 = sql.Column(sql.String(20))
    type_02 = sql.Column(sql.String(20), default=None)

    # Methods

    # Relationships User
    # teams = relationship('Team', backref='pokemons')
"""

class Team(Base):
    # Table's name
    __tablename__ = "team"

    # Attributes
    id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    owner = sql.Column(sql.String(40), default="My")
    # pokemon_01 = sql.Column(sql.Integer, sql.ForeignKey("pokemon.id"))

    # Relationships User
    # pokemon_01 = relationship('Pokemon', foreign_keys="pokemon.id", backref='teams')
"""