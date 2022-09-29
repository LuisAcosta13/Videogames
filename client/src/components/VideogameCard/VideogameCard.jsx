import React from "react";
import { Link } from "react-router-dom";
import './VideogameCard.css'

export default function VideogameCard(props){
    
    return(    
        <div className="Card">
            <Link to={`/videogames/${props.id}`}>
                {typeof props.id === 'number' ? 
                    <img className="Img" src={props.img} alt={props.name}/> : 
                    <img className="Img" src='https://i.pinimg.com/564x/39/d5/02/39d5029fb7033b0c4611169d5837ee15.jpg' alt='Generic'/>
                }
            </Link>
            <h2 className="Name">{props.name}</h2>
            <b className="RatingTop">{props.rating_top} ★</b>
            <h4 className="Genres">{props.genres}</h4>
        </div>      
    )
}