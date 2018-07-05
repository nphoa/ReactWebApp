import React, { Component } from 'react';

class HeaderClient extends Component {
  render() {
    return (
        <div>
             {/* top Header */}
          <div id="top-header">
          <div className="container">
            <div className="pull-left">
              <span>Welcome to E-shop!</span>
            </div>
          </div>
        </div>
        {/* /top Header */}
        {/* header */}
        <div id="header">
          <div className="container">
            <div className="pull-left">
              {/* Logo */}
              <div className="header-logo">
                <a className="logo" href="#">
                  <img src="Client/img/logo.png" />
                </a>
              </div>
              {/* /Logo */}
              {/* Search */}
              <div className="header-search">
                <form>
                  <input className="input search-input" type="text" placeholder="Enter your keyword" />
                  <select className="input search-categories">
                    <option value={0}>All Categories</option>
                    <option value={1}>Category 01</option>
                    <option value={1}>Category 02</option>
                  </select>
                  <button className="search-btn"><i className="fa fa-search" /></button>
                </form>
              </div>
              {/* /Search */}
            </div>
            <div className="pull-right">
              <ul className="header-btns">
                {/* Account */}
                <li className="header-account dropdown default-dropdown">
                  <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                    <div className="header-btns-icon">
                      <i className="fa fa-user-o" />
                    </div>
                    <strong className="text-uppercase">My Account <i className="fa fa-caret-down" /></strong>
                  </div>
                  <a href="#" className="text-uppercase">Login</a> / <a href="#" className="text-uppercase">Join</a>
                  <ul className="custom-menu">
                    <li><a href="#"><i className="fa fa-user-o" /> My Account</a></li>
                    <li><a href="#"><i className="fa fa-heart-o" /> My Wishlist</a></li>
                    <li><a href="#"><i className="fa fa-exchange" /> Compare</a></li>
                    <li><a href="#"><i className="fa fa-check" /> Checkout</a></li>
                    <li><a href="#"><i className="fa fa-unlock-alt" /> Login</a></li>
                    <li><a href="#"><i className="fa fa-user-plus" /> Create An Account</a></li>
                  </ul>
                </li>
                {/* /Account */}
                {/* Cart */}
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
                        <div className="product product-widget">
                          <div className="product-thumb">
                            <img src="Client/img/thumb-product01.jpg" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                          </div>
                          <button className="cancel-btn"><i className="fa fa-trash" /></button>
                        </div>
                        <div className="product product-widget">
                          <div className="product-thumb">
                            <img src="Client/img/thumb-product01.jpg" />
                          </div>
                          <div className="product-body">
                            <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                          </div>
                          <button className="cancel-btn"><i className="fa fa-trash" /></button>
                        </div>
                      </div>
                      <div className="shopping-cart-btns">
                        <button className="main-btn">View Cart</button>
                        <button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right" /></button>
                      </div>
                    </div>
                  </div>
                </li>
                {/* /Cart */}
                {/* Mobile nav toggle*/}
                <li className="nav-toggle">
                  <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars" /></button>
                </li>
                {/* / Mobile nav toggle */}
              </ul>
            </div>
          </div>
          {/* header */}
        </div>
        {/* container */}
        </div>
    );
  }
}

export default HeaderClient;
