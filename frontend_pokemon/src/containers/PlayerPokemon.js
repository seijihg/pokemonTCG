import React from "react"
import PokemonCard from "../components/PokemonCard";
import SkillsDropDown from './SkillsDropDown'

class PlayerPokemon extends React.Component {

    //on user click should do two things- generate random comp cards and user card


    render() {

      const playerCards= this.props.cards.map(card=>{
        return <PokemonCard pokemon={card} />
      })

      const skills= this.props.cards.map(card=>{
        return < SkillsDropDown handleSkillSelection={(e)=>this.props.handleSkillSelection(e)} pokemon={card}/>
      })

    return (
      <div>
        {playerCards}
        {skills}
      </div>
    );
  }
}

export default PlayerPokemon