import React from "react";
import './Pagination.css'

export default function({onPrevious, onNext, page}){
    
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
            {<button className="Prev" onClick={handlePrevious}>◀</button>}
            <p className="PageNum">{page}</p>
            {<button className="Next" onClick={handleNext}>▶</button>}
        </nav>
    )
}