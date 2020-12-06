import { SearchAction } from '../actions'
import { SearchConstants } from '../constants'
import { put, takeLatest, all, call } from 'redux-saga/effects'
import axios from 'axios'

function * fetchSelectedDATA(action){
    try{
        const res = yield call([axios, 'get'], `http://ec2-13-209-80-204.ap-northeast-2.compute.amazonaws.com:3000/top_record/${action.payload.id}`)
        yield put(SearchAction.setSelectedDATA(res.data))
    }catch(error){
        yield put(SearchAction.setError(error))
    }
}

function * fetchResultArray(action){
    try{
        const res = yield call([axios, 'get'], `http://ec2-13-209-80-204.ap-northeast-2.compute.amazonaws.com:3000/api/${action.payload}`)
        yield put(SearchAction.setResultArray(res.data))
    }catch(error){
        yield put(SearchAction.setError(error))
    }
}

function * fetchComment(action){
    try{
        const res = yield call([axios, 'get'], `http://ec2-13-209-80-204.ap-northeast-2.compute.amazonaws.com:3000/top_record/${action.payload}/comment`)
        yield put(SearchAction.setComment(res.data))
    }catch(error){
        yield put(SearchAction.setError(error))
    }
}

export function * searchSaga(){
    yield all([
        takeLatest(SearchConstants.SET_COMMENTPARAM, fetchComment),
        takeLatest(SearchConstants.FETCH_DATA, fetchResultArray),
        takeLatest(SearchConstants.SELECTED, fetchSelectedDATA)
    ])
}