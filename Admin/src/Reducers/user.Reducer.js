import * as types from '../Constant/ActionType';

var initialState  = {
	users:[],
	userEditing:{id:0},
	countData:0,
	currentPage:1
    
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_USER_SUCCESS:
			state.users = action.data.users;
			state.countData = action.data.countData;
			state.currentPage = action.data.currentPage;
			return {...state};
			break;
		case types.GET_USER_BY_ID_SUCCESS:
			console.log(action);
            state.userEditing = action.user;
			return {...state};
		case types.RESET_USER:
            state.userEditing = {id:0};
            return {...state};
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer