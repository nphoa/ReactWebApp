import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import LoginComponent from '../Components/Login.Component';
const mapStateToProps = (state) => {
  return{
    login:state.login
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getLogin:(login)=>{
        dispatch(actions.login(login));
      }
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);
