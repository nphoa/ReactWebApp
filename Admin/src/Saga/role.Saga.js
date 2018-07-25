import * as types from '../Constant/ActionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getAllRole(action){
     
     let data = null;
     yield callApi(`${urls.GET_ALL_ROLE}`,'GET').then((res)=>{
         data = res.data.data;
     });
    if(data!= null || data!= undefined){
        yield put(actions.getAllRole_Success(data));
    } 
 }
 
 
 export function* watchGetAllRole(){
     yield takeEvery(types.GET_ALL_ROLE,getAllRole);
 }

