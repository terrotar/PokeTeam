import React from 'react';
import pencilIcon from '../imgs/Vector.png';
import confirmButton from '../imgs/ConfirmButton.png';
import deleteButton from '../imgs/DeleteButton.png';


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
            <a className="delete-button"><img src={deleteButton} alt="delete button" /></a>
            <a className="confirm-button"><img src={confirmButton} alt="confirm button" /></a>
        </div>

    </div>
    )
}

export default MyTeam;
