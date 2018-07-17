import * as types from '../Constant/ActionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getAllAuthor(action){
   // console.log(action);
    let data = null;
    yield callApi(`${urls.GET_ALL_AUTHOR}/?currentPage=${action.currentPage}`,'GET').then((res)=>{
        data = res.data.data;
    });
    yield put(actions.getAllAuthor_Success(data));
    
}


export function* watchGetAllAuthor(){
    yield takeEvery(types.GET_ALL_AUTHOR,getAllAuthor);
}


function* getAuthorById(action){
    // console.log(action);
     let data = null;
     yield callApi(`${urls.GET_AUTHOR_BY_ID}/?idAuthor=${action.id}`,'GET').then((res)=>{
         data = res.data.data;
     });
     yield put(actions.getAuthorById_Success(data));
     
 }
 
 
 export function* watchGetAuthorById(){
     yield takeEvery(types.GET_AUTHOR_BY_ID,getAuthorById);
 }