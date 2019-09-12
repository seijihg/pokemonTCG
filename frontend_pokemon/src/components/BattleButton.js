import React from 'react'
import '../css/pokemon_container.css'

const BattleButton = (props) => {
    return (
        <div className="btn">
            <button className="start" onClick={props.battleHandler}>BATTLE!</button>
        </div>
    )
}

export default BattleButton