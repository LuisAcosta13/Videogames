import React from "react";
import './Pagination.css'

export default function Pagination({onPrevious, onNext, pageNum, videogames}){
    
    function handlePrevious(){
        onPrevious()
        window.scrollTo(0, 0)
    }

    function handleNext(){
        onNext()
        window.scrollTo(0, 0)
    }

    return(
        <nav>
            {(pageNum > 1) ? <button className="Prev" onClick={handlePrevious}>◀</button> : null}
            <p className="PageNum">{pageNum}</p>
            {(pageNum < (videogames / 15)) ? <button className="Next" onClick={handleNext}>▶</button> : null}
        </nav>
    )
}