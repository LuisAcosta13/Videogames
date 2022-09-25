import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Validate from "./Validate";
import './Form.css'
import { getGenres, newGame } from "../../Redux/Actions";

export default function Form(){
    const dispatch = useDispatch()
    const history = useHistory()
    const genresList = useSelector(state => state.genresList)
    const [errors, setErrors] = useState({})
    const [newVideogame, setNewVideogame] = useState({
        name: '',
        description_raw: '',
        released: '',
        rating: '',
        platforms: [],
        genre: []
    })

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

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
                setNewVideogame({
                ...newVideogame,
                platforms: [...newVideogame.platforms, e.target.value]
            })
        } else {
            alert ('To many platforms!')
        }
        
    }
    
    function handleGenresSelect(e){
        if(newVideogame.genre.length < 4){
                setNewVideogame({
                ...newVideogame,
                genre: [...newVideogame.genre, e.target.value]
            })
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
                        {genresList.map(g => <option key={g.id} value={g.name}>{g.name}</option>)}
                    </select><br/>
                    {newVideogame.genre.map(g => <b key={g}>{g}<br/></b> )}
                </div>

                <button className="submit" onClick={handleSubmit}>Enviar</button>
            </div>
        </div>
    )
}