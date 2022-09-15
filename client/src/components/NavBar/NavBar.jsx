import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import './NavBar.css'

export default function NavBar(){
    return(
        <div>
            <div className="NavBar">
                <Link className='LinkHome' to='/videogames'><h2>Videogames</h2></Link>
                <Link className='LinkOne'to='/'><span>Create your game</span></Link>
                <span>About me</span>
            </div>
        </div>
    )
}