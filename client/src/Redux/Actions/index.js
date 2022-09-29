const axios = require('axios')

export function getAllVideogames(){
    return function (dispatch){
        return axios.get(`http://localhost:3001/videogames`)
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
    return function(dispatch){
        return axios.get(`http://localhost:3001/videogames?name=${game}`)
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
    console.log('accede a getDetail')
    return function(dispatch){
        return axios.get(`http://localhost:3001/videogames/${id}`)
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
    return function (dispatch){
        return axios.get(`http://localhost:3001/videogames`)
        .then(json => { console.log()
            dispatch({ 
                type: 'FILTER_BY_GENRE',
                payload: json.data.filter(g => typeof g.id === 'number' ? g.genres.some(e => e.name === genre) : g.genre.includes(genre))
            })
        })
        .catch(err => console.log(err))
    }
}

export function filterByDatabase(){
    return function (dispatch){
        return axios.get(`http://localhost:3001/videogames`)
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
    return function (dispatch){
        return axios.post('http://localhost:3001/videogames', newVideogame)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: 'ADD_NEWGAME',
                action: res.data
            })
        })
        .catch(err => console.log(err))
    }
}