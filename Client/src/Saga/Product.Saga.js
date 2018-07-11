import * as types from '../Constant/ActionType';
import {delay} from 'redux-saga';
import {put,takeEvery,takeLatest } from 'redux-saga/effects';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import * as actions from '../Actions/index';


function* getProductByCategory(action){
   // console.log(action);
    let data = null;
    yield callApi(`${urls.GET_PRODUCT_BY_CATEGORY_ID}/?idCategory=${action.idCategory}`,'GET').then((res)=>{
        data = res.data;
    });
    yield put(actions.getProductByCategory_Success(data));
    
}


export function* watchGetProductByCategory(){
    yield takeEvery(types.GET_PRODUCTS_BY_CATEGORY,getProductByCategory);
}

function* getProductById(action){
    let data = null;
    yield callApi(`${urls.GET_PRODUCT_BY_ID}/?idProduct=${action.id}`,'GET').then((res)=>{
        data = res.data.data;
        console.log(data);
    });
    yield put(actions.getProductById_Success(data));
}

export function* watchGetProductById(){
    yield takeEvery(types.GET_PRODUCTS_BY_ID,getProductById);
}
