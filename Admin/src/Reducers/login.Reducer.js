import * as types from '../Constant/ActionType';

var initialState  = {
    userLogin:'',
    isLogin:true   
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
		case types.LOGIN:
			state.isLogin = true;
			return {...state};
			break;
		default:
			return {...state};
			break;
	}
};

export default myReducer