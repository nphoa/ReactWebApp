import React, { Component } from 'react';
import{connect} from 'react-redux';
import ConfirmModalComponent from '../Components/Modal/Confirm.Modal';
import * as actions from '../Actions/index';
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
export default connect(mapStateToProps,mapDispatchToProps)(ConfirmModalComponent);
