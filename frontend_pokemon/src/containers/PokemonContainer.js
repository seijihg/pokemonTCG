import React from "react";
import BattleFieldContainer from "./BattleFieldContainer";
import About from "./About";
import LeaderBoard from "./LeaderBoard";

class PokemonContainer extends React.Component {
  
    render() {
    return (
      <div>
        {/* <About /> */}
        <BattleFieldContainer />
        {/* <LeaderBoard /> */}
      </div>
    );
  }
}

export default PokemonContainer