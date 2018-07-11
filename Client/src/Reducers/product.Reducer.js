import * as types from '../Constant/ActionType';

// import * as api from '../API/Product';

var initialState  = {
	product_list:[],
	product_detail:null
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
			state.product_list = action.data.data;
			state.product_detail = {};
			return Object.assign({},state);
			break;
		case types.GET_PRODUCTS_BY_ID_SUCCESS:
			state.product_detail = action.product;
			return Object.assign({},state);
			break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer