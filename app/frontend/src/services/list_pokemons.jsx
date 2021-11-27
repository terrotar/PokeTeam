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
            <ul className="columns list-pokemons">
                {this.state.pokemons.map(pokemon => <li key={pokemon.id} className="Column">{pokemon.name}</li>)}
            </ul>
          );
    }
  }


export default ListPokemons;