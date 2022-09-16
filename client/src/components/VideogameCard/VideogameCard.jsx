import React from "react";
import { Link } from "react-router-dom";
import './VideogameCard.css'

export default function VideogameCard(props){
    return(
            
                <div className="Card">
                    <Link to={`/videogames/${props.id}`}>
                        <img src={props.img} alt={props.name}/>
                    </Link>
                    <h2 className="Name">{props.name}</h2>
                    <h4 className="Genres">{props.genres}</h4>
                </div>
            
    )
}