import React, { Component } from 'react';
import{connect} from 'react-redux';
import ProductsComponent from '../Components/Products.Component';
import * as actions from '../Actions/index';


const mapStateToProps = (state) => {
  return{
    products:state.product.products
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getAllProduct:()=>{
        dispatch(actions.getAllProduct());
      }
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsComponent);
