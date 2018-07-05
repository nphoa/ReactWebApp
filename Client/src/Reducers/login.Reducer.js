import * as types from '../Constant/ActionType';

// import * as api from '../API/Product';

var initialState  = {
	
};

var myReducer = (state = initialState,action) => {
	switch (action.type) {
        case types.LOGIN_SUCCESS:
            //Set to state of redux
            state = action.login;
			//Set to local storage
            localStorage.setItem('login',JSON.stringify(action.login));
            return {...state};
			break;
		case types.LOGOUT :
			state = {};
			localStorage.removeItem('login');
			return {...state};
			break;
		default:
			//console.log(api.getAllProduct());
			let userLogin = localStorage.getItem('login');
			if(userLogin !== null || userLogin != {}){
				state = JSON.parse(userLogin);
			}
			return {...state};
			break;
	}
};

export default myReducer