import React from "react"
import PokemonCard from "../components/PokemonCard"


class PokemonCardContainer extends React.Component {

    render() {
      const pokes= this.props.pokemons.map(poke=>{
        return <li><PokemonCard onCardClick={(e)=>this.props.onCardClick(e,poke)}pokemon={poke}/></li>
      })
    return (
      <div>
        <ul className="card_container">
          {pokes}
        </ul>
      </div>
    );
  }
}

export default PokemonCardContainer