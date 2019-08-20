import React from "react";
import PlayerPokemon from "./PlayerPokemon";
import ComputerPokemon from "./ComputerPokemon";
import Instructions from "../components/Instructions";
import PokemonCard from "../components/PokemonCard";
import PokemonCardContainer from './PokemonCardContainer'
import PokemonCPUFiveCards from "./PokemonBackCardCPU";
import BattleButton from '../components/BattleButton'
import '../css/battlefield_container.css'


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
    playerGivenCards: [],
    playerChosenCard: null,
    score: [],
    showSingleCardAndSkills: false,
    showGivenCards: false,
    cpuCard: false,
    cpuGivenCard: null,
    playerChosenSkill: 0,
    cpuChosenSkill: 0
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
        const playerCards = getRandom(pokes, 5)
        const cpuCard = getRandom(this.state.pokemonCards, 1)[0]
        this.setState({
          playerGivenCards: playerCards,
          cpuGivenCard: cpuCard
        });
      });
  }
  startButtonHandler = () => {
    this.setState({
      showGivenCards: !this.state.showGivenCards
    });
  };
  onCardClick=(e,card)=>{
    this.setState({
      playerChosenCard: card
    })
  }

  handleSkillSelection=(event)=>{
    event.preventDefault()
    console.log(event.target.value)
    this.setState({
      playerChosenSkill: event.target.value
    })
  }

  battleHandler = () => {
    const skillCpu = this.state.cpuGivenCard.attacks.filter(skill => {return skill.damage > 0 })
    console.log(skillCpu)
    this.setState({
      cpuCard: true,
      cpuChosenSkill: getRandom(skillCpu, 1)[0].damage
    })
  }

  cpuField = () => {
    if (this.state.showGivenCards) {
    return (
    <div>
      <PokemonCPUFiveCards />
      <ComputerPokemon flipped={this.state.cpuCard} pokemon={this.state.cpuGivenCard}/>
      <BattleButton battleHandler={this.battleHandler}/>
    </div>
    )}
  }

  render() {
    return (
      <div className="battlefield">
        {this.cpuField()}
         {this.state.playerChosenCard ? 
         <PlayerPokemon handleSkillSelection={this.handleSkillSelection} card={this.state.playerChosenCard} /> :
         null
        }
         
        {this.state.showGivenCards ?  <PokemonCardContainer onCardClick={this.onCardClick} pokemons={this.state.playerGivenCards} /> :  <Instructions startButtonHandler={this.startButtonHandler} /> }
      </div>
    );
  }
}
