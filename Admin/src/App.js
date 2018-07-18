import React, { Component } from 'react';
import Layout from '../src/Pages/Layout/Layout';
import {BrowserRouter ,Route,Redirect,Switch} from 'react-router-dom';
import  LoginComponent from '../src/Components/Login/login.Component';

class App extends Component {
  render() {
    let bCheck = true;
    return (
      <BrowserRouter>
        <Switch>
          <Layout/> 
        </Switch>
       
      </BrowserRouter>
      
    );
  
  }
}

export default App;


