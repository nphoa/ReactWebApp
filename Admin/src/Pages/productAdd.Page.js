import React, { Component } from 'react';
import ProductAddContainer from '../Containers/productAdd.Container';

class ProductAddPage extends Component {
  render() {
    return (
       <ProductAddContainer history = {this.props.history} match = {this.props.match}/>
      
   
      
   
    );
  }
}

export default ProductAddPage;
