import{combineReducers} from 'redux';
import product from './product.Reducer';
import category from './category.Reducer';
import cart from './cart.Reducer';
import login from './login.Reducer';
import paymentType from './paymentType.Reducer';
import shipmentType from './shipmentType.Reducer';
const appReducers = combineReducers({
	product:product,
	category:category,
	cart:cart,
	login:login,
	paymentType,
	shipmentType
});

export default appReducers