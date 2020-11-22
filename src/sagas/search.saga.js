import { SearchAction } from '../actions'
import { SearchConstants } from '../constants'
import { put, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'

function * fetchSelectedDATA(action){
    try{
        const res = yield axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/top_record/${action.payload.id}`)
        yield put(SearchAction.setSelectedDATA(res.data))
    }catch(error){
        yield put(SearchAction.setError(error))
    }
}

function * fetchResultArray(action){
    try{
        const res = yield axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/api/${action.payload}`)
        yield put(SearchAction.setResultArray(res.data))
    }catch(error){
        yield put(SearchAction.setError(error))
    }
}

export function * searchSaga(){
    yield all([
        takeLatest(SearchConstants.FETCH_DATA, fetchResultArray),
        takeLatest(SearchConstants.SELECTED, fetchSelectedDATA)
    ])
}