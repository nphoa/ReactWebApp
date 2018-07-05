import React, { Component } from 'react';
import Home from '../src/Components/Home.Component';
import Product from '../src/Containers/Products.Container';
import ProductPage from '../src/Pages/Products.Page';
import ProductDetailPage from '../src/Pages/ProductDetail.Page';
import CartDetailContainer from '../src/Containers/CartDetail.Container';
import CheckoutContainer from '../src/Containers/Checkout.Container';
const routers = [
	{
		path: '/home',
		exact: true,
		component:Home
	},
	{
		path:'/product/getProductByCategoryId/:idCategory',
		exact:true,
		component:ProductPage
	},
	{
		path:'/product/getProductById/:idProduct',
		exact:true,
		component:ProductDetailPage
	},
	{
		path:'/cart_detail',
		exact:true,
		component:CartDetailContainer
	},
	{
		path:'/checkout',
		exact:true,
		component:CheckoutContainer
	}
	// {
	// 	path: '/product/add',
	// 	exact: true,
	// 	main: () => <AddProductPage />
	// },
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