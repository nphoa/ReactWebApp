import * as types from '../Constant/ActionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getAllPublisher(action){
   // console.log(action);
    let data = null;
    yield callApi(`${urls.GET_ALL_PUBLISHER}`,'GET').then((res)=>{
        data = res.data.data;
    });
    yield put(actions.getAllPublisher_Success(data));
    
}


export function* watchGetAllPublisher(){
    yield takeEvery(types.GET_ALL_PUBLISHER,getAllPublisher);
}


