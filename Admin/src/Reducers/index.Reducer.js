import{combineReducers} from 'redux';
import productReducer from './products.Reducer';
import categoryReducer from './category.Reducer';
import authorReducer from './author.Reducer';
import publisherReducer from './publisher.Reducer';
import releaseCompanyReducer from './releaseCompany.Reducer';
import {reducer as formReducer} from 'redux-form';
import loginReducer from './login.Reducer';
const appReducers = combineReducers({
	form:formReducer,
	product:productReducer,
	categories:categoryReducer,
	author:authorReducer,
	publisher:publisherReducer,
	releaseCompany:releaseCompanyReducer,
	login:loginReducer
});

export default appReducers