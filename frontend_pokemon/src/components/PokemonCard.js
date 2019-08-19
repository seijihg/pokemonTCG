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
        {name}
        <div>
          <img src={imageUrl}></img>
        </div>
        <div>
          Skills:
          <ul>
            {skillSet()}
          </ul>
        </div>
      </div>
    );
  }
  
  export default PokemonCard;