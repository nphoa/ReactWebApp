import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import ProductDetailComponent from '../Components/ProductDetail.Component';
const mapStateToProps = (state) => {
  return{
    productDetail:state.product.product_detail
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getProductById:(id)=>{
          dispatch(actions.getProductById(id));
      },
      addProductToCart:(product,quantity)=>{
        dispatch(actions.addProductToCart(product,quantity));
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailComponent);
