import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


class Layout extends Component {
  render() {
    const isLogin = false;
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

//export default Layout;

const mapStateToProps = (state) => {
    return{
      isLogin:state.login.isLogin
    }
  }
  const mapDispatchToProps = (dispatch,props) => {
      return {
      
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Layout);