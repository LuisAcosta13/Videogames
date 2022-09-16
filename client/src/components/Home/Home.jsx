import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getVideogame } from "../../Redux/Actions";
import NavBar from "../NavBar/NavBar";
import VideogameCard from "../VideogameCard/VideogameCard";
import './Home.css'


export const Home = () => {

    const videogame = useSelector(state => state.videogames)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllVideogames())
    }, [])

    const videogameList = useSelector(state => state.videogamesList)

    const [game, setGame] = useState('')
    
    function handleInputChange(e){
        setGame(e.target.value)
    }

    function show(id){
        var elem = document.getElementById(id)
        elem.style.display = 'block'
    }

    function hide(id){
        var elem = document.getElementById(id)
        elem.style.display = 'none'
    }

    function clean(){
        hide('List')
        show('Principal')
    }

    function handleSubmit(){
       if(game){ dispatch(getVideogame(game))
        setGame('')
        setTimeout(function(){
            hide('Principal')
            show('List')
            }, 1000)
        }
    }

    return(
        <div className="Body">
            <div>
                {<NavBar/>}
            </div>

            <div className="SearchBar">
                <input 
                    id='input' 
                    type='text' 
                    autoComplete="off"
                    placeholder='Find a game...'
                    value={game}
                    onChange={(e) => handleInputChange(e)}
                />
                <button onClick={() => handleSubmit()}>
                    Search
                </button>
                <button onClick={() => clean()}>
                    Clean
                </button>
            </div>
            <div>
                <div id='List' className="List">
                    {videogameList && videogameList.map(gameListed => {return(<VideogameCard key={gameListed.id} id={gameListed.id} img={gameListed.background_image} name={gameListed.name} genres={gameListed.genres.map(gen => <p>{gen.name}</p>)}/>)})}
                </div>
                <div id='Principal' className="Gallery">
                    {videogame && videogame.map(game => {return(<VideogameCard key={game.id} id={game.id} img={game.background_image} name={game.name} genres={game.genres.map(g => <p>{g.name}</p>)}/>)})}
                </div>
            </div>
        </div>
    )
}