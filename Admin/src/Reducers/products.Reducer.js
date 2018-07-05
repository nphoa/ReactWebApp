import * as types from '../Constant/ActionType';

var initialState  = [

    
];

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_PRODUCT_SUCCESS:
			state = action.products;
			return [...state];
			break;
		default:
			//console.log(api.getAllProduct());
			return [...state];
			break;
	}
};

export default myReducer