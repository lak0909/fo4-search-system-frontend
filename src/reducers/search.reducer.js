import {SearchConstants} from '../constants'

const initialState = {
    search: '',
    resultArray: [],
    selected: '',
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
                resultArray: [...action.payload]
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
                selected: action.payload
            }
        case SearchConstants.SELECTED_DATA:
            return{
                ...state,
                selectedData: [...action.payload]
            }
        default:
            return state
    }
}