import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Validate from "./Validate";
import './Form.css'
import { newGame } from "../../Redux/Actions";

export default function Form(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState({})
    const [newVideogame, setNewVideogame] = useState({
        name: '',
        description_raw: '',
        released: '',
        rating: '',
        platforms: [],
        genre: []
    })

    const handleInputChange = function(e){
        setNewVideogame({
            ...newVideogame,
            [e.target.name]: e.target.value
        })
        setErrors(Validate({
            ...newVideogame,
            [e.target.name]: e.target.value
        }))
    }

    function handlePlatformsSelect(e){
        if(newVideogame.platforms.length < 4){
            if(!newVideogame.platforms.includes(e.target.value)){
                setNewVideogame({
                    ...newVideogame,
                    platforms: [...newVideogame.platforms, e.target.value]
                })
            } else {
                alert ('This platform was already selected!')
            }
        } else {
            alert ('To many platforms!')
        }
    }
    
    function handleGenresSelect(e){
        if(newVideogame.genre.length < 4){
            if(!newVideogame.genre.includes(e.target.value)){
                setNewVideogame({
                    ...newVideogame,
                    genre: [...newVideogame.genre, e.target.value]
                })
            } else {
                alert ('This genre was already selected!')
            }
        } else {
            alert ('To many genders!')
        }
    }
    
    function handleSubmit(){
        dispatch(newGame(newVideogame))
        alert('Your quest has been created... A new hero is born')
        history.push("/videogames")
    }

    return(
        <div className="FormPage">
            <Link to='/videogames'><button>Claudicate</button></Link>
            <h1>Start your own adventure</h1>
            <div className="Form">
                <div className="grid">
                    <h4>Name</h4>
                    <input className={errors.name && 'danger'}
                    name='name' value={newVideogame.name} placeholder='Name your quest' autoComplete='off' onChange={handleInputChange}/>
                    <b className='danger'>{errors.name}</b>
                </div>
                <div className="grid">
                    <h4>Description</h4>
                    <input className={errors.description_raw && 'danger'}
                    name='description_raw' value={newVideogame.description_raw} placeholder='Tell your story' autoComplete='off' onChange={handleInputChange}/>
                    <b className='danger'>{errors.description_raw}</b>
                </div>
                <div className="grid">
                    <h4>Launch Date</h4>
                    <input className={errors.released && 'danger'}
                    name='released' value={newVideogame.released} placeholder='dd / mm / yyyy' autoComplete='off' onChange={handleInputChange}/>
                    <b className='danger'>{errors.released}</b>
                </div>
                <div className="grid">
                    <h4>Stars</h4>
                    <input className={errors.rating && 'danger'}
                    name='rating' value={newVideogame.rating} placeholder='1 - 5' autoComplete='off' onChange={handleInputChange}/>
                    <b className='danger'>{errors.rating}</b>
                </div>
                <div className="grid">
                    <h4>Platforms</h4>
                    <select className="SelectForm" name={newVideogame.platforms} onChange={(e) => handlePlatformsSelect(e)}>
                        <option selected={true} disabled="disabled">Choose</option>
                        <option value='PlayStation'>PlayStation</option>
                        <option value='Xbox'>Xbox</option>
                        <option value='Nintendo'>Nintendo</option>
                        <option value='PC'>PC</option>
                        <option value='Android'>Android</option>
                        <option value='iOS'>iOS</option>
                    </select><br/>
                    {newVideogame.platforms.map(p => <b key={p}>{p}<br/></b>)}
                </div>
                <div className="grid">
                    <h4>Genres</h4>
                    <select className="SelectForm" name={newVideogame.genre} onChange={(e) => handleGenresSelect(e)}>
                        <option selected={true} className='option' id='filterOp1' disabled="disabled">Choose</option>
                        <option className='option' id='filterOp2' value='Action'>Action</option>
                        <option className='option' id='filterOp3' value='Shooter'>Shooter</option>
                        <option className='option' id='filterOp4' value='Platformer'>Platformer</option>
                        <option className='option' id='filterOp5' value='Family'>Family</option>
                        <option className='option' id='filterOp6' value='Adventure'>Adventure</option>
                        <option className='option' id='filterOp7' value='Simulation'>Simulation</option>
                        <option className='option' id='filterOp8' value='Massively Multiplayer'>Massively Multiplayer</option>
                        <option className='option' id='filterOp9' value='Educational'>Educational</option>
                        <option className='option' id='filterOp10' value='Indie'>Indie</option>
                        <option className='option' id='filterOp11' value='Puzzle'>Puzzle</option>
                        <option className='option' id='filterOp12' value='Sports'>Sports</option>
                        <option className='option' id='filterOp13' value='Card'>Card</option>
                        <option className='option' id='filterOp14' value='RPG'>RPG</option>
                        <option className='option' id='filterOp15' value='Arcade'>Arcade</option>
                        <option className='option' id='filterOp16' value='Fighting'>Fighting</option>
                        <option className='option' id='filterOp17' value='Strategy'>Strategy</option>
                        <option className='option' id='filterOp18' value='Casual'>Casual</option>
                        <option className='option' id='filterOp19' value='Racing'>Racing</option>
                        <option className='option' id='filterOp20' value='Board Games'>Board Games</option>
                    </select><br/>
                    {newVideogame.genre.map(g => <b key={g}>{g}<br/></b> )}
                </div>

                {(newVideogame.name && 
                    newVideogame.description_raw && newVideogame.released && 
                    newVideogame.rating && newVideogame.platforms.length > 0 && 
                    newVideogame.genre.length > 0) ? 
                    <button className="submit" onClick={handleSubmit}>Enviar</button> 
                    : null}
            </div>
        </div>
    )
}