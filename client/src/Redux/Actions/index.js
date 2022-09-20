const axios = require('axios')

export function getAllVideogames(page){
    return function (dispatch){
        return axios.get(`http://localhost:3001/videogames?page=${page}`)
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

export function orderByRating(page){
    return function (dispatch){
        return axios.get(`http://localhost:3001/videogames?page=${page}`)
        .then(json => { console.log('Ordenando por rating')
            dispatch({
                type: 'ORDER_BY_RATING',
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}

export function orderByAsc(page){
    return function (dispatch){
        return axios.get(`http://localhost:3001/videogames?page=${page}`)
        .then(json => {
            dispatch({
                type: 'ORDER_ASC',
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}

export function orderByDesc(page){
    return function (dispatch){
        return axios.get(`http://localhost:3001/videogames?page=${page}`)
        .then(json => {
            dispatch({
                type: 'ORDER_DESC',
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}