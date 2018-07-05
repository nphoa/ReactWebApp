import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import HeaderComponent from '../Pages/Partial/Client/Header';
const mapStateToProps = (state) => {
  return{
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        logout:()=>{
            dispatch(actions.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);
