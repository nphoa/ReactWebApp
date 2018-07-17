import * as types from '../Constant/ActionType';

var initialState  = {
	authors:[],
	authorEditing:{id:0},
	countData:0,
	currentPage:1
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_AUTHOR_SUCCESS:
			state.authors = action.authors.authors;
			state.countData = action.authors.countData;
			state.currentPage = action.authors.currentPage;
			return {...state};
			break;
		case types.GET_AUTHOR_BY_ID_SUCCESS:
            state.authorEditing = action.author;
			return {...state};
			break;
		case types.RESET_AUTHOR:
            state.authorEditing = {id:0};
			return {...state};
			break;
		case types.PAGINATION_AUTHOR:
			state.currentPage = action.numberPage;
			return {...state};
			break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer