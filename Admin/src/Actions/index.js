import * as types from '../Constant/ActionType';



export const getAllProduct = () => {
	return {
		type:types.GET_ALL_PRODUCT
	}
}
export const getAllProduct_Success = (products) => {
	return {
		type:types.GET_ALL_PRODUCT_SUCCESS,
		products:products
	}
}

export const getAllCategory = () => {
	return {
		type:types.GET_ALL_CATEGORY
	}
}

export const getAllCategory_Success = (categories) => {
	return {
		type:types.GET_ALL_CATEGORY_SUCCESS,
		categories:categories
	}
}

export const getAllAuthor = () => {
	return {
		type:types.GET_ALL_AUTHOR
	}
}

export const getAllAuthor_Success = (authors) => {
	return {
		type:types.GET_ALL_AUTHOR_SUCCESS,
		authors:authors
	}
}

export const getAllPublisher = () => {
	return {
		type:types.GET_ALL_PUBLISHER
	}
}

export const getAllPublisher_Success = (publishers) => {
	return {
		type:types.GET_ALL_PUBLISHER_SUCCESS,
		publishers:publishers
	}
}

export const getAllReleaseCompany = () => {
	return {
		type:types.GET_ALL_RELEASE_COMPANY
	}
}

export const getAllReleaseCompany_Success = (releaseCompanys) => {
	return {
		type:types.GET_ALL_RELEASE_COMPANY_SUCCESS,
		releaseCompanys:releaseCompanys
	}
}