import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, deleteGame, removeDetail } from "../../Redux/Actions";
import Loading from "../Loading/Loading";
import './VideogameDetail.css'

export default function VideogameDetail(){
    const { id } = useParams()
    const detail = useSelector(state => state.videogameDetail)
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
        dispatch(getDetail(id))
        return () => {
            dispatch(removeDetail({}))
        }
    }, [dispatch, id])

    function deleteVideogame(){
        dispatch(deleteGame(id))
        let option = window.confirm('Are you sure you want to quit?')
        if(option === true){
            alert('This quest is finished')
            history.push("/videogames")
        }
    }

    return( detail.id ? 
        typeof detail.id !== 'string'  ?   
                    <div>
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
                        </div>
                    </div> 
                    : 
                    <div>
                        <div className="DetailPage">
                            <div>
                                <Link to='/videogames'><button>Back</button></Link>
                            </div>
                            <div className="DetailCard">
                                <h1 className="NameDetail">{detail.name}</h1><br/>
                                {/* <img className='ImageDetail' src={detail.background_image_additional} alt={detail.name}/> <br/> */}
                                <h5 className="Date">Launching date: {detail.released}</h5>
                                <h4 className="Rating">{detail.rating} ★</h4>
                                <div>
                                {detail.genre && detail.genre.map(g => <p key={g} className="Categories">{g}</p>)}
                                </div>       
                                <h5 className="Description">{detail.description_raw}</h5><br/>
                                <div>
                                    <h4 className="Platforms">Available on: {detail.platforms && detail.platforms.map(p => <p key={p}>{p}</p>)}</h4>
                                </div>
                            </div>
                            <div>
                                <button className="deleteButton" onClick={() => deleteVideogame()}>Delete</button>
                            </div>
                        </div>
                    </div> : <Loading/>
    )
}