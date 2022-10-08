import React, { useState } from "react";
import './Loading.css'

export default function Loading(){
    const [loading, setLoading] = useState('Riding the horses...')
    
    setTimeout(() => {
        setLoading('Nothing to see here')
    }, 9000);
    
    return(
        <div className="LoadingPage">
            {loading}
        </div>
    )
}