import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, orderByAsc, orderByDesc, orderByRating, filterByGenre, filterByDatabase } from "../../Redux/Actions";
import Pagination from "../Pagination/Pagination.jsx";
import VideogameCard from "../VideogameCard/VideogameCard.jsx";
import './Home.css'
import SearchBar from "../SearchBar/SearchBar";

var byAsc = false
var byDesc = false
var byRating = false
var filterOn = false

export const Home = () => {
    const dispatch = useDispatch()
    const videogames = useSelector(state => state.videogames)

    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch])

    function render(){
        if(byRating === true){
            dispatch(orderByRating())
        } else if (byAsc === true){
            dispatch(orderByAsc())
        } else if(byDesc === true) {
            dispatch(orderByDesc())
        } else {
            dispatch(getAllVideogames())
        }
    }
    
    function byOrder(){
        if(document.getElementById('select').selectedIndex === 1){
            if(byAsc === false){
                byAsc = true
                byRating = false
                dispatch(orderByAsc())
                document.getElementById('filter').selectedIndex = 0
            }
        }
        if(document.getElementById('select').selectedIndex === 2){
            if(byDesc === false){
               byDesc = true
                byAsc = false
                byRating = false
                dispatch(orderByDesc())
                document.getElementById('filter').selectedIndex = 0
            }
        }
        if(document.getElementById('select').selectedIndex === 3){
            if(byRating === false){
                byRating = true
                byAsc = false
                dispatch(orderByRating()) 
                document.getElementById('filter').selectedIndex = 0
            }
        }
        if(document.getElementById('select').selectedIndex === 0){
            byAsc = false
            byRating = false
            dispatch(getAllVideogames())
            document.getElementById('filter').selectedIndex = 0
        }
    }
    // function onPrevious(){
    //     if(page > 1){
    //       page--
    //       render()
    //     } else {
    //         page = 100
    //         render()
    //     }
    // }
    // function onNext(){
    //     if(page < 100){
    //         page++
    //         render()
    //     } else {
    //         page = 1
    //         render()
    //     }
    // }

    function byFilter(){
        var e = document.getElementById('filter')
        if(e.selectedIndex === 0){
            filterOn = false
            render()
        } else if(e.selectedIndex === 1){
            dispatch(filterByDatabase())
            document.getElementById('select').selectedIndex = 0
        } else {
            filterOn = true
            dispatch(filterByGenre(e.options[e.selectedIndex].text))
            document.getElementById('select').selectedIndex = 0
        }
    }

    return(
        <div className="Body">
            <SearchBar/>
            <div id='Principal' className="Gallery">
                <div id='Filters' className="Filters">
                    Order by: 
                    <select name='select' id='select' onClick={byOrder}>
                        <option className='option' id='option1' value='value1'>Default</option>
                        <option className='option' id='option2' value='value2'>A - Z</option>
                        <option className='option' id='option3' value='value3'>Z - A</option>
                        <option className='option' id='option4' value='value4'>Rating</option>
                    </select>
                    Filter by:
                    <select name='filter' id='filter' onClick={byFilter}>
                        <option className='option' id='filterOp1' value='filterVal1'>Default</option>
                        <option className='option' id='filterOp2' value='filterVal2'>Created</option>
                        <option className='option' id='filterOp3' value='filterVal3'>Action</option>
                        <option className='option' id='filterOp4' value='filterVal4'>Shooter</option>
                        <option className='option' id='filterOp5' value='filterVal5'>Platformer</option>
                        <option className='option' id='filterOp6' value='filterVal6'>Family</option>
                        <option className='option' id='filterOp7' value='filterVal7'>Adventure</option>
                        <option className='option' id='filterOp8' value='filterVal8'>Simulation</option>
                        <option className='option' id='filterOp9' value='filterVal9'>Massively Multiplayer</option>
                        <option className='option' id='filterOp10' value='filterVal10'>Educational</option>
                        <option className='option' id='filterOp11' value='filterVal11'>Indie</option>
                        <option className='option' id='filterOp12' value='filterVal12'>Puzzle</option>
                        <option className='option' id='filterOp13' value='filterVal13'>Sports</option>
                        <option className='option' id='filterOp14' value='filterVal14'>Card</option>
                        <option className='option' id='filterOp15' value='filterVal15'>RPG</option>
                        <option className='option' id='filterOp16' value='filterVal16'>Arcade</option>
                        <option className='option' id='filterOp17' value='filterVal17'>Fighting</option>
                        <option className='option' id='filterOp18' value='filterVal18'>Strategy</option>
                        <option className='option' id='filterOp19' value='filterVal19'>Casual</option>
                        <option className='option' id='filterOp20' value='filterVal20'>Racing</option>
                        <option className='option' id='filterOp21' value='filterVal21'>Board Games</option>
                    </select>
                </div>
                {/* <Pagination onPrevious={onPrevious} onNext={onNext} page={page}/> */}
                {videogames && videogames.map(game => {return(<VideogameCard key={game.id} id={game.id} img={game.background_image} name={game.name} rating_top={game.rating_top} genres={game.genres.map(g => <p key={g.name}>{g.name}</p>)}/>)})}
                {/* <Pagination onPrevious={onPrevious} onNext={onNext} page={page}/> */}
            </div>
        </div>
    )
}