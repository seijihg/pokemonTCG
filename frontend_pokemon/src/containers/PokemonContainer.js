import React from "react";
import '../css/pokemon_container.css'
import BattleFieldContainer from './BattleFieldContainer'
import LeaderBoard from './LeaderBoard'
import FrontPage from './FrontPage'
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


  
    render() {
    return (
      <Router>
        <div>
         
        <Route exact path="/" render={() => <FrontPage />}/>
        <Route exact path='/leaderboard' render={() => <LeaderBoard goBackHandler={this.goBackHandler}/>}/>
        <Route exact path="/battlefield" render={() => <BattleFieldContainer />}/>
      </div>
      </Router>
    );
  }
}

export default PokemonContainer