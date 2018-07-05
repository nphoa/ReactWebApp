import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import ProductsComponent from '../Components/Products.Component';
const mapStateToProps = (state) => {
  return{
    product:state.product.product_list
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getProductsByCategory:(id)=>{
          dispatch(actions.getProductByCategory(id));
      },
      addProductToCart:(product,quantity)=>{
        dispatch(actions.addProductToCart(product,quantity));
      }
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsComponent);
