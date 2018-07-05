import React, { Component } from "react";
import ProductItemComponent from "../Components/Product_Item.Component";
import ProductContainer from "../Containers/Products.Container";

class ProductsComponent extends Component {
  constructor(props){
      super(props);
      this.state = {
         
      }
  }

  showListItem = products => {
    var result = null;
    if (products && products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItemComponent product={product} key={index}/>;
      });
    }
    return result;
  };
  render() {
    return (
      <div>
   
 
        {/* BREADCRUMB */}
        <div id="breadcrumb">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Products</li>
            </ul>
          </div>
        </div>
        {/* /BREADCRUMB */}
        {/* section */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* ASIDE */}
              <div id="aside" className="col-md-3">
                {/* aside widget */}
                <div className="aside">
                  <h3 className="aside-title">Filter by Price</h3>
                  <div id="price-slider" />
                </div>
                {/* aside widget */}
                {/* aside widget */}
                <div className="aside">
                  <h3 className="aside-title">Filter by Brand</h3>
                  <ul className="list-links">
                    <li>
                      <a href="#">Nike</a>
                    </li>
                    <li>
                      <a href="#">Adidas</a>
                    </li>
                    <li>
                      <a href="#">Polo</a>
                    </li>
                    <li>
                      <a href="#">Lacost</a>
                    </li>
                  </ul>
                </div>
                {/* /aside widget */}
                {/* aside widget */}
                <div className="aside">
                  <h3 className="aside-title">Filter by Gender</h3>
                  <ul className="list-links">
                    <li className="active">
                      <a href="#">Men</a>
                    </li>
                    <li>
                      <a href="#">Women</a>
                    </li>
                  </ul>
                </div>
                {/* /aside widget */}
                {/* aside widget */}
                <div className="aside">
                  <h3 className="aside-title">Top Rated Product</h3>
                  {/* widget product */}
                  <div className="product product-widget">
                    <div className="product-thumb">
                      <img src="./img/thumb-product01.jpg" alt />
                    </div>
                    <div className="product-body">
                      <h2 className="product-name">
                        <a href="#">Product Name Goes Here</a>
                      </h2>
                      <h3 className="product-price">
                        $32.50 <del className="product-old-price">$45.00</del>
                      </h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                    </div>
                  </div>
                  {/* /widget product */}
                  {/* widget product */}
                  <div className="product product-widget">
                    <div className="product-thumb">
                      <img src="./img/thumb-product01.jpg" alt />
                    </div>
                    <div className="product-body">
                      <h2 className="product-name">
                        <a href="#">Product Name Goes Here</a>
                      </h2>
                      <h3 className="product-price">$32.50</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                    </div>
                  </div>
                  {/* /widget product */}
                </div>
                {/* /aside widget */}
              </div>
              {/* /ASIDE */}
              {/* MAIN */}
              <div id="main" className="col-md-9">
                {/* store top filter */}
                <div className="store-filter clearfix">
                  <div className="pull-left">
                    <div className="row-filter">
                      <a href="#">
                        <i className="fa fa-th-large" />
                      </a>
                      <a href="#" className="active">
                        <i className="fa fa-bars" />
                      </a>
                    </div>
                    <div className="sort-filter">
                      <span className="text-uppercase">Sort By:</span>
                      <select className="input">
                        <option value={0}>Position</option>
                        <option value={0}>Price</option>
                        <option value={0}>Rating</option>
                      </select>
                      <a href="#" className="main-btn icon-btn">
                        <i className="fa fa-arrow-down" />
                      </a>
                    </div>
                  </div>
                  <div className="pull-right">
                    <div className="page-filter">
                      <span className="text-uppercase">Show:</span>
                      <select className="input">
                        <option value={0}>10</option>
                        <option value={1}>20</option>
                        <option value={2}>30</option>
                      </select>
                    </div>
                    <ul className="store-pages">
                      <li>
                        <span className="text-uppercase">Page:</span>
                      </li>
                      <li className="active">1</li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /store top filter */}
                {/* STORE */}
                <ProductContainer {...this.props}/>
                {/* /STORE */}
                {/* store bottom filter */}
                <div className="store-filter clearfix">
                  <div className="pull-left">
                    <div className="row-filter">
                      <a href="#">
                        <i className="fa fa-th-large" />
                      </a>
                      <a href="#" className="active">
                        <i className="fa fa-bars" />
                      </a>
                    </div>
                    <div className="sort-filter">
                      <span className="text-uppercase">Sort By:</span>
                      <select className="input">
                        <option value={0}>Position</option>
                        <option value={0}>Price</option>
                        <option value={0}>Rating</option>
                      </select>
                      <a href="#" className="main-btn icon-btn">
                        <i className="fa fa-arrow-down" />
                      </a>
                    </div>
                  </div>
                  <div className="pull-right">
                    <div className="page-filter">
                      <span className="text-uppercase">Show:</span>
                      <select className="input">
                        <option value={0}>10</option>
                        <option value={1}>20</option>
                        <option value={2}>30</option>
                      </select>
                    </div>
                    <ul className="store-pages">
                      <li>
                        <span className="text-uppercase">Page:</span>
                      </li>
                      <li className="active">1</li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-caret-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /store bottom filter */}
              </div>
              {/* /MAIN */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /section */}
        {/* FOOTER */}
        <footer id="footer" className="section section-grey">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* footer widget */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  {/* footer logo */}
                  <div className="footer-logo">
                    <a className="logo" href="#">
                      <img src="./img/logo.png" alt />
                    </a>
                  </div>
                  {/* /footer logo */}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                  {/* footer social */}
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                  </ul>
                  {/* /footer social */}
                </div>
              </div>
              {/* /footer widget */}
              {/* footer widget */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">My Account</h3>
                  <ul className="list-links">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Compare</a>
                    </li>
                    <li>
                      <a href="#">Checkout</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /footer widget */}
              <div className="clearfix visible-sm visible-xs" />
              {/* footer widget */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Customer Service</h3>
                  <ul className="list-links">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Shiping &amp; Return</a>
                    </li>
                    <li>
                      <a href="#">Shiping Guide</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /footer widget */}
              {/* footer subscribe */}
              <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="footer">
                  <h3 className="footer-header">Stay Connected</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <form>
                    <div className="form-group">
                      <input
                        className="input"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <button className="primary-btn">Join Newslatter</button>
                  </form>
                </div>
              </div>
              {/* /footer subscribe */}
            </div>
            {/* /row */}
            <hr />
            {/* row */}
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                {/* footer copyright */}
                <div className="footer-copyright">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </div>
                {/* /footer copyright */}
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </footer>
        {/* /FOOTER */}
      </div>
    );
  }
}

export default ProductsComponent;
