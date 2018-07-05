import * as types from '../Constant/ActionType';
import {put,takeEvery } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getAllPayemntType(action){
    
    let data = null;
    yield callApi(urls.GET_ALL_PAYMENT_TYPE,'GET').then((res)=>{
        data = res.data.data;
    });
    if(data !== null || data != undefined ){
        yield put(actions.getAllPaymentType_Success(data));
    }
    
}

function* getAllShipmentType(action){
    
    let data = null;
    yield callApi(urls.GET_ALL_SHIPMENT_TYPE,'GET').then((res)=>{
        data = res.data.data;
    });
    if(data !== null || data != undefined ){
        yield put(actions.getAllShipmentType_Success(data));
    }
    
}

export function* watchGetAllPayemntType(){
    yield takeEvery(types.GET_ALL_PAYMENT_TYPE,getAllPayemntType);
}

export function* watchGetAllShipmentType(){
    yield takeEvery(types.GET_ALL_SHIPMENT_TYPE,getAllShipmentType);
}