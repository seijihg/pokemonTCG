import React from "react";

class LeaderForm extends React.Component {
  render() {
    return (
      <>
        <h1>Your Score: {this.props.score}</h1>
        <form onSubmit={this.props.handleLeaderFormSubmit}>
          <input type="text" name="name" placeholder="Your name" />
          <input type="submit"></input>
        </form>
      </>
    );
  }
}

export default LeaderForm;
