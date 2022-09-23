import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Validate from "./Validate";
import './Form.css'

export default function Form(){
    const [errors, setErrors] = useState({})
    const [newVideogame, setNewVideogame] = useState({
        name: '',
        description: '',
        launch_date: '',
        rating: '',
        platforms: [],
        genres: []
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

    const handleInputChangeToArray = function(e){
        setNewVideogame({
            ...newVideogame,
            [e.target.name]: [e.target.value]
        })
        setErrors(Validate({
            ...newVideogame,
            [e.target.name]: [e.target.value]
        }))
    }
    
    return(
        <div className="FormPage">
            <Link to='/videogames'><button>Claudicate</button></Link>
            <h1>Start your own adventure</h1>
            <form className="Form">
                <div className="grid">
                    <h4>Name</h4>
                    <input className={errors.name && 'danger'}
                    name='name' value={newVideogame.name} placeholder='Name your quest' autoComplete='off' onChange={handleInputChange}/>
                    <b className='danger'>{errors.name}</b>
                </div>
                <div className="grid">
                    <h4>Description</h4>
                    <input className={errors.description && 'danger'}
                    name='description' value={newVideogame.description} placeholder='Tell your story' autoComplete='off' onChange={handleInputChange}/>
                    <b className='danger'>{errors.description}</b>
                </div>
                <div className="grid">
                    <h4>Launch Date</h4>
                    <input className={errors.launch_date && 'danger'}
                    name='launch_date' value={newVideogame.launch_date} placeholder='dd / mm / yyyy' autoComplete='off' onChange={handleInputChange}/>
                    <b className='danger'>{errors.launch_date}</b>
                </div>
                <div className="grid">
                    <h4>Stars</h4>
                    <input className={errors.rating && 'danger'}
                    name='rating' value={newVideogame.rating} placeholder='1 - 5' autoComplete='off' onChange={handleInputChange}/>
                    <b className='danger'>{errors.rating}</b>
                </div>
                <div className="grid">
                    <h4>Platforms</h4>
                    <input name='platforms' value={newVideogame.platforms} placeholder='Available on...' autoComplete='off' onChange={handleInputChangeToArray}/>
                </div>
                <div className="grid">
                    <h4>Genres</h4>
                    <input name='genres' value={newVideogame.genres} placeholder='Genre' autoComplete='off' onChange={handleInputChangeToArray}/>
                </div>

                <input className="submit" type='submit'/>

            </form>
        </div>
    )
}