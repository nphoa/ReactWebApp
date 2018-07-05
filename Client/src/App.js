import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutClient from '../src/Pages/Layout/Layout';
import Products from '../src/Components/Products.Component';
import {BrowserRouter ,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LayoutClient/>
      </BrowserRouter>
    );
  }
}

export default App;
