import React from 'react'

const BattleButton = (props) => {
    return (
        <div>
            <button onClick={props.battleHandler}>BATTLE!</button>
        </div>
    )
}

export default BattleButton