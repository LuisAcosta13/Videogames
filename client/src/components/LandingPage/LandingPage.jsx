import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage(){
    
    return(
        <div className="LandingPage">
            <Link className="Enter" to={'/videogames'}><h1>GO!</h1></Link>
        </div>
    )
}