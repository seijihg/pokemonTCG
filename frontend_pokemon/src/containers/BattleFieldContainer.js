import React from "react";
import PlayerPokemon from "./PlayerPokemon";
import ComputerPokemon from "./ComputerPokemon";
import Instructions from "../components/Instructions";
import PokemonCard from "../components/PokemonCard";
const pokemonUrl = "https://api.pokemontcg.io/v1/cards?subtype=Basic";

function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default class BattleFieldContainer extends React.Component {
  state = {
    pokemonCards: [],
    randomComputerCards: [],
    playerGivenCards: [],
    playerChosenCard: [],
    score: [],
    showSingleCardAndSkills: false
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

  startButtonHandler = () => {
    const shuffle = this.state.pokemonCards.cards;
    const playerCards = getRandom(shuffle, 5);

    this.setState({
      playerGivenCards: playerCards
    });
  };

  onPlayerCardClick = (event, card) => {
    this.setState({
      playerChosenCard: [card],
      showSingleCardAndSkills: !this.state.showSingleCardAndSkills
    });
  };

  playerCards = () => {
    if (this.state.showSingleCardAndSkills===true){
      return this.state.playerChosenCard
    }else{
      return this.state.playerGivenCards;
    } 
  };

  pokemonCardsRender = () => {
    return this.state.pokemonCards.map(elem => {
      return <PokemonCard pokemon={elem} />
    })
  }

  render() {
    return (
      <div>
        <Instructions startButtonHandler={this.startButtonHandler} />
        <PlayerPokemon cards={this.playerCards()} onPlayerCardClick={this.onPlayerCardClick} />
        <ComputerPokemon cards={this.state.randomComputerCards} />
        {this.pokemonCardsRender()}
      </div>
    );
  }
}
