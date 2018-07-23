import * as types from '../Constant/ActionType';

var initialState  = {
    userLogin:'',
    isLogin:false   
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.LOGIN:
			let userLogin = localStorage.getItem('loginUser');
			state.isLogin = (userLogin != null) ? true : false;
			return {...state};
			break;
		case types.LOGOUT:
			localStorage.removeItem('loginUser');
			state.isLogin = false;
			return {...state};
			break;
		default:
			return {...state};
			break;
	}
};

export default myReducer