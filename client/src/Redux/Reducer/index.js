const inicialState = {
    videogames: [],
    videogameDetail: {}
}

export default function rootReducer(state = inicialState, action){
    console.log('antes: ' + state.videogames)
    switch(action.type){
        case 'GET_ALL':
            return{
                ...state,
                videogames: action.payload
            }
        case 'GET_LIST':
            return{
                ...state,
                videogames: action.payload
            }
        default:
            return state
    }
}