import React from "react" 

const frontPage = () => {
    return (
      <>
      <div className="title">
        <img src="https://fontmeme.com/permalink/190820/1ed77875eda4ed0b2d81aa849a1b8217.png" alt="pokemon_game"></img>
        <p>Pick a pokemon card, fight other trainers and be the champion with the highest score!</p>
      </div>
      <div className="btn">
        <button onClick={() =>  window.location = '/battlefield'}  className="start">START</button>
      </div>
      <div className="btn">
        <button onClick={() =>  window.location = '/leaderboard'} className="start">LEADERBOARD</button>
      </div>
      </>
    )
  }

  export default frontPage 