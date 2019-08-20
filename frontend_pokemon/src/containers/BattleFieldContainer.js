import React from "react";
import PlayerPokemon from "./PlayerPokemon";
import ComputerPokemon from "./ComputerPokemon";
import Instructions from "../components/Instructions";
import PokemonCard from "../components/PokemonCard";
import PokemonCardContainer from "./PokemonCardContainer";
import PokemonCPUFiveCards from "./PokemonBackCardCPU";
import BattleButton from "../components/BattleButton";
import NextRoundButton from "../components/NextRoundButton";
import "../css/battlefield_container.css";
import UserScoreCard from "./UserScoreCard";
import LeaderForm from "./LeaderForm";

const pokemonUrl = "http://localhost:3005/cards";
const gameUrl = "http://localhost:3000/games";

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
    showGivenCards: false,
    cpuCard: false,
    cpuGivenCard: null,
    playerChosenSkill: 0,
    cpuChosenSkill: 0,
    userScore: 0,
    playerHasSelectedCard: false,
    inGame: false,
    showLeaderBoardForm: false
  };

  handleLeaderFormSubmit = (e, userScore) => {
    e.preventDefault();

    return fetch(gameUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        player_name: e.target.name.value,
        score: userScore
      })
    })
      .then(response => response.json())
      .then((window.location = "/leaderboard"));
  };

  startButtonHandler = () => {
    fetch(pokemonUrl)
      .then(resp => resp.json())
      .then(pokemons => {
        this.setState({
          pokemonCards: pokemons
        });
        return pokemons;
      })

      .then(pokes => {
        const playerCards = getRandom(pokes, 5);
        const cpuCard = getRandom(this.state.pokemonCards, 1)[0];
        this.setState({
          playerGivenCards: playerCards,
          cpuGivenCard: cpuCard
        });
      });

    this.setState({
      showGivenCards: !this.state.showGivenCards
    });
  };

  onCardClick = (e, card) => {
    this.setState({
      playerChosenCard: card,
      playerHasSelectedCard: true
    });
  };

  handleSkillSelection = event => {
    this.setState({
      playerChosenSkill: event.target.value
    });
  };

  battleHandler = () => {
    if (this.state.playerHasSelectedCard === true) {
      const skillCpu = this.state.cpuGivenCard.attacks.filter(skill => {
        return skill.damage > 0;
      });
      this.setState({
        cpuCard: true,
        cpuChosenSkill: getRandom(skillCpu, 1)[0].damage,
        playerHasSelectedCard: !this.state.playerHasSelectedCard,
        inGame: true
      });
      this.compareScores();
    } else {
      window.alert("You must select a card first!");
    }
  };

  nextRoundHandler = () => {
    if (this.state.playerHasSelectedCard === true) {
      const newCpuCard = getRandom(this.state.pokemonCards, 1)[0];
      const skill = newCpuCard.attacks.filter(skill => {
        return skill.damage > 0;
      });

      this.setState({
        cpuCard: false,
        cpuGivenCard: newCpuCard,
        cpuChosenSkill: getRandom(skill, 1)[0].damage,
        playerGivenCards: getRandom(this.state.pokemonCards, 5),
        playerHasSelectedCard: !this.state.playerHasSelectedCard,
        inGame: true
      });
      this.compareScores();
    } else {
      window.alert("You must select a card first!");
    }
  };
  compareScores = () => {
    if (
      Number(this.state.cpuChosenSkill) > Number(this.state.playerChosenSkill)
    ) {
      window.alert("you lost, game over");
      this.setState({
        showScoreCard: false,
        userScore: this.state.userScore,
        showLeaderBoardForm: true,
        showGivenCards: false,
        hideNextRoundButton: true,
        inGame: false
      });
    } else {
      window.alert("A win! Keep going");
      this.setState({
        userScore: this.state.userScore + 10,
        showScoreCard: true
      });
    }
  };

  cpuField = () => {
    if (this.state.showGivenCards) {
      return (
        <div>
          <PokemonCPUFiveCards />
          <ComputerPokemon
            flipped={this.state.cpuCard}
            pokemon={this.state.cpuGivenCard}
          />

          {this.state.inGame ? (
            <NextRoundButton nextRound={this.nextRoundHandler} />
          ) : (
            <BattleButton battleHandler={this.battleHandler} />
          )}
          {this.state.showScoreCard ? (
            <UserScoreCard score={this.state.userScore} />
          ) : null}
        </div>
      );
    }
  };

  render() {
    if (this.state.showLeaderBoardForm === true) {
      return (
        <LeaderForm
          score={this.state.userScore}
          handleLeaderFormSubmit={e =>
            this.handleLeaderFormSubmit(e, this.state.userScore)
          }
        />
      );
    } else {
      return (
        <div className="battlefield">
          {this.cpuField()}
          {this.state.playerChosenCard ? (
            <PlayerPokemon
              handleSkillSelection={this.handleSkillSelection}
              card={this.state.playerChosenCard}
            />
          ) : null}

          {this.state.showGivenCards ? (
            <PokemonCardContainer
              onCardClick={this.onCardClick}
              pokemons={this.state.playerGivenCards}
            />
          ) : (
            <Instructions startButtonHandler={this.startButtonHandler} />
          )}
        </div>
      );
    }
  }
}
