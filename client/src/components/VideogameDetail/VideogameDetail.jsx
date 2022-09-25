import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../../Redux/Actions";
import './VideogameDetail.css'

export default function VideogameDetail(){
    const { id } = useParams()
    const detail = useSelector(state => state.videogameDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(id)
        dispatch(getDetail(id))
        
    }, [dispatch, id])        

    return(
        detail  ?   <div>
                        <div className="DetailPage">
                            <div>
                                <Link to='/videogames'><button>Back</button></Link>
                            </div>
                            <div className="DetailCard">
                                <h1 className="NameDetail">{detail.name}</h1><br/>
                                <img className='ImageDetail' src={detail.background_image_additional} alt={detail.name}/> <br/>
                                <h5 className="Date">Launching date: {detail.released}</h5>
                                <h4 className="Rating">{detail.rating} ★</h4>
                                
                                <div>
                                {detail.genres && detail.genres.map(g => <p key={g.name} className="Categories">{g.name}</p>)}
                                </div>
                                
                                <h5 className="Description">{detail.description_raw}</h5><br/>
                                <div>
                                    <h4 className="Platforms">Available on: {detail.platforms && detail.platforms.map(p => <p key={p.platform.name}>{p.platform.name}</p>)}</h4>
                                </div>
                            </div>

                            <div>
                                <Link to='/videogames'><button>Back</button></Link>
                            </div>
                        </div>
                    </div> : <div>Loading...</div>
    )
}