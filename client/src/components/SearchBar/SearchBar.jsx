import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getVideogame } from "../../Redux/Actions"
import VideogameCard from "../VideogameCard/VideogameCard"
import './SearchBar.css'


export default function SearchBar(){
const dispatch = useDispatch()
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
    show('Filters')
    show('Principal')
    hide('cleanButton')
}
function handleSubmit(){
   if(game){ 
    dispatch(getVideogame(game))
    setGame('')
    setTimeout(function(){
        hide('Principal')
        show('List')
        }, 1000)
    }
    show('cleanButton')
}

return(
        <div>
            <div className="SearchBar">
                <input 
                    id='input' 
                    type='text' 
                    autoComplete="off"
                    placeholder='Find a game...'
                    value={game}
                    onChange={(e) => handleInputChange(e)}
                    onKeyDown={(e) =>{if(e.key === 'Enter'){handleSubmit()}}}
                />
                <button id="cleanButton" onClick={() => clean()}>
                    Clean
                </button>
            </div>
            <div id='List' className="List">
                {videogameList && videogameList.map(gameListed => {return(<VideogameCard key={gameListed.id} id={gameListed.id} img={gameListed.background_image} name={gameListed.name} rating_top={gameListed.rating_top} genres={gameListed.genres.map(gen => <p key={gen.name}>{gen.name}</p>)}/>)})}
            </div>
        </div>     
    )
}