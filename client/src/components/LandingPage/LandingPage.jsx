import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div>
            <Link to={'/videogames'}><h1>GO!</h1></Link>
        </div>
    )
}