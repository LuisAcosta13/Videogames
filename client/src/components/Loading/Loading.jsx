import React, { useState } from "react";
import './Loading.css'

export default function Loading(){
    const [loading, setLoading] = useState('Riding the horses...')
    
    setTimeout(() => {
        setLoading('Nothing to see here')
    }, 7000);
    
    return(
        <div className="LoadingPage">
            {loading}
        </div>
    )
}