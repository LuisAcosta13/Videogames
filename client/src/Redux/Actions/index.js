const axios = require('axios')

export function getAllVideogames(){
    return function (dispatch){
        return axios.get(`/videogames`)
        .then(json => { 
            dispatch({
                type: 'GET_ALL',
                payload: json.data
            })
        })
        .catch(err => {
            console.log('API is not responding correctly')
            console.log(err)
        })
    }
}

export function getVideogame(game){
    return function(dispatch){
        return axios.get(`/videogames?name=${game}`)
        .then(json => {
            dispatch({
                type: 'GET_LIST',
                payload: json.data
            })    
        })
        .catch(err => {
            console.log('The searched game does not exist, please recharge')
            console.log(err)
        })
    }
}

export function getDetail(id){
    return function(dispatch){
        return axios.get(`/videogames/${id}`)
        .then(json => {
            dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        })
        .catch(err => {
            console.log('API is not responding correctly')
            console.log(err)
        })
    }
}

export function removeDetail(payload){
    return {
        type: 'REMOVE_DETAIL',
        payload: payload
    }
}

export function filterByGenre(genre){
    return function (dispatch){
        return axios.get(`/videogames`)
        .then(json => {
            dispatch({ 
                type: 'FILTER_BY_GENRE',
                payload: json.data.filter(g => typeof g.id === 'number' ? g.genres.some(e => e.name === genre) : g.genre.includes(genre))
            })
        })
        .catch(err => {
            console.log('API is not responding correctly')
            console.log(err)
        })
    }
}

export function filterByDatabase(){
    return function (dispatch){
        return axios.get(`videogames`)
        .then(json => { 
            dispatch({ 
                type: 'FILTER_BY_DATABASE',
                payload: json.data
            })
        })
        .catch(err => {
            console.log('API is not responding correctly')
            console.log(err)
        })
    }
}

export function newGame(newVideogame){
    return function (){
        return axios.post('videogames', newVideogame)
        .catch(err => {
            console.log('Creation process went wrong')
            console.log(err)
        })
    }
}

export function deleteGame(id){
    return function (dispatch){
        return axios.delete(`videogames/${id}`)
        .then(res => {
            dispatch({
                type: 'DELETE_GAME',
                payload: id
            })
        })
        .catch(err => {
            console.log('Delete process went wrong')
            console.log(err)
        })
    }
}