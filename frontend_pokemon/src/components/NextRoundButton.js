import React from 'react'
import '../css/pokemon_container.css'

const NextRoundButton = (props) => {
    return (
        <div className="btn" >
            <button className="start" onClick={props.nextRound}>NEXT ROUND!</button>
        </div>
    )
}

export default NextRoundButton