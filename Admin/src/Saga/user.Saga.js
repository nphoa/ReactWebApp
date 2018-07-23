import * as types from '../Constant/ActionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getAllUser(action){
    console.log(action);
    let data = null;
    yield callApi(`${urls.GET_ALL_USER}/?currentPage=${action.pageNumber}`,'GET').then((res)=>{
        data = res.data.data;
    });
    yield put(actions.getAllUser_Success(data));
    
}


export function* watchGetAllUser(){
    yield takeEvery(types.GET_ALL_USER,getAllUser);
}


function* getUserById(action){
    // console.log(action);
     let data = null;
     yield callApi(`${urls.GET_USER_BY_ID}/?idUser=${action.id}`,'GET').then((res)=>{
         data = res.data.data;
     });
     yield put(actions.getUserById_Success(data));
     
 }
 
 
 export function* watchGetUserById(){
     yield takeEvery(types.GET_USER_BY_ID,getUserById);
 }