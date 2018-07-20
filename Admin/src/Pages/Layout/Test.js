import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';



class Layout extends Component {
  render() {
    const isLogin = true;
    if(!isLogin){
        return (
            <Redirect to ='/login'/>
        );
    }
    return (
        <Redirect to ='/dashboard'/>
    );
    
  }
}

export default Layout;
