import React, { Component } from 'react';
import{connect} from 'react-redux';
import CartDetailComponent from '../Components/CartDetail.Component';
import * as actions from '../Actions/index';
const mapStateToProps = (state) => {
  return{
    carts:state.cart
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        updateQuantityProductFromCart:(cart,quantity)=>{
            dispatch(actions.updateQuantityProductFromCart(cart,quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDetailComponent);
