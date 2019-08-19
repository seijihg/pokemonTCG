import React from "react";
import PlayerPokemon from "./PlayerPokemon";
import ComputerPokemon from "./ComputerPokemon";
import Instructions from "../components/Instructions";
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
      .then(res =>
        this.setState({
          pokemonCards: res
        })
      );
  }

  startButtonHandler = () => {};

  render() {
    return (
      <div>
        <Instructions startButtonHandler={this.startButtonHandler} />
        <PlayerPokemon cards={this.state.playerChosenCards} />
        <ComputerPokemon cards={this.state.randomComputerCards} />
      </div>
    );
  }
}
