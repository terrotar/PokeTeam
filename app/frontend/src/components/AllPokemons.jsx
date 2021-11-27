import React, { useEffect, useState} from 'react';
import ListPokemons from '../services/list_pokemons';


const AllPokemons = () => {

    return (
    <div className="all-pokemons">
        <h1>Choose 6 Pokémons:</h1>



        <ListPokemons />



    </div>
    )
}

export default AllPokemons;
