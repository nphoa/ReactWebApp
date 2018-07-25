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
          <Route path='/' exact component={Main} />  
          <Route path='/login' component={LoginComponent} />
        </div>
      </Router>
   
    )
     
    }

  }


export default Layout;


