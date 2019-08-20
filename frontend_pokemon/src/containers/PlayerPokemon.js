import React from "react"
import PokemonCard from "../components/PokemonCard";
import SkillsDropDown from './SkillsDropDown'

class PlayerPokemon extends React.Component {

    render() {

    return (
      <div>
        {<PokemonCard pokemon={this.props.card} />}
        {< SkillsDropDown handleSkillSelection={this.props.handleSkillSelection} {...this.props.card}/>}
      </div>
    );
  }
}

export default PlayerPokemon