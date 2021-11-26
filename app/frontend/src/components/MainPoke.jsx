import React from 'react';
import MyTeam from '../components/MyTeam';
import AllPokemons from '../components/AllPokemons';


function MainPoke(props) {
    return (
    <div className="main">
        <MyTeam />
        <AllPokemons />
    </div>
    )
}


export default MainPoke;
