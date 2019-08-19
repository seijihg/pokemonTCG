import React from 'react';

function Instructions(props) {
    return (
      <div className="card">
       <h1>Welcome to Pokemon</h1>
       <p>This is how you play the game</p>
       <button onClick={props.startButtonHandler}>Start</button>
      </div>
    );
  }
  
  export default Instructions;