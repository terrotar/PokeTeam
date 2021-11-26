import React from 'react';
import pencilIcon from '../imgs/Vector.png';
import DeleteIcon from '../imgs/DeleteButton.png';
import ConfirmIcon from '../imgs/ConfirmButton.png';


const MyTeam = () => {

    return (
    <div className="my-team">
        <div className="team-name">
            <h1>My Team</h1>
            <span className="icon">
            <img src={pencilIcon} alt="pencil icon" className="image" />
            </span>
        </div>

        <div className="pokemon-team">
            
        </div>

        <div className="button-group">
            <a className="delete-button"></a>
            <a className="confirm-button"></a>
        </div>

    </div>
    )
}

export default MyTeam;
