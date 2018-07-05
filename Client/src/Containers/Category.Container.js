import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import Menu from '../Pages/Partial/Client/Menu';
const mapStateToProps = (state) => {
  return{
    category:state.category
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getAllCategory:()=>{
        dispatch(actions.fetchAllCategory());
      }
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);
