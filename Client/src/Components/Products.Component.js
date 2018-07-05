import React, { Component } from "react";
import ProductItemComponent from "../Components/Product_Item.Component";
import { Link } from "react-router-dom";
class ProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCategory: 0
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
    this.props.getProductsByCategory(this.props.match.params.idCategory);
  }
  componentDidUpdate(nextProps){
    if (nextProps.location !== this.props.location) {
      this.props.getProductsByCategory(this.props.match.params.idCategory);
    }
  }


  showListItem = products => {
    var result = null;
    if (products && products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItemComponent product={product} key={index} addProductToCart = {this.props.addProductToCart} />;
      });
    }
    return result;
  };
  render() {
    console.log("render");
    return (
      <div id="store">
        {/* row */}
        <div className="row">
          {/* Product Single */}
          {this.showListItem(this.props.product)}
          {/* /Product Single */}
          <div className="clearfix visible-sm visible-xs" />
        </div>
        {/* /row */}
      </div>
    );
  }
}

export default ProductsComponent;
