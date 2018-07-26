import React, { Component } from 'react';
import Layout from '../src/Pages/Layout/Layout';
import {BrowserRouter as Router,Route,Switch,Redirect,Link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Layout/> 
    );
  }
}
export default App;


