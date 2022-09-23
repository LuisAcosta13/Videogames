import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, getVideogame, orderByAsc, orderByDesc, orderByRating } from "../../Redux/Actions";
import Pagination from "../Pagination/Pagination.jsx";
import VideogameCard from "../VideogameCard/VideogameCard.jsx";
import './Home.css'

var page = 1
var byAsc = false
var byDesc = false
var byRating = false

export const Home = () => {

    const videogame = useSelector(state => state.videogames)
    videogame.length = 15
    const dispatch = useDispatch()

    useEffect(() => {
        if(byRating === true){
            dispatch(orderByRating(page))
        } else if (byAsc === true){
            dispatch(orderByAsc(page))
        } else if(byDesc === true) {
            dispatch(orderByDesc(page))
        } else {
            dispatch(getAllVideogames(page))
        }
    }, [dispatch])

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

    function onSelected(){
        if(document.getElementById('select').selectedIndex === 1){
            if(byAsc === false){
                byAsc = true
                byRating = false
                dispatch(orderByAsc(page))
            }
        }
        if(document.getElementById('select').selectedIndex === 2){
            if(byDesc === false){
               byDesc = true
                byAsc = false
                byRating = false
                dispatch(orderByDesc(page)) 
            }
        }
        if(document.getElementById('select').selectedIndex === 3){
            if(byRating === false){
                byRating = true
                byAsc = false
                dispatch(orderByRating(page))  
            }
        }
        if(document.getElementById('select').selectedIndex === 0){
            byAsc = false
            byRating = false
            dispatch(getAllVideogames(page))
        }
    }
    
    function onPrevious(){
        if(page > 1){
          page--
            if(byRating === true){
                dispatch(orderByRating(page))
            } else if (byAsc === true){
                dispatch(orderByAsc(page))
            } else if(byDesc === true) {
                dispatch(orderByDesc(page))
            } else {
                dispatch(getAllVideogames(page))
            }
        } else {
            page = 100
            dispatch(getAllVideogames(page))
        }
    }

    function onNext(){
        if(page < 100){
            page++
            if(byRating === true){
                dispatch(orderByRating(page))
            } else if (byAsc === true){
                dispatch(orderByAsc(page))
            } else if(byDesc === true) {
                dispatch(orderByDesc(page))
            } else {
                dispatch(getAllVideogames(page))
            }
        } else {
            page = 1
            dispatch(getAllVideogames(page))
        }
    }

    return(
        <div className="Body">
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
                <button onClick={() => handleSubmit()}>
                    Search
                </button>
                <button onClick={() => clean()}>
                    Clean
                </button>
            </div>

            <div id='List' className="List">
                {videogameList && videogameList.map(gameListed => {return(<VideogameCard key={gameListed.id} id={gameListed.id} img={gameListed.background_image} name={gameListed.name} rating_top={gameListed.rating_top} genres={gameListed.genres.map(gen => <p key={gen.name}>{gen.name}</p>)}/>)})}
            </div>
            <div id='Principal' className="Gallery">
                <div id='Filters' className="Filters">
                    Order by: 
                    <select name='select' id='select' onClick={onSelected}>
                        <option className='option' id='option1' value='value1'>Default</option>
                        <option className='option' id='option2' value='value2'>A - Z</option>
                        <option className='option' id='option3' value='value3'>Z - A</option>
                        <option className='option' id='option4' value='value4'>Rating</option>
                    </select>
                </div>
                <Pagination onPrevious={onPrevious} onNext={onNext} page={page}/>
                {videogame && videogame.map(game => {return(<VideogameCard key={game.id} id={game.id} img={game.background_image} name={game.name} rating_top={game.rating_top} genres={game.genres.map(g => <p key={g.name}>{g.name}</p>)}/>)})}
                <Pagination onPrevious={onPrevious} onNext={onNext} page={page}/>
            </div>
        </div>
    )
}