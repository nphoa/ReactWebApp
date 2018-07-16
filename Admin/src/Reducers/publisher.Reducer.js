import * as types from '../Constant/ActionType';

var initialState  = {
	publishers:[],
	publisherEditing:{id:0}
    
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_PUBLISHER_SUCCESS:
			state.publishers = action.publishers;
			return {...state};
			break;
		case types.GET_PUBLISHER_BY_ID_SUCCESS:
			state.publisherEditing = action.publisher;
			return {...state};
			break;
		case types.RESET_PUBLISHER:
			state.publisherEditing = {id:0};
			return {...state};
			break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer