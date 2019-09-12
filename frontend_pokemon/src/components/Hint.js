import React from 'react';
import '../css/pokemon_container.css'

function Hint(props) {
    return (
      <>
      <div className="leaderboard">
        <p >Are you sure you want to choose that skill? Hint, your opponents name is {props.hint.name} </p>
      </div>
      </>
    );
  }
  
  export default Hint;