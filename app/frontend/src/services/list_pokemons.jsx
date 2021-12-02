import React, { Component } from 'react';
import api from "./api";
import id_logo from '../imgs/PokemonID.png';


const colors = {
        fire: '#EC5D35',
        grass: '#68BB2B',
        electric: '#F4CB38',
        water: '#5CC1ED',
        ground: '#D0B155',
        rock: '#9D853C',
        fairy: '#DA93DD',
        poison: '#924694',
        bug: '##89960B',
        dragon: '#6B57D2',
        psychic: '#DA3063',
        flying: '#5D74D5',
        fighting: '#80311D',
        normal: '#C3C0B8'
};


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
                        <hr className="bar-type01" style={{backgroundColor: colors[pokemon.type_01]}} />
                        <hr className="bar-type02" style={{backgroundColor: colors[pokemon.type_02]}} />
                    </div>
                </div>)}
            </ul>
          );
    }
  }
// <li key={pokemon.name} className="Column">{pokemon.type_01}</li>
// <li key={pokemon.name} className="Column">{pokemon.type_02}</li>

export default ListPokemons;