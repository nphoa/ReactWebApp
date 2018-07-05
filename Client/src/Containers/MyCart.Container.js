import React, { Component } from 'react';
import{connect} from 'react-redux';
import MyCartComponent from '../Components/MyCart.Component';
import * as actions from '../Actions/index';
const mapStateToProps = (state) => {
  return{
    carts:state.cart
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      removeProductFromCart:(product)=>{
        dispatch(actions.removeProductFromCart(product))
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCartComponent);
