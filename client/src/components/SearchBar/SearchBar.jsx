import React, {useState} from "react";
import { connect } from "react-redux";
import { getVideogame } from "../../Redux/Actions";

function SearchBar(){

    const [game, setGame] = useState('')
    
    function handleInputChange(e){
        setGame(e.target.value)
    }

    function handleSubmit(e){
        getVideogame(game)
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

// const mapStateToProps = (state) => {
//     return {
//         videogame: state.videogameDetail
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        getVideogame: (id) => dispatch(getVideogame(id))
    }
}

export default connect(mapDispatchToProps)(SearchBar)