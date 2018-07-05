import {delay} from 'redux-saga';
import{all} from 'redux-saga/effects';
import {watchGetAllProduct} from './product.Saga';
import {watchGetAllCategory} from './Category.Saga';
import {watchGetAllAuthor} from './author.Saga';
import {watchGetAllPublisher} from './publisher.Saga';
import {watchGetAllReleaseCompany} from './releaseCompany.Saga';
export default function* rootSaga(){
    yield all([
        watchGetAllProduct(),
        watchGetAllCategory(),
        watchGetAllAuthor(),
        watchGetAllReleaseCompany(),
        watchGetAllPublisher()
    ]);
}