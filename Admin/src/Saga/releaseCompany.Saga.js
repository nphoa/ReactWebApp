import * as types from '../Constant/ActionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getAllReleaseCompany(action){
   // console.log(action);
    let data = null;
    yield callApi(`${urls.GET_ALL_RELEASECOMPANY}`,'GET').then((res)=>{
        data = res.data.data;
    });
    yield put(actions.getAllReleaseCompany_Success(data));
    
}


export function* watchGetAllReleaseCompany(){
    yield takeEvery(types.GET_ALL_RELEASE_COMPANY,getAllReleaseCompany);
}


function* getReleaseCompanyById(action){
    // console.log(action);
     let data = null;
     yield callApi(`${urls.GET_RELEASECOMPANY_BY_ID}/?idReleaseCompany=${action.id}`,'GET').then((res)=>{
         data = res.data.data;
     });
     yield put(actions.getReleaseCompanyById_Success(data));
     
 }
 
 
 export function* watchGetReleaseCompanyById(){
     yield takeEvery(types.GET_RELEASE_COMPANY_BY_ID,getReleaseCompanyById);
 }