import React, {useState} from "react";
import { getVideogame } from "../../Redux/Actions";

export default function SearchBar(){
    
    const [game, setGame] = useState('')
    
    function handleInputChange(e){
        setGame(e.target.value)
    }

    function handleSubmit(e){
        //getVideogame(game)
        setGame('')
    }

    return(
        <div>
        <input 
            id='input' 
            type='text' 
            placeholder='Your game...'
            value={game}
            onChange={(e) => handleInputChange(e)}
        />
        <button onClick={() => handleSubmit()}>
            Search
        </button>
        </div>
        
    )
}