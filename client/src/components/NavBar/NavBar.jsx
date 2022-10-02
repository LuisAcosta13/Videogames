import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar(){
    return(
        <div>
            <div className="NavBar">
                <div>
                    <img className='Logo' src='https://www.pngplay.com/wp-content/uploads/12/Fornite-Black-Knight-PNG-Images-HD.png' alt='Knight'/>
                </div>
                <div>    
                    <h2 className='LinkHome'>LuishiGames</h2>
                </div>
                <Link className='LinkOne'to='/form'><span>Create your game</span></Link>
            </div>
        </div>
    )
}