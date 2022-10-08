import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar(){
    let playingMusic = true
    
    function controlMusic(){
        if(playingMusic === true){
            document.getElementById('music').pause()
            playingMusic = false
        } else {
            document.getElementById('music').play()
            playingMusic = true
        }
    }
    
    return(
        <div>
            <div className="NavBar">
                <div>
                    <p className="Music" onClick={controlMusic}>♬</p>
                    <img  className='Logo' src='https://www.pngplay.com/wp-content/uploads/12/Fornite-Black-Knight-PNG-Images-HD.png' alt='Knight'/>
                </div>
                <div>    
                    <h2 className='LinkHome'>LuishiGames</h2>
                </div>
                <Link className='LinkOne'to='/form'><span>Create your game</span></Link>
            </div>
        </div>
    )
}