import * as types from '../Constant/ActionType';

// import * as api from '../API/Product';

var initialState  = [];

var myReducer = (state = initialState,action) => {
	switch (action.type) {
        case types.GET_ALL_CATEGORY_SUCCESS:
            return Object.assign([],action.data.data);
            break;
		default:
			//console.log(api.getAllProduct());
			return [...state];
			break;
	}
};

export default myReducer