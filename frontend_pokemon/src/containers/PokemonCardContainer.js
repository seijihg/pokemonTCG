import React from "react";
import PokemonCard from "../components/PokemonCard";
import "../css/pokemon_container.css";

const randomNumber = Math.floor(Math.random() * 1000 + 1);

class PokemonCardContainer extends React.Component {
  render() {
    const pokes = this.props.pokemons.map(poke => {
      return (
        <li key={randomNumber}>
          <PokemonCard
            key={poke.id + randomNumber}
            onCardClick={e => this.props.onCardClick(e, poke)}
            pokemon={poke}
          />
        </li>
      );
    });
    return (
      <div>
        <ul key={randomNumber} className="card_container">
          {pokes}
        </ul>
      </div>
    );
  }
}

export default PokemonCardContainer;
