import React from 'react';
import '../css/pokemon_container.css'

function Instructions(props) {
    return (
      <>
      <div className="title">
        <img src="https://fontmeme.com/permalink/190820/1ed77875eda4ed0b2d81aa849a1b8217.png" alt="pokemon_game"></img>
        <p>Pick a pokemon card fight through other trainers and be the champion with the highest score!</p>
      </div>
      <div className="btn">
        <button onClick={props.startButtonHandler} className="start">BATTLE BEGINS!</button>
      </div>
      </>
    );
  }
  
  export default Instructions;