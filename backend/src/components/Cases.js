import React from 'react';

const Cases = (props) => {
    return (
        <div className={props.nom}>
        <h2 >{props.nom}</h2>
        <div className= "playerPlace">
        <img src={props.player1Place}/>
        <img src={props.player2Place}/>
        <img src={props.player3Place}/>
        </div>
        </div>
    );
};

export default Cases;