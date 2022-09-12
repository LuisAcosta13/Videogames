import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../Redux/Actions";
import VideogameCard from "../VideogameCard/VideogameCard";
import './Videogames.css'

export const Videogames = () => {
    const videogame = useSelector(state => state.videogames)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllVideogames())
    }, [])

    return(
        <div>
            <h1>Juego</h1>
            <div className="Gallery">
                {videogame && videogame.map(game => {return(<VideogameCard key={game.id} img={game.background_image} name={game.name} genres={game.genres.map(g => <p>{g.name}</p>)}/>)})}
            </div>
        </div>
    )
}
