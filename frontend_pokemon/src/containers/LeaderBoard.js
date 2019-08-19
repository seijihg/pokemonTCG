import React from 'react'

const fetchData = () => {
    return fetch('http://localhost:3000/games')
    .then(resp => resp.json())
}

const LeaderBoard = () => {
    const [games, setGames] = React.useState([])

    React.useEffect(() => {
        fetchGames()
    })

    const fetchGames = () => {
        fetchData()
        .then(games => setGames(games))
    }

    const listOfGames = () => {
        return games.map(game => {
            return(
                <li>{game.player_name}. The Score of: {game.score}</li>
            )
        })
    }

    return(
        <div className="leaderboard">
            <ul>
                {listOfGames()}
            </ul>
        </div>
    )
}

export default LeaderBoard