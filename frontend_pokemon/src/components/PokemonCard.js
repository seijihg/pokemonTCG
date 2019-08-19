import React from 'react';

function PokemonCard(props) {
  const {name, imageUrl, hp, attacks} = props.pokemon

  const skillSet = () => {
    return attacks.map(elem =>{
      return (
        <li>{elem.name}: {elem.damage}</li>
      )
    })
  }
    return (
      <div className="card">
        <div>
          <img src={imageUrl} width="180px"></img>
        </div>
      </div>
    );
  }
  
  export default PokemonCard;