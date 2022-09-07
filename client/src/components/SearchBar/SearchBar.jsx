import React, {useState} from "react";

export default function SearchBar(){

    
    return(
        <div>
        <input id='input' 
        type='text' 
        placeholder='Your game...' 
        />
        <button>Search</button>
        </div>
    )
}