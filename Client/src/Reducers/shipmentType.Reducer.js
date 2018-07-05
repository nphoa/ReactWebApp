import * as types from '../Constant/ActionType';


var initialState  = [];

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_SHIPMENT_TYPE_SUCCESS:
			state = action.data;
			return Object.assign([],state);
			break;
	
		default:
			//console.log(api.getAllProduct());
			return [...state];
			break;
	}
};

export default myReducer