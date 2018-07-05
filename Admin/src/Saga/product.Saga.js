import * as types from '../Constant/ActionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getAllProduct(action){
   // console.log(action);
    let data = null;
    yield callApi(`${urls.GET_ALL_PRODUCT}`,'GET').then((res)=>{
        data = res.data.data;
    });
    yield put(actions.getAllProduct_Success(data));
    
}


export function* watchGetAllProduct(){
    yield takeEvery(types.GET_ALL_PRODUCT,getAllProduct);
}


