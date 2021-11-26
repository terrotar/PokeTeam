import React, { useEffect, useState} from 'react';
import App from '../App';
import ListPokemons from '../services/list_pokemons';


const AllPokemons = () => {

    return (
    <div className="all-pokemons">
        <h1>Choose 6 Pokémons:</h1>

        <div className="columns list-pokemons">

            <div className="column pokemon">
                <h2>Pokemon Name</h2>
                <ListPokemons />
            </div>

        </div>
    </div>
    )
}

export default AllPokemons;
