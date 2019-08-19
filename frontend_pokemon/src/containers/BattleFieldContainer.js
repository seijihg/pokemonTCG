import React from "react";
import PlayerPokemon from "./PlayerPokemon";
import ComputerPokemon from "./ComputerPokemon";
import Instructions from "../components/Instructions";
import PokemonCard from "../components/PokemonCard";
const pokemonUrl = "https://api.pokemontcg.io/v1/cards?subtype=Basic";

export default class BattleFieldContainer extends React.Component {
  state = {
    pokemonCards: [],
    randomComputerCards: [],
    playerGivenCards:[],
    playerChosenCards: [],
    score: []
  };

  componentDidMount() {
    fetch(pokemonUrl)
      .then(resp => resp.json())
      .then(pokemons => {
        const pokeList = pokemons.cards.filter(c => c.attacks !== undefined)
        this.setState({
          pokemonCards: pokeList
        })
      })
  }

  startButtonHandler = () => {};

  pokemonCardsRender = () => {
    return this.state.pokemonCards.map(elem => {
      return <PokemonCard pokemon={elem} />
    })
  }

  render() {
    return (
      <div>
        <Instructions startButtonHandler={this.startButtonHandler} />
        <PlayerPokemon cards={this.state.playerChosenCards} />
        <ComputerPokemon cards={this.state.randomComputerCards} />
        {this.pokemonCardsRender()}
      </div>
    );
  }
}
