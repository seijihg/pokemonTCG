import React from "react"
import '../css/pokemon_container.css'
import backCard from '../img/pokemon_card.png'

const PokemonCPUFiveCards = () => {
    return (
        <div>
          <ul className="card_container">
            <li>
                <img src={backCard} width="180px"></img>
            </li>
            <li>
                <img src={backCard} width="180px"></img>
            </li>
            <li>
                <img src={backCard} width="180px"></img>
            </li>
            <li>
                <img src={backCard} width="180px"></img>
            </li>
            <li>
                <img src={backCard} width="180px"></img>
            </li>
          </ul>
        </div>
      )
}

export default PokemonCPUFiveCards