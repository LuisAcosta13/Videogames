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