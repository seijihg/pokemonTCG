import React from "react";
import PlayerPokemon from "./PlayerPokemon";
import ComputerPokemon from "./ComputerPokemon";
import Instructions from "../components/Instructions";
import PokemonCard from "../components/PokemonCard";
import PokemonCardContainer from "./PokemonCardContainer";

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
    showSingleCardAndSkills: false,
    showGivenCards: false
  };

  componentDidMount() {
    fetch(pokemonUrl)
      .then(resp => resp.json())
      .then(pokemons => {
        const pokeList = pokemons.cards.filter(c => c.attacks !== undefined);
        this.setState({
          pokemonCards: pokeList
        });
        return pokeList;
      })
      .then(pokes => {
        const playerCards = getRandom(pokes, 5);
        this.setState({
          playerGivenCards: playerCards
        });
      });
  }

  onPlayerCardClick = (event, card) => {
    this.setState({
      playerChosenCard: [card],
      showSingleCardAndSkills: !this.state.showSingleCardAndSkills
    });
  };

  // playerCards = () => {
  //   if (this.state.showSingleCardAndSkills === true) {
  //     return this.state.playerChosenCard;
  //   } else {
  //     return this.state.playerGivenCards;
  //   }
  // };

  startButtonHandler = () => {
    this.setState({
      showGivenCards: !this.state.showGivenCards
    });
  };

  onCardClick=(e,card)=>{
this.setState({
  playerChosenCard: [card]
  // showSingleCardAndSkills: !this.state.showSingleCardAndSkills
})
  }

  handleSkillSelection=(e)=>{
    e.preventDefault()
  }

  render() {
    return (
      <div>
         <PlayerPokemon handleSkillSelection={this.handleSkillSelection}cards={this.state.playerChosenCard} />
        {this.state.showGivenCards ?  <PokemonCardContainer onCardClick={this.onCardClick} pokemons={this.state.playerGivenCards} /> :  <Instructions startButtonHandler={this.startButtonHandler} /> }
       
      
       
        {/* <ComputerPokemon cards={this.state.randomComputerCards} /> */}
       
      </div>
    );
  }
}
