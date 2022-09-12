// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getVideogame } from "../Redux/Actions";
// import VideogameCard from "../VideogameCard/VideogameCard";

// export default function VideogameDetail(props){
    
//     const videogame = useSelector(state => state.VideogameDetail)
    
//     const dispatch = useDispatch()

//     React.useEffect(() => {
//         dispatch(getVideogame(props.id))
//     }, [props.id])

//     return(
//         <div>
//             {videogame && videogame?.map(game => (
//                 <div>
//                          {game.background_imagen}
//                          {game.name}
//                          {game.genres}
//                          {game.description}
//                          {game.ratings.map(g => `${g.titles}: ${g.percent}%`)}
//                          {game.parent_platforms.map(g => <p>{g.name}</p>)}
//                 </div>))
//             }
//         </div>
//     )
// }