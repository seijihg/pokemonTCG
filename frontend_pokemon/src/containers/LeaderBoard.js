import React from 'react'
import '../css/pokemon_container.css'

const fetchData = () => {
    return fetch('http://localhost:3000/games')
    .then(resp => resp.json())
}

const LeaderBoard = (props) => {
    const {goBackHandler} = props
    const [games, setGames] = React.useState([])

    React.useEffect(() => {
        fetchGames()
    })

    const fetchGames = () => {
        fetchData()
        .then(games => setGames(games))
    }

    const listOfGames = () => {
        const sorted_games = games.sort(function(gameA, gameB){return gameB.score - gameA.score})
        return sorted_games.map(game => {
            return(
                <li>{game.player_name}. The Score of: {game.score}</li>
            )
        })
    }

    return(
        <div className="leaderboard">
            <ul className="leaderboard">
                <p>SCORE LEADERBOARD</p>
                {listOfGames()}
            </ul>
            <div className="btn">
                <button onClick={()=>window.location='/'} className="start">HOME</button>
            </div>
        </div>
    )
}

export default LeaderBoard