import * as types from '../Constant/ActionType';

var initialState  = [

    
];

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_CATEGORY_SUCCESS:
			state = action.categories;
			return [...state];
			break;
		default:
			//console.log(api.getAllProduct());
			return [...state];
			break;
	}
};

export default myReducer