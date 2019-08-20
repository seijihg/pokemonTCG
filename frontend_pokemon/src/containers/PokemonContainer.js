import React from "react";
import '../css/pokemon_container.css'
import BattleFieldContainer from './BattleFieldContainer'
import LeaderBoard from './LeaderBoard'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class PokemonContainer extends React.Component {
  state = {
    openBattlefield: false,
    openLeaderBoard: false
  }

  goBackHandler = () => {
    this.setState({
      openLeaderBoard:false
    })
  }

  frontPage = () => {
    return (
      <>
      <div className="title">
        <img src="https://fontmeme.com/permalink/190820/1ed77875eda4ed0b2d81aa849a1b8217.png" alt="pokemon_game"></img>
        <p>Pick a pokemon card, fight other trainers and be the champion with the highest score!</p>
      </div>
      <div className="btn">
        <button onClick={() => this.setState({openBattlefield: true})} className="start">START</button>
      </div>
      <div className="btn">
        <button onClick={() =>  window.location = '/leaderboard'} className="start">LEADERBOARD</button>
      </div>
      </>
    )
  }
  
    render() {
    return (
      <Router>
        <div>
        {this.frontPage()}
        <Route exact path='/leaderboard' render={() => <LeaderBoard goBackHandler={this.goBackHandler}/>}/>
        <Route exact path="/battlefield" render={() => <BattleFieldContainer />}/>
      </div>
      </Router>
    );
  }
}

export default PokemonContainer