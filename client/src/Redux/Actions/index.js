const axios = require('axios')

export function getAllVideogames(){
    console.log('Llama a la api')
    return function (dispatch){
        return axios('http://localhost:3001/videogames')
        .then(json => { 
            console.log(json.data)
            dispatch({
                type: 'GET_ALL',
                payload: json.data
            })
            console.log('Dispachado')
        })
        .catch(err => console.log(err))
    }
}

export function getVideogame(id){
    return function(dispatch){
        return axios.get('http://localhost:3001/videogames/' + id)
        .then(json => {
            dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        })
        .catch(err => console.log(err))
    }
}