import * as types from '../Constant/ActionType';
import {delay} from 'redux-saga';
import {put,takeEvery } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getAllData(){
    let data = null;
    yield callApi(urls.GET_ALL_CATEGORY,'GET').then((res)=>{
        data = res.data;
    });
    yield put(actions.fetchAllCategory_Success(data));
   // console.log(data);
}


export function* watchGetAllData(){
    yield takeEvery(types.GET_ALL_CATEGORY,getAllData);
}

