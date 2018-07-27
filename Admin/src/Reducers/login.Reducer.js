import * as types from '../Constant/ActionType';

var initialState  = {
    userLogin:'',
    isLogin:false   
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			if(!sessionStorage.getItem('loginUser')){
				sessionStorage.setItem('loginUser',JSON.stringify(action.data));
			}
			state.userLogin = JSON.parse(sessionStorage.getItem('loginUser'));
			state.isLogin = true;
			return {...state};
			break;
		case types.LOGOUT:
			sessionStorage.removeItem('loginUser');
			state.isLogin = false;
			return {...state};
			break;
		default:
			if(sessionStorage.getItem('loginUser')){
				state.isLogin = true;
				state.userLogin = JSON.parse(sessionStorage.getItem('loginUser'));
			}
			return {...state};
			break;
	}
};

export default myReducer