import { SearchConstants } from '../constants'

export const SearchAction = {
    changeInput,
    setResultArray,
    setLoading,
    fetchData,
    setError,
    setSelected,
    setSelectedDATA,
    initialize,
    setComment,
    setCommentParam,
}

function fetchData(value){
    return{
        type: SearchConstants.FETCH_DATA,
        payload: value
    }
}

function changeInput(value){
    return{
        type: SearchConstants.SEARCHVALUE,
        payload: value
    }
}

function setResultArray(value){
    return{
        type: SearchConstants.RESULTARRAY,
        payload: value
    }
}

function setLoading(value){
    return{
        type: SearchConstants.SETLOADING,
        payload: value
    }
}

function setError(value){
    return{
        type: SearchConstants.SETERROR,
        payload: value
    }
}

function setSelected(value){
    return{
        type: SearchConstants.SELECTED,
        payload: value
    }
}

function setSelectedDATA(value){
    return{
        type: SearchConstants.SELECTED_DATA,
        payload: value
    }
}

function setCommentParam(value){
    return{
        type: SearchConstants.SET_COMMENTPARAM,
        payload: value
    }
}

function setComment(value){
    return{
        type: SearchConstants.SET_COMMENT,
        payload: value
    }
}

function initialize(){
    return{
        type: 'INITIAL'
    }
}