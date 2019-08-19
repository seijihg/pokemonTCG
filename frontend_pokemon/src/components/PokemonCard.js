import React from 'react';

function PokemonCard(props) {
    return (
      <div className="card" onClick={props.onPlayerCardClick}>
       <img src= {props.card.imageUrl} ></img>
      </div>
    );
  }
  
  export default PokemonCard;