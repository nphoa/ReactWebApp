import{combineReducers} from 'redux';
import productReducer from './products.Reducer';
import categoryReducer from './category.Reducer';
import authorReducer from './author.Reducer';
import publisherReducer from './publisher.Reducer';
import releaseCompanyReducer from './releaseCompany.Reducer';
const appReducers = combineReducers({
	products:productReducer,
	categories:categoryReducer,
	authors:authorReducer,
	publishers:publisherReducer,
	releaseCompany:releaseCompanyReducer
});

export default appReducers