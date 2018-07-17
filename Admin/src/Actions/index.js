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

export const getAllAuthor = (currentPage) => {
	return {
		type:types.GET_ALL_AUTHOR,
		currentPage:currentPage
	}
}

export const getAllAuthor_Success = (authors) => {
	return {
		type:types.GET_ALL_AUTHOR_SUCCESS,
		authors:authors
	}
}

export const getAllPublisher = (currentPage) => {
	return {
		type:types.GET_ALL_PUBLISHER,
		currentPage:currentPage
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

export const getProductById = (id) => {
	return {
		type:types.GET_PRODUCT_BY_ID,
		id:id
	}
}

export const getProductById_Success = (product) => {
	return {
		type:types.GET_PRODUCT_BY_ID_SUCCESS,
		product:product
	}
}

export const resetProduct = () => {
	return {
		type:types.RESET_PRODUCT
		
	}
}

export const deleteProduct = (idProduct) => {
	return {
		type:types.DELETE_PRODUCT,
		idProduct:idProduct
	}
}

export const getCategoryById = (id) => {
	return {
		type:types.GET_CATEGORY_BY_ID,
		id:id
	}
}

export const getCategoryById_Success = (category) => {
	return {
		type:types.GET_CATEGORY_BY_ID_SUCCESS,
		category:category
	}
}
export const resetCategory = () => {
	return {
		type:types.RESET_CATEGORY
		
	}
}

export const resetPublisher = () => {
	return {
		type:types.RESET_PUBLISHER
		
	}
}

export const getPublisherById = (id) => {
	return {
		type:types.GET_PUBLISHER_BY_ID,
		id:id
	}
}

export const getPublisherById_Success = (publisher) => {
	return {
		type:types.GET_PUBLISHER_BY_ID_SUCCESS,
		publisher:publisher
	}
} 

export const resetAuthor = () => {
	return {
		type:types.RESET_AUTHOR
	}
}

export const getAuthorById = (id) => {
	return {
		type:types.GET_AUTHOR_BY_ID,
		id:id
	}
}

export const getAuthorById_Success = (author) => {
	return {
		type:types.GET_AUTHOR_BY_ID_SUCCESS,
		author:author
	}
} 


export const resetReleaseCompany = () => {
	return {
		type:types.RESET_RELEASE_COMPANY
	}
}

export const getReleaseCompanyById = (id) => {
	return {
		type:types.GET_RELEASE_COMPANY_BY_ID,
		id:id
	}
}

export const getReleaseCompanyById_Success = (releaseCompany) => {
	return {
		type:types.GET_RELEASE_COMPANY_BY_ID_SUCCESS,
		releaseCompany:releaseCompany
	}
} 

export const paginationAuthor = (numberPage) => {
	return {
		type:types.PAGINATION_AUTHOR,
		numberPage:numberPage
	}
}