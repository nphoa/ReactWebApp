import React, { Component } from "react"; 
import currency from 'currency.js';
import {Link} from 'react-router-dom';
export default class MyCartComponent extends Component {
constructor(props){
    super(props);
}
handleClick(cart){
  console.log(cart);
  this.props.removeProductFromCart(cart.product);
}
money = value => currency(value, { formatWithSymbol: true });
showListCart = (lstCart) => {
    let result = null;
    result = lstCart.map((cart,index)=>{
        return(
            <div className="product product-widget" key={index}>
            <div className="product-thumb">
              <img src={cart.product.product_image} />
            </div>
            <div className="product-body">
              <h3 className="product-price">{ currency(cart.product.product_price_base,{ formatWithSymbol: true }).format()} <span className="qty">x{cart.quantity}</span></h3>
              <h2 className="product-name"><a href="#">{cart.product.product_name}</a></h2>
            </div>
            <button key={index} className="cancel-btn" onClick={(e)=>this.handleClick(cart,e)}><i className="fa fa-trash"/></button>
          </div>
        )
    });
    return result;
}
render() {
    return (
        <li className="header-cart dropdown default-dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
          <div className="header-btns-icon">
            <i className="fa fa-shopping-cart" />
            <span className="qty">3</span>
          </div>
          <strong className="text-uppercase">My Cart:</strong>
          <br />
          <span>35.20$</span>
        </a>
        <div className="custom-menu">
          <div id="shopping-cart">
            <div className="shopping-cart-list">
                {this.showListCart(this.props.carts)}
             
            </div>
            <div className="shopping-cart-btns">
              <Link to="/cart_detail" className="main-btn">View Cart</Link>
              <Link to="/checkout" className="primary-btn"><i className="fa fa-arrow-circle-right" />View Cart</Link>
            </div>
          </div>
        </div>
      </li>
    )
  }
   
  
   


}