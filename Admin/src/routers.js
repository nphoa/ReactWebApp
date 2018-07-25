import React, { Component } from 'react';
import Dashboard from '../src/Pages/Dashboard';
import NotFound from '../src/Pages/NotFound';
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
const routers = [
	{
		path: '/',
		main: () => <Dashboard />
	},
	{
		path: '/product',
		exact:true,
		main: () => <ProductPage />
	},
	{
		path: '/product/add/:id?',
		main: ({history,match}) => <ProductAddPage history = {history} match = {match}/>
	},
	{
		path: '/product/addImageDetailByProduct/:id',
		main: ({history,match}) => <AddImageDetailComponent history = {history} match = {match} />
	},
	{
		path: '/category',
		exact:true,
		main: () => <CategoryContainer />
	},
	{
		path: '/category/children/:idParent',
		exact:true,
		main: ({history,match}) => <CategoryChildrenContainer history = {history} match = {match}/>
	},
	{
		path: '/category/add/:idParent/:idCategory?',
		exact:true,
		main: ({history,match}) => <CategoryAddContainer history = {history} match = {match}/>
	},
	{
		path: '/publisher',
		exact:true,
		main: () => <PublisherContainer />
	},
	{
		path: '/publisher/add/:idPublisher?',
		main: ({history,match}) => <PublisherAddContainer history = {history} match = {match}/>
	},
	{
		path: '/authors/:currentPage',
		exact:true,
		main: ({history,match}) => <AuthorContainer history = {history} match = {match}/>
	},
	{
		path: '/author/add/:idAuthor?',
		main: ({history,match}) => <AuthorAddContainer history = {history} match = {match}/>
	},
	
	{
		path: '/releaseCompany',
		exact:true,
		main: () => <ReleaseCompanyContainer />
	},
	{
		path: '/releaseCompany/add/:idReleaseCompany?',
		main: ({history,match}) => <ReleaseCompanyAddContainer history = {history} match = {match}/>
	},
	{
		path: '/users/:currentPage',
		main: ({history,match}) => <UsersContainer history = {history} match = {match}/>
	},
	{
		path: '/user/add/:idUser?',
		main: ({history,match}) => <UserAddContainer history = {history} match = {match}/>
	},
];

export default routers;