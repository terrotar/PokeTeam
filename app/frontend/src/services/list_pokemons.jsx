import React, { Component } from 'react';
import api from "./api";


class ListPokemons extends Component {

    state = {
        pokemons: []
    }

    constructor() {
        super();
        api.get('/pokemon/all').then(response => {
            console.log(response.data)
            this.setState({ pokemons: response.data.results })
        })
    }

    render() {
        return (
            <div className="list-pokemons">
                {this.state.pokemons.map(pokemon => <p key={pokemon.id}>{pokemon.name}</p>)}
              <p>Pokémon: Name</p>
            </div>
          );
    }
  }


export default ListPokemons;