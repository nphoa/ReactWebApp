import React, { Component } from 'react';
import Dashboard from '../src/Pages/Dashboard';
import NotFound from '../src/Pages/NotFound';
import ProductPage from '../src/Pages/Product.Page';
import ProductAddPage from '../src/Pages/productAdd.Page';
import AddImageDetailComponent from '../src/Components/AddImageDetail.Component';
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
		path: '/product/add',
		exact: true,
		main: () => <ProductAddPage />
	},
	{
		path: '/product/addImageDetailByProduct/:id',
		exact: true,
		main: ({history,match}) => <AddImageDetailComponent history = {history} match = {match} />
	},
	// {
	// 	path: '/plan',
	// 	exact: true,
	// 	main: () => <PlanPage />
	// },
	// {
	// 	path: '/plan/add/:id',
	// 	exact: true,
	// 	main: ({history,match}) => <AddPlan history = {history} match = {match}/>
	// },
	// {
	// 	path: '/work',
	// 	exact: true,
	// 	main: () => <WorkPage />
	// },
	// {
	// 	path: '/work/add/:id',
	// 	exact: true,
	// 	main: ({history,match}) => <AddWork history = {history} match = {match}/>
	// },
	// {
	// 	path: '/news',
	// 	exact: true,
	// 	main: () => <NewsPage />
	// },
	// {
	// 	path: '',
	// 	exact: false,
	// 	main: () => <NotFound />	
	// }

];

export default routers;