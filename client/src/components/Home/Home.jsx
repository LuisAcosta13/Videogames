import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames, filterByGenre, filterByDatabase } from "../../Redux/Actions";
import Pagination from "../Pagination/Pagination.jsx";
import VideogameCard from "../VideogameCard/VideogameCard.jsx";
import './Home.css'
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";

export const Home = () => {
    
    const dispatch = useDispatch()
    const videogames = useSelector(state => state.videogames)
    const [currentPage, setCurrentPage] = useState(0)
    const [ pageNum, setPageNum ] = useState(1)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        dispatch(getAllVideogames())
    }, [dispatch])

    function filteredVideogames(){
            switch(filter){
                case 'A_Z':
                    const videogamesA_Z = videogames.sort(function compare_name( a, b ){
                        if ( a.name < b.name){
                            return -1;
                        }
                        if ( a.name > b.name){
                            return 1;
                        }
                        return 0;
                    })
                    return videogamesA_Z.slice(currentPage, currentPage + 15)
                
                case 'Z_A':
                    const videogamesZ_A = videogames.sort(function compare_name( a, b ){
                        if ( b.name < a.name){
                            return -1;
                        }
                        if ( b.name > a.name){
                            return 1;
                        }
                        return 0;
                    })
                    return videogamesZ_A.slice(currentPage, currentPage + 15)
                
                case 'Rating':
                    const videogamesByRating = videogames.sort(((a, b) => b.rating - a.rating))
                    return videogamesByRating.slice(currentPage, currentPage + 15)
            default: 
                return videogames.slice(currentPage, currentPage + 15)
        }
    }
        
    function byOrder(){
        if(document.getElementById('select').selectedIndex === 1){
            setFilter('A_Z')
        }
        if(document.getElementById('select').selectedIndex === 2){
            setFilter('Z_A')
        }
        if(document.getElementById('select').selectedIndex === 3){
            setFilter('Rating')
        }
    }

    function byFilter(){
        var e = document.getElementById('filter')
        if(e.selectedIndex === 0){
            if(e.options[0].disabled === false){
                setCurrentPage(0)
                setPageNum(1)
                dispatch(getAllVideogames())
                e.options[0].disabled = true
            }
        } else if(e.selectedIndex === 1){
            setCurrentPage(0)
            dispatch(filterByDatabase())
            e.options[0].disabled = false
        } else {
            setCurrentPage(0)
            setPageNum(1)
            dispatch(filterByGenre(e.options[e.selectedIndex].text))
            e.options[0].disabled = false
        }
    }

    function onPrevious(){
        if(pageNum > 1){
            setPageNum(pageNum - 1)
            setCurrentPage(currentPage - 15)
        }
    }

    function onNext(){
        if(pageNum < 7){
            setPageNum(pageNum + 1)
            setCurrentPage(currentPage + 15)
        }
    }

    return(
        <div className="Body">
            <SearchBar/>
            <div id='Principal' className="Gallery">
                <div id='Filters' className="Filters">
                    Order by: 
                    <select name='select' id='select' defaultValue='Default' onClick={byOrder}>
                        <option disabled="disabled">Default</option>
                        <option className='option' id='option2' value='value2'>A - Z</option>
                        <option className='option' id='option3' value='value3'>Z - A</option>
                        <option className='option' id='option4' value='value4'>Rating</option>
                    </select>
                    Filter by:
                    <select name='filter' id='filter' defaultValue='All' onClick={byFilter}>
                        <option  className='option' disabled={true}>All</option>
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
                <div>
                    {(videogames.length >= 15) ? <Pagination onPrevious={onPrevious} onNext={onNext} pageNum={pageNum} videogames={videogames.length}/>: null}
                    {(filteredVideogames().length > 0) ? filteredVideogames().map(game => {
                        return(<VideogameCard 
                            key={game.id} 
                            id={game.id} 
                            img={typeof game.id === 'number' ? game.background_image : null} 
                            name={game.name} 
                            rating_top={typeof game.id === 'number' ? game.rating_top : game.rating} 
                            genres={typeof game.id === 'number' ? game.genres.map(g => <p key={g.name}>{g.name}</p>) : game.genre.map(g => <p key={g}>{g}</p>)}/>)})
                        : <Loading/>
                    }
                    {(videogames.length >= 15) ? <Pagination onPrevious={onPrevious} onNext={onNext} pageNum={pageNum} videogames={videogames.length}/>: null}
                </div>
            </div>
        </div>
    )
}