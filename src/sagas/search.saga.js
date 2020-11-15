// import { SearchAction } from '../actions'
// import { SearchConstants } from '../constants'
// import { put, takeLatest } from 'redux-saga/effects'
// import axios from 'axios'

// function * fetchResultArray(action){
//     try{
//         const res = yield axios.get(`http://ec2-54-180-32-236.ap-northeast-2.compute.amazonaws.com:3000/api/${action.payload}`)
//         yield put(SearchAction.setResultArray(res.data))
//     }catch(error){
//         yield put(SearchAction.setError(error))
//     }
// }

// export default function * watchAsync(){
//     yield takeLatest(SearchConstants.FETCH_DATA, fetchResultArray)
// }