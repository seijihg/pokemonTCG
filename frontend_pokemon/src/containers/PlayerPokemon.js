import React from "react"
import PokemonCard from "../components/PokemonCard";

class PlayerPokemon extends React.Component {

    //on user click should do two things- generate random comp cards and user card


    render() {

      const playerCards= this.props.cards.map(card=>{
        return <PokemonCard onPlayerCardClick={(e)=>this.props.onPlayerCardClick(e,card)} card={card} />
      })

    return (
      <div>
        {playerCards}
      </div>
    );
  }
}

export default PlayerPokemon