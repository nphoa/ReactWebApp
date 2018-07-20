import * as types from '../Constant/ActionType';

var initialState  = {
    userLogin:'',
    isLogin:false   
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.LOGIN:
			state.isLogin = true;
			return {...state};
			break;
		case types.LOGOUT:
			state.isLogin = false;
			return {...state};
			break;
		default:
			return {...state};
			break;
	}
};

export default myReducer