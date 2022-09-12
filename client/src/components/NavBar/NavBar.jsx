import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(){
    return(
        <div>
            <div>
                <Link to='/videogames'><h2>Videogames</h2></Link>
                <Link to='/'><p>Create your game</p></Link>
                <p>About me</p>
                {<SearchBar/>}
            </div>
        </div>
    )
}