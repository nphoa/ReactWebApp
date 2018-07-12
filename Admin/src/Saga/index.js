import {delay} from 'redux-saga';
import{all} from 'redux-saga/effects';
import {watchGetAllProduct,watchGetProductById} from './product.Saga';
import {watchGetAllCategory,watchGetCategoryById} from './Category.Saga';
import {watchGetAllAuthor} from './author.Saga';
import {watchGetAllPublisher} from './publisher.Saga';
import {watchGetAllReleaseCompany} from './releaseCompany.Saga';
export default function* rootSaga(){
    yield all([
        watchGetCategoryById(),
        watchGetProductById(),
        watchGetAllProduct(),
        watchGetAllCategory(),
        watchGetAllAuthor(),
        watchGetAllReleaseCompany(),
        watchGetAllPublisher()
    ]);
}