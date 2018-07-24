import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import LoginComponent from '../../Components/Login/login.Component';
import Main from '../../Pages/Layout/Main';
import LayoutComponent from '../../Components/Layout';
class Layout extends Component {
  render() {
    return(
      <Router>
        <div>
          <Route path='/' exact={true} component={LayoutComponent} />  
          <Route path='/login' component={LoginComponent} />
          <Route path='/dashboard' component={Main} />
        </div>
      </Router>
   
    )
     
    }

  }


export default Layout;


