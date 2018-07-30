import React, { Component } from 'react';
import Main from '../src/Pages/Layout/Main';
import LoginComponent from '../src/Components/Login/login.Component';
import Dashboard from '../src/Pages/Dashboard';
import ProductPage from '../src/Pages/Product.Page';

import ProductAddPage from '../src/Pages/productAdd.Page';
import AddImageDetailComponent from '../src/Components/Product/AddImageDetail.Component';
import CategoryContainer from '../src/Containers/category.Container';
import CategoryChildrenContainer from '../src/Containers/categoryChildren.Container';
import CategoryAddContainer from '../src/Containers/categoryAdd.Container';
import PublisherContainer from '../src/Containers/Publisher/publishers.Container';
import PublisherAddContainer from '../src/Containers/Publisher/publisherAdd.Container';

import AuthorContainer from '../src/Containers/Author/authors.Container';
import AuthorAddContainer from '../src/Containers/Author/authorAdd.Container';

import ReleaseCompanyContainer from '../src/Containers/ReleaseCompany/releaseCompanys.Container';
import ReleaseCompanyAddContainer from '../src/Containers/ReleaseCompany/releaseCompanyAdd.Container';

import UsersContainer from '../src/Containers/User/users.Container';
import UserAddContainer from '../src/Containers/User/userAdd.Container';
import MyProfileComponent from '../src/Components/User/myProfile.Component';

import DiscountProductComponent from '../src/Components/Product/discount.Component';
const routersV2 = [
	{
		path: '/',
		component:Main,
		routes:[
			{
				path: '/dashboard',
				exact:true,
				component: Dashboard
			},
			{
				path: '/product',
				exact:true,
				component: ProductPage
			},
			{
				path: '/product/add/:id?',
				component: ProductAddPage 
			},
			{
				path: '/product/addImageDetailByProduct/:id',
				component: AddImageDetailComponent 
			},
			{
				path: '/category',
				exact:true,
				component: CategoryContainer
			},
			{
				path: '/category/children/:idParent',
				exact:true,
				component: CategoryChildrenContainer 
			},
			{
				path: '/category/add/:idParent/:idCategory?',
				exact:true,
				component: CategoryAddContainer 
			},
			{
				path: '/publisher',
				exact:true,
				component: PublisherContainer 
			},
			{
				path: '/publisher/add/:idPublisher?',
				component: PublisherAddContainer 
			},
			{
				path: '/authors/:currentPage',
				exact:true,
				component: AuthorContainer
			},
			{
				path: '/author/add/:idAuthor?',
				component: AuthorAddContainer
			},
			
			{
				path: '/releaseCompany',
				exact:true,
				component: ReleaseCompanyContainer
			},
			{
				path: '/releaseCompany/add/:idReleaseCompany?',
				component:ReleaseCompanyAddContainer
			},
			{
				path: '/users/:currentPage',
				component: UsersContainer
			},
			{
				path: '/user/add/:idUser?',
				exact:true,
				component: UserAddContainer
			},
			{
				path:'/user/myProfile',
				component:MyProfileComponent
			},
			{
				path:'/products/discount',
				component:DiscountProductComponent
			}
			
		]	
	},
	{
		path: '/login',
		exact: true,
		component:LoginComponent
	}
];

export default routersV2;