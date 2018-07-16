import * as types from '../Constant/ActionType';

var initialState  = {
	releaseCompanys:[],
	releaseCompanyEditing:{id:0}
    
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.GET_ALL_RELEASE_COMPANY_SUCCESS:
			state.releaseCompanys = action.releaseCompanys;
			return {...state};
			break;
		case types.GET_RELEASE_COMPANY_BY_ID_SUCCESS:
			state.releaseCompanyEditing = action.releaseCompany;
			return {...state};
			break;
		case types.RESET_RELEASE_COMPANY:
			state.releaseCompanyEditing = {id:0};
			return {...state};
			break;
		default:
			//console.log(api.getAllProduct());
			return {...state};
			break;
	}
};

export default myReducer