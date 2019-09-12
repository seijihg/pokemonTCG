import React from "react";

class UserScoreCard extends React.Component {

  

  render() {
    return (
      <>
      <h1 className="leaderboard">Your Score:{this.props.score}</h1>
      </>
    )
  }
}

export default UserScoreCard;