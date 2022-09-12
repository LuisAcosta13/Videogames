import React from "react";

export default function VideogameCard(props){
    return(
        <div>
            <img src={props.img} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.genres}</p>
        </div>
    )
}