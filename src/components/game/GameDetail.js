import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider";

export const GameDetail = (props) => {
    const {getGamesById} = useContext(GameContext)

    const  [game, setGame] = useState({})

    useEffect(() => {
        getGamesById()
    })

    useEffect(() => {
        const gameId = parseInt(props.match.params.gameId)
        getGamesById(gameId)
            .then(setGame)
    }, [])

    return (
        <section>
            <h3>{game.title}</h3>
            <div>{game.description}</div>
            <div><strong>Designed By:</strong> {game.designer}</div>
            <div><strong>Recommended Number Of Players:</strong> {game.num_of_players}</div>
            <div><strong>Year Released: </strong>{game.year_released}</div>
            <div><strong>Estimated Gameplay:</strong> {game.est_time} minutes</div>
            <div><strong>Recommended Age To Play:</strong> {game.age_rec}+</div>
        </section>
    )

}