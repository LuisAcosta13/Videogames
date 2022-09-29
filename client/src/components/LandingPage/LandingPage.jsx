import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage(){
    document.addEventListener('click', musicPlay);
    function musicPlay() {
        document.getElementById('music').play();
        document.removeEventListener('click', musicPlay);
    }
    return(
        <div className="LandingPage">
            <div className="Block">
            Click anywhere for a medieval experience
                <div className="Text">
                    <h1>Greetings traveler!<br/></h1>
                    Hail and Welcome to the beginning of a new adventure.<br/>
                    We are privileged to have in our presence royalty and
                    nobility from lands far and wide. <br/>
                    Traveling during the Middle Ages could be very dangerous.<br/>
                    Most people live their entire life in the same village, with no
                    Real reason to ever leave. <br/>
                    But you, my friend, have a greater destiny!<br/>
                    I wish you luck. 
                </div>
                <Link className="Enter" to={'/videogames'}><h1>Start quest</h1></Link>
            </div>      
        </div>
    )
}