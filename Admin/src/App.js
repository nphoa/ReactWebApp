import React, { Component } from 'react';
import Layout from '../src/Pages/Layout/Layout';
import {BrowserRouter as Router ,Route,Redirect,Switch} from 'react-router-dom';
import  LoginComponent from '../src/Components/Login/login.Component';

class App extends Component {
  render() {
    let bCheck = true;
    return (
      <Router>
          <Layout/> 
      </Router>
      
    );
  
  }
}

export default App;


