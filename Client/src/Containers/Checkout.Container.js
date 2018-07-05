import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import CheckoutComponent from '../Components/Checkout.Component';
const mapStateToProps = (state) => {
  return{
    paymentType:state.paymentType,
    shipmentType:state.shipmentType,
    carts:state.cart
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getAllPaymentType:()=>{
        dispatch(actions.getAllPaymentType());
      },
      getAllShipmentType:()=>{
        dispatch(actions.getAllShipmentType());
      }
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutComponent);
