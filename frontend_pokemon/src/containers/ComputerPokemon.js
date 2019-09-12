import React from "react"
import backCard from '../img/pokemon_card.png'
import '../css/pokemon_container.css'

const ComputerPokemon = (props) => {
  const {flipped, pokemon} = props

  const isFlipped = () => {
  if (flipped)  {return <img src={pokemon.imageUrl} width="180px" className="back"></img>}

  return <img src={backCard} width="180px" className="front"></img>
  }
  
  return (
    <div className="container">
      {isFlipped()}
    </div>
  )
}

export default ComputerPokemon