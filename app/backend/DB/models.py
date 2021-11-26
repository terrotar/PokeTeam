
import sqlalchemy as sql
from sqlalchemy.orm import relationship


from DB.database import Base


class Pokemon(Base):
    # Table's name
    __tablename__ = 'pokemon'

    # Attributes
    id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    name = sql.Column(sql.String(40), unique=True)
    type_01 = sql.Column(sql.String(20))
    type_02 = sql.Column(sql.String(20))

    # Methods

    # Relationships User
    teams = relationship('Team', backref='pokemons')


class Team(Base):
    # Table's name
    __tablename__ = "team"

    # Attributes
    id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    owner = sql.Column(sql.String(40), default="My")
    pokemon_01 = sql.Column(sql.Integer, sql.ForeignKey("pokemon.id"))
    pokemon_02 = sql.Column(sql.Integer, sql.ForeignKey("pokemon.id"))
    pokemon_03 = sql.Column(sql.Integer, sql.ForeignKey("pokemon.id"))
    pokemon_04 = sql.Column(sql.Integer, sql.ForeignKey("pokemon.id"))
    pokemon_05 = sql.Column(sql.Integer, sql.ForeignKey("pokemon.id"))
    pokemon_06 = sql.Column(sql.Integer, sql.ForeignKey("pokemon.id"))

    # Relationships User
    pokemons = relationship('Pokemon', backref='teams')
