import * as types from '../Constant/ActionType';

var initialState  = {
	products:[],
	productEdit:{
		product_id:0
	}
    
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_PRODUCT_SUCCESS:
			state.products = action.products;
			return {...state};
			break;
		case types.GET_PRODUCT_BY_ID_SUCCESS:
			if(action.product!= null){
				state.productEdit = action.product;
			}
			return {...state};
			break;
		case types.RESET_PRODUCT:
			state.productEdit ={product_id:0};
			return {...state};
			break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer