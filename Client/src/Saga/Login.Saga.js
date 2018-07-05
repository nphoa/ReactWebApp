import * as types from '../Constant/ActionType';
import {put,takeEvery } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getLogin(action){
    
    let data = null;
    yield callApi(urls.LOGIN,'POST',action.login).then((res)=>{
        data = res.data.data;
    });
    if(data !== null || data != undefined ){
        yield put(actions.login_success(data));
    }
    
}


export function* watchLogin(){
    yield takeEvery(types.LOGIN,getLogin);
}

