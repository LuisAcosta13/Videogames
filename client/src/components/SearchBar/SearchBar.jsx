import React from "react"
import { useSelector} from "react-redux"
import { Link } from "react-router-dom"
import Loading from "../Loading/Loading"
import VideogameCard from "../VideogameCard/VideogameCard"
import './SearchBar.css'

export default function SearchBar(){
    const videogameList = useSelector(state => state.videogamesList)

    return(
        videogameList[0] ? <div>
            <div>
                <Link to='/videogames'><button>Back</button></Link>
            </div>
            <div>
                {videogameList[0].id && videogameList.map(gameListed => {
                    return(<VideogameCard 
                        key={gameListed.id} 
                        id={gameListed.id} 
                        img={gameListed.background_image} 
                        name={gameListed.name} 
                        rating_top={gameListed.rating_top} 
                        genres={gameListed.genres.map(gen => <p key={gen.name}>{gen.name}</p>)}/>)
                    })
                }
            </div>
        </div> : <Loading/>
    )
}