import React, { Component } from 'react';
import Main from '../src/Pages/Layout/Main';
import LoginComponent from '../src/Components/Login/login.Component';

const routersV2 = [
	{
		path: '/',
		exact: true,
		main: () => <Main />	
	},
	{
		path: '/login',
		exact: true,
		main: () => <LoginComponent />
	}
];

export default routersV2;