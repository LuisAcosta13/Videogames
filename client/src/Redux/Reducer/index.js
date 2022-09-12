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
            // case 'GET_DETAIL':
            // return{
            //     ...state,
            //     videogameDetail: action.payload
            // }
        default:
            return state
    }
}