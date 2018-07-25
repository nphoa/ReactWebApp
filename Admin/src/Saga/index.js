import {delay} from 'redux-saga';
import{all} from 'redux-saga/effects';
import {watchGetAllProduct,watchGetProductById} from './product.Saga';
import {watchGetAllCategory,watchGetCategoryById} from './Category.Saga';
import {watchGetAllAuthor,watchGetAuthorById} from './author.Saga';
import {watchGetAllPublisher,watchGetPublisherById} from './publisher.Saga';
import {watchGetAllReleaseCompany,watchGetReleaseCompanyById} from './releaseCompany.Saga';
import {watchGetAllUser,watchGetUserById} from './user.Saga';
import {watchLogin} from './login.Saga';
import {watchGetAllRole} from './role.Saga';
export default function* rootSaga(){
    yield all([
        watchGetCategoryById(),
        watchGetProductById(),
        watchGetAllProduct(),
        watchGetAllCategory(),
        watchGetAllAuthor(),
        watchGetAllReleaseCompany(),
        watchGetAllPublisher(),
        watchGetPublisherById(),
        watchGetAuthorById(),
        watchGetReleaseCompanyById(),
        watchGetAllUser(),
        watchGetUserById(),
        watchLogin(),
        watchGetAllRole()
    ]);
}