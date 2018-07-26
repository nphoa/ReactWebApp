import React, { Component } from 'react';
import ProductsContainer from '../Containers/products.Container';

class ProductPage extends Component {
  componentWillMount(){
    console.log(this.props);
  }
  render() {
    return (
       <ProductsContainer/>
      
   
      
   
    );
  }
}

export default ProductPage;
