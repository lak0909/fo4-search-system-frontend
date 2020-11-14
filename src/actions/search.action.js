import { SearchConstants } from '../constants'

export const SearchAction = {
    change
}

function change(value){
    return{
        type: SearchConstants.SEARCHVALUE,
        payload: value
    }
}