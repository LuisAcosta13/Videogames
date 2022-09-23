import React from "react";
import { Link } from "react-router-dom";
import './VideogameCard.css'

export default function VideogameCard(props){
    
    return(    
        <div className="Card">
            <Link to={`/videogames/${props.id}`}>
                <img className="Img" src={props.img} alt={props.name}/>
            </Link>
            <h2 className="Name">{props.name}</h2>
            <b className="RatingTop">{props.rating_top} ★</b>
            <h4 className="Genres">{props.genres}</h4>
        </div>      
    )
}