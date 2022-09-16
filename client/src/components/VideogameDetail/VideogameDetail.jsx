import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../Redux/Actions";
import './VideogameDetail.css'
import NavBar from "../NavBar/NavBar";

export default function VideogameDetail(){
    
    const { id } = useParams()
    const detail = useSelector(state => state.videogameDetail)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log(id)
        dispatch(getDetail(id))

    }, [])        
    
    const image = detail.background_image_additional
    const Name = JSON.stringify(detail.name)
    const description = JSON.stringify(detail.description)

    return(
        detail  ?   <div>
                    <NavBar/>
                        <div className="DetailPage">
                            <div className="DetailCard">
                                <img className='ImageDetail' src={image} alt={Name}/> <br/>
                                <h1 className="NameDetail">{Name}</h1><br/>
                                <h4 className="Description">{description}</h4><br/>
                            </div>
                        </div>
                    </div> : <div>Loading...</div>
    )
}