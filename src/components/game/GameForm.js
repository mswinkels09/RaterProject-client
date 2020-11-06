import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"


export const GameForm = props => {
    const { createGame, updateGame } = useContext(GameContext)

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        designer: "",
        numberOfPlayers: 0,
        title: "",
        yearReleased: 0,
        ageRecommendation: 0,
        estimatedTime: 0,
        description: ""
    })

    /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    */
    // useEffect(() => {
    //     getGameTypes()
    // }, [])

    /*
        Update the `currentGame` state variable every time
        the state of one of the input fields changes.
    */
    const handleControlledInputChange = (event) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[event.target.name] = event.target.value
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="yearReleased">Year Released: </label>
                    <input type="text" name="yearReleased" required autoFocus className="form-control"
                        value={currentGame.yearReleased}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number Of Players Needed: </label>
                    <input type="text" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ageRecommendation">Age Recommendation: </label>
                    <input type="text" name="ageRecommendation" required autoFocus className="form-control"
                        value={currentGame.ageRecommendation}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimatedTime">Estimated Time To Play: </label>
                    <input type="text" name="estimatedTime" required autoFocus className="form-control"
                        value={currentGame.estimatedTime}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <select name="categoryId" className="form-control"
                        proptype="int"
                        value={currentGame.categoryId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a category:</option>
                        {categories.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset> */}

            {/* {
                ("gameId" in props.match.params)
                ?<button 
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()
    
                        updateGame({
                            id:props.match.params.gameId,
                            title: currentGame.title,
                            designer: parseInt(currentGame.designer),
                            skillLevel: parseInt(currentGame.skillLevel),
                            gameTypeId: parseInt(currentGame.gameTypeId)
                        })
                        .then(() => props.history.push("/games"))
                    }}
                    className="btn btn-primary">Edit</button>
                :  */}
                <button type="submit"
                    onClick={evt => {
                        // Prevent form from being submitted
                        evt.preventDefault()
    
                        const game = {
                            title: currentGame.title,
                            designer: currentGame.designer,
                            numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                            yearReleased: parseInt(currentGame.yearReleased),
                            ageRecommendation: parseInt(currentGame.ageRecommendation),
                            estimatedTime: parseInt(currentGame.estimatedTime),
                            description: currentGame.description
                        }
    
                        // Send POST request to your API
                        createGame(game)
                            .then(props.history.push("/games"))
                    }}
                    className="btn btn-primary">Create</button>
            {/* } */}

        </form>
    )
}