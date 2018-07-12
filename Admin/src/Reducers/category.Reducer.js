import * as types from '../Constant/ActionType';

var initialState  = {
	categories:[],
	categoryEdit:{
		category_id:0
	}
    
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_CATEGORY_SUCCESS:
			state.categories = action.categories;
			return {...state};
			break;
		case types.GET_CATEGORY_BY_ID_SUCCESS:
			state.categoryEdit = action.category;
			return {...state};
			break;
		case types.RESET_CATEGORY:
			state.categoryEdit = {category_id:0};
			return {...state};
			break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer