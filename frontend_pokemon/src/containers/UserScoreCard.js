import React from "react";

class UserScoreCard extends React.Component {

  

  render() {
    return (
      <>
      <h1>Your Score:{this.props.score}</h1>
      </>
    )
  }
}

export default UserScoreCard;