import {delay} from 'redux-saga';
import{all} from 'redux-saga/effects';
import {watchGetAllData} from './Category.Saga';
import {watchGetProductByCategory,watchGetProductById} from './Product.Saga';
import {watchLogin} from './Login.Saga';
import {watchGetAllPayemntType,watchGetAllShipmentType} from './cart.Saga';
export default function* rootSaga(){
    yield all([
        watchGetAllData(),
        watchGetProductByCategory(),
        watchGetProductById(),
        watchLogin(),
        watchGetAllPayemntType(),
        watchGetAllShipmentType()
    ]);
}