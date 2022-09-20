import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar(){
    return(
        <div>
            <div className="NavBar">
                <img className='Logo' src='https://www.pngplay.com/wp-content/uploads/12/Fornite-Black-Knight-PNG-Images-HD.png' alt='Knight'/>
                <Link className='LinkHome' to='/videogames'><h2>LuishiGames</h2></Link>
                <Link className='LinkOne'to='/'><span>Create your game</span></Link>
            </div>
        </div>
    )
}