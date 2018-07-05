import React, { Component } from "react";
import currency from "currency.js";
import {Link} from 'react-router-dom';
export default class CartDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sum:0
    }
  }
  handleChangeQuantity = (cart,e) => {
    console.log(e.target.value);
    this.props.updateQuantityProductFromCart(cart,e.target.value);
  }

  sumCart = () => {
    let sum = 0;
    this.props.carts.forEach(element => {
        console.log(element);
        sum += (element.product.product_price_base * element.quantity);
    });
    return currency(sum,{ formatWithSymbol: true }).format();
    
  }
  showListCart = lstCart => {
    let result = null;
    result = lstCart.map((cart, index) => {
      return (
        <tr key={index}>
        <td className="thumb">
          <img src={cart.product.product_image}  />
        </td>
        <td className="details">
          <a href="#">{cart.product.product_name}</a>
          <ul>
            <li>
              <p>Product code: {cart.product.product_code}</p>
            </li>
          </ul>
        </td>
        <td className="price text-center">
          <strong>{ currency(cart.product.product_price_base,{ formatWithSymbol: true }).format()}</strong>
        </td>
        <td className="qty text-center">
          <input className="input" type="number" defaultValue={cart.quantity}  onChange={(e)=>this.handleChangeQuantity(cart,e)}/>
        </td>
        <td className="total text-center">
          <strong className="primary-color">{currency((cart.product.product_price_base * cart.quantity),{ formatWithSymbol: true }).format()}</strong>
        </td>
        <td className="text-right">
          <button className="main-btn icon-btn">
            <i className="fa fa-close" />
          </button>
        </td>
      </tr>
     
      );
    });
    return result;
  };
  render() {
    return (
        <div className="section">
        {/* container */}
            <div className="container">
                {/* row */}
                <div className="row">
                    {/*  Cart Details */}
                    <div className="product product-details clearfix">
                    <div className="col-md-12">
                    <div className="order-summary clearfix">
                      <div className="section-title">
                        <h3 className="title">Order Review</h3>
                      </div>
                      <table className="shopping-cart-table table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th />
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Total</th>
                            <th className="text-right" />
                          </tr>
                        </thead>
                        <tbody>
                            {this.showListCart(this.props.carts)}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th className="empty" colSpan={3} />
                            <th>SUBTOTAL</th>
                            <th colSpan={2} className="sub-total">
                            {this.sumCart()}
                            </th>
                          </tr>
                          <tr>
                            <th className="empty" colSpan={3} />
                            <th>SHIPING</th>
                            <td colSpan={2}>Free Shipping</td>
                          </tr>
                          <tr>
                            <th className="empty" colSpan={3} />
                            <th>TOTAL</th>
                            <th colSpan={2} className="total">
                              {this.sumCart()}
                            </th>
                          </tr>
                        </tfoot>
                      </table>
                      <div className="pull-right">
                        <Link to="/checkout"className="primary-btn">==> Go to check out</Link>
                      </div>
                    </div>
                  </div>

                    </div>
                </div>
            </div>
        </div>



     
    );
  }
}
