import * as types from '../Constant/ActionType';



export const fetchAllCategory = () => {
	return {
		type:types.GET_ALL_CATEGORY
	}
}

export const fetchAllCategory_Success = (data) => {
	return {
		type:types.GET_ALL_CATEGORY_SUCCESS,
		data:data
	}
}

export const getProductByCategory = (idCategory) => {
	return {
		type:types.GET_PRODUCTS_BY_CATEGORY,
		idCategory:idCategory
	}
}

export const getProductByCategory_Success = (data) => {
	return {
		type:types.GET_PRODUCTS_BY_CATEGORY_SUCCESS,
		data:data
	}
}

export const getProductById = (id) => {
	return {
		type:types.GET_PRODUCTS_BY_ID,
		id:id
	}
}
export const getProductById_Success = (product) => {
	return {
		type:types.GET_PRODUCTS_BY_ID_SUCCESS,
		product:product
	}
}

export const addProductToCart = (product,quantity) => {
	return {
		type:types.ADD_PRODUCT_TO_CART,
		product:product,
		quantity:quantity
	}
}

export const removeProductFromCart = (product) => {
	return {
		type:types.REMOVE_PRODUCT_FROM_CART,
		product:product,
	}
}

export const updateQuantityProductFromCart = (cart,quantity) => {
	return {
		type:types.UPDATE_QUANTITY_PRODUCT_FROM_CART,
		cart:cart,
		quantity:quantity
	}
}
export const login = (login) => {
	return {
		type:types.LOGIN,
		login:login
	}
}
export const login_success = (login) => {
	return {
		type:types.LOGIN_SUCCESS,
		login:login
	}
}

export const logout = () => {
	return {
		type:types.LOGOUT
	}
}

export const getAllPaymentType = () => {
	return {
		type:types.GET_ALL_PAYMENT_TYPE
	}
}

export const getAllShipmentType = () => {
	return {
		type:types.GET_ALL_SHIPMENT_TYPE
	}
}

export const getAllPaymentType_Success = (data) => {
	return {
		type:types.GET_ALL_PAYMENT_TYPE_SUCCESS,
		data:data
	}
}

export const getAllShipmentType_Success = (data) => {
	return {
		type:types.GET_ALL_SHIPMENT_TYPE_SUCCESS,
		data:data
	}
}

