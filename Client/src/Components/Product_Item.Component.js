import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
class ProductItemComponent extends Component {
  submitAddToCart = event => {
    event.preventDefault();
    this.props.addProductToCart(
      this.props.product,
      1
    );
    swal("Xác nhận!", "Thêm vào giỏ hàng thành công!", "success");
  };
  render() {
    return (
     
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="product product-single">
              <div className="product-thumb">
                <div className="product-label">
                  <span>New</span>
                  <span className="sale">-20%</span>
                </div>
                <div className="main-btn quick-view">
                  <i className="fa fa-search-plus" />
                  <Link to={`/product/getProductById/${this.props.product.product_id}`}>Quick view</Link>
                </div>
                <img src={this.props.product.product_image}  style={{width:270,height:300}}/>
              </div>
              <div className="product-body">
                <h3 className="product-price">
                   ${this.props.product.product_price_base} 
                </h3>
                <div className="product-rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-o empty" />
                </div>
                <h2 className="product-name">
                  <a href="#">{this.props.product.product_name} </a>
                </h2>
                <form onSubmit={this.submitAddToCart}>
                <div className="product-btns">
                  <button className="main-btn icon-btn">
                    <i className="fa fa-heart" />
                  </button>
                  <button className="main-btn icon-btn">
                    <i className="fa fa-exchange" />
                  </button>
                  
                    <button className="primary-btn add-to-cart">
                      <i className="fa fa-shopping-cart" /> Add to Cart
                    </button>
                 
                 
                </div>
                </form>
              </div>
            </div>
          </div>
     
    );
  }
}

export default ProductItemComponent;
