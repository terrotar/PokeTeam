import React, { Component } from 'react';
import api from "./api";
import id_logo from '../imgs/PokemonID.png';


class ListPokemons extends Component {

    state = {
        pokemons: []
    }

    constructor() {
        super();
        api.get('/pokemon/all').then(response => {
            console.log(response.data)
            this.setState({ pokemons: response.data })
        })
    }

    render() {
        return (
            <ul className="columns list-pokemons">
                {this.state.pokemons.map(pokemon => <div className="pokemon">
                    
                        <section>
                        <p>#{pokemon.id}</p>
                    </section>

                    <img className="pokemon-sprite" src={pokemon.sprite}/>
                    <li key={pokemon.name} className="Column pokemon-name">{pokemon.name}</li>
                    <div>
                        <li key={pokemon.name} className="Column">{pokemon.type_01}</li>
                        <li key={pokemon.name} className="Column">{pokemon.type_02}</li>
                    </div>
                </div>)}
            </ul>
          );
    }
  }


export default ListPokemons;