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
const routers = [
	{
		path: '/',
		exact: true,
		main: () => <Dashboard />	
	},
	{
		path: '/product',
		exact: true,
		main: () => <ProductPage />
	},
	{
		path: '/product/add/:id?',
		exact: true,
		main: ({history,match}) => <ProductAddPage history = {history} match = {match}/>
	},
	{
		path: '/product/addImageDetailByProduct/:id',
		exact: true,
		main: ({history,match}) => <AddImageDetailComponent history = {history} match = {match} />
	},
	{
		path: '/category',
		exact: true,
		main: () => <CategoryContainer />
	},
	{
		path: '/category/children/:idParent',
		exact: true,
		main: ({history,match}) => <CategoryChildrenContainer history = {history} match = {match}/>
	},
	{
		path: '/category/add/:idParent/:idCategory?',
		exact: true,
		main: ({history,match}) => <CategoryAddContainer history = {history} match = {match}/>
	},
	{
		path: '/publisher',
		exact: true,
		main: () => <PublisherContainer />
	},
	{
		path: '/publisher/add/:idPublisher?',
		exact: true,
		main: ({history,match}) => <PublisherAddContainer history = {history} match = {match}/>
	},

];

export default routers;