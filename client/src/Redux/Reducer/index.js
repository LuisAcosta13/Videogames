const inicialState = {
    videogames: [],
    videogamesList: [],
    videogameDetail: {},
    newGame:{}
}

export default function rootReducer(state = inicialState, action){
    switch(action.type){
        case 'GET_ALL':
            return{
                ...state,
                videogames: action.payload
            }
        case 'GET_LIST':
            return{
                ...state,
                videogamesList: action.payload
            }
        case 'GET_DETAIL':
            return{
                ...state,
                videogameDetail: action.payload
            }
        case 'FILTER_BY_GENRE':
            return {
                ...state,
                videogames: action.payload
            }
        case 'FILTER_BY_DATABASE':
            return {
                ...state,
                videogames: action.payload.filter(g => g.id.length > 10)
            }
        case 'ADD_NEWGAME':
            return {
                ...state,
                newGame: action.payload
            }
        default:
            return state
    }
}