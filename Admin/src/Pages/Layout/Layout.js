import React, { Component } from 'react';
import Footer from '../Partial/Footer';
import Menu from '../Partial/Menu';
import Header from '../Partial/Header';
import routers from '../../routers';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import{connect} from 'react-redux';
import * as actions from '../../Actions/index';
import LoginComponent from '../../Components/Login/login.Component';
import Custom from '../../Components/customV2.Component';
import DashboardComponent from '../../Components/Dashboard';
import LayoutComponent from '../../Components/Layout';
import TestComponent from '../../Pages/Layout/Test';
class Layout extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route path='/' component={LayoutComponent} />  
          <Route path='/login' component={LoginComponent} />
          <Route path='/dashboard' component={DashboardComponent} />
        </div>
      </Router>
   
    )
     
    }

  }


export default Layout;


