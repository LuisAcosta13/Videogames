const inicialState = {
    videogames: [],
    videogamesList: [],
    videogameDetail: {},
    genresList: [],
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
        case 'ORDER_BY_RATING':
            return{
                videogames: action.payload.sort(((a, b) => b.rating - a.rating))
            }
        case 'ORDER_ASC':
            return{
                videogames: action.payload.sort(function compare_name( a, b )
                {
                    if ( a.name < b.name){
                        return -1;
                    }
                    if ( a.name > b.name){
                        return 1;
                    }
                    return 0;
                })
            }
        case 'ORDER_DESC':
            return{
                videogames: action.payload.sort(function compare_name( a, b )
                {
                    if ( b.name < a.name){
                        return -1;
                    }
                    if ( b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            }
        case 'FILTER_BY_GENRE':
            return {
                videogames: action.payload
            }
        case 'FILTER_BY_DATABASE':
        return {
            videogames: action.payload.filter(g => g.id.length > 10)
        }
        case 'GET_GENRES':
            return {
                ...state,
                genresList: action.payload
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