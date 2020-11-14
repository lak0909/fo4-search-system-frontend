import {SearchConstants} from '../constants'

const initialState = {
    search: ''
}

export const search = (state= initialState, action) => {
    switch(action.type){
        case SearchConstants.SEARCHVALUE:
            return{
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}