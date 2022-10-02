const axios = require('axios')

export function getAllVideogames(){
    return async function (dispatch){
        return await axios.get(`http://localhost:3001/videogames`)
        .then(json => { 
            dispatch({
                type: 'GET_ALL',
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}

export function getVideogame(game){
    return async function(dispatch){
        return await axios.get(`http://localhost:3001/videogames?name=${game}`)
        .then(json => {
            dispatch({
                type: 'GET_LIST',
                payload: json.data
            })    
        })
        .catch(err => console.log(err))
    }
}

export function getDetail(id){
    return async function(dispatch){
        return await axios.get(`http://localhost:3001/videogames/${id}`)
        .then(json => {
            dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}

export function filterByGenre(genre){
    return async function (dispatch){
        return await axios.get(`http://localhost:3001/videogames`)
        .then(json => {
            dispatch({ 
                type: 'FILTER_BY_GENRE',
                payload: json.data.filter(g => typeof g.id === 'number' ? g.genres.some(e => e.name === genre) : g.genre.includes(genre))
            })
        })
        .catch(err => console.log(err))
    }
}

export function filterByDatabase(){
    return async function (dispatch){
        return await axios.get(`http://localhost:3001/videogames`)
        .then(json => { 
            dispatch({ 
                type: 'FILTER_BY_DATABASE',
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}

export function newGame(newVideogame){
    return async function (dispatch){
        return await axios.post('http://localhost:3001/videogames', newVideogame)
        .catch(err => console.log(err))
    }
}

export function deleteGame(id){
    return async function (dispatch){
        return await axios.delete(`http://localhost:3001/videogames/${id}`)
        .then(res => {
            dispatch({
                type: 'DELETE_GAME',
                payload: id
            })
        })
        .catch(err => console.log(err))
    }
}