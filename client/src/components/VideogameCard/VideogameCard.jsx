import React from "react";
import './VideogameCard.css'

export default function VideogameCard(props){
    return(

        <div className="Container">
            <div className="Card">
            <img src={props.img} alt={props.name}/>
            <h2 className="Name">{props.name}</h2>
            <h4 className="Genres">{props.genres}</h4>
            </div>
        </div>

    )
}