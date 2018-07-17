import * as types from '../Constant/ActionType';

var initialState  = {
	publishers:[],
	publisherEditing:{id:0},
	countRestPublishers:0,
	countData:0,
	currentPage:1
    
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_PUBLISHER_SUCCESS:
			state.publishers = action.publishers.publishers;
			state.countRestPublishers = action.publishers.countRestData;
			state.countData = action.publishers.countData;
			state.currentPage = action.publishers.currentPage;
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