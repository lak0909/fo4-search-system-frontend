import {SearchConstants} from '../constants'

const initialState = {
    search: '',
    resultArray: [],
    selected: {
        id: '',
        name: '',
    },
    commentParam: '',
    comment: [],
    selectedData: [],
    loading: false,
    error: ''
}

export const search = (state= initialState, action) => {
    switch(action.type){
        case SearchConstants.SEARCHVALUE:
            return{
                ...state,
                search: action.payload
            }
        case SearchConstants.RESULTARRAY:
            return{
                ...state,
                resultArray: [...action.payload],
                selectedData: []
            }
        case SearchConstants.SETLOADING:
            return{
                ...state,
                loading: action.payload
            }
        case SearchConstants.SETERROR:
            return{
                ...state,
                error: action.payload
            }
        case SearchConstants.SELECTED:
            return{
                ...state,
                selected: {
                    id: action.payload.id,
                    name: action.payload.name
                }
            }
        case SearchConstants.SELECTED_DATA:
            return{
                ...state,
                selectedData: [...action.payload]
            }
        case SearchConstants.SET_COMMENTPARAM:
            return{
                ...state,
                commentParam: action.payload
            }
        case SearchConstants.SET_COMMENT:
            return{
                ...state,
                comment: [...action.payload]
            }
        default:
            return initialState
    }
}