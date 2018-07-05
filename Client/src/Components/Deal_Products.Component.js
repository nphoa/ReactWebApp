import React, { Component } from "react";
import { Link } from "react-router-dom";
class DealProductsComponent extends Component {

  render() {
    return (
        <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* section-title */}
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Deals Of The Day</h2>
                <div className="pull-right">
                  <div className="product-slick-dots-1 custom-dots" />
                </div>
              </div>
            </div>
            {/* /section-title */}
            {/* banner */}
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="banner banner-2">
                <img src="Client/img/banner14.jpg" />
                <div className="banner-caption">
                  <h2 className="white-color">NEW<br />COLLECTION</h2>
                  <button className="primary-btn">Shop Now</button>
                </div>
              </div>
            </div>
            {/* /banner */}
            {/* Product Slick */}
            <div className="col-md-9 col-sm-6 col-xs-6">
              <div className="row">
                <div id="product-slick-1" className="product-slick">
                  {/* Product Single */}
                  <div className="product product-single">
                    <div className="product-thumb">
                      <div className="product-label">
                        <span>New</span>
                        <span className="sale">-20%</span>
                      </div>
                      <ul className="product-countdown">
                        <li><span>00 H</span></li>
                        <li><span>00 M</span></li>
                        <li><span>00 S</span></li>
                      </ul>
                      <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                      <img src="Client/img/product01.jpg"/>
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /Product Single */}
                  {/* Product Single */}
                  <div className="product product-single">
                    <div className="product-thumb">
                      <div className="product-label">
                        <span className="sale">-20%</span>
                      </div>
                      <ul className="product-countdown">
                        <li><span>00 H</span></li>
                        <li><span>00 M</span></li>
                        <li><span>00 S</span></li>
                      </ul>
                      <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                      <img src="Client/img/product07.jpg"/>
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /Product Single */}
                  {/* Product Single */}
                  <div className="product product-single">
                    <div className="product-thumb">
                      <div className="product-label">
                        <span>New</span>
                        <span className="sale">-20%</span>
                      </div>
                      <ul className="product-countdown">
                        <li><span>00 H</span></li>
                        <li><span>00 M</span></li>
                        <li><span>00 S</span></li>
                      </ul>
                      <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                      <img src="Client/img/product06.jpg" />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /Product Single */}
                  {/* Product Single */}
                  <div className="product product-single">
                    <div className="product-thumb">
                      <div className="product-label">
                        <span>New</span>
                        <span className="sale">-20%</span>
                      </div>
                      <ul className="product-countdown">
                        <li><span>00 H</span></li>
                        <li><span>00 M</span></li>
                        <li><span>00 S</span></li>
                      </ul>
                      <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                      <img src="Client/img/product08.jpg" />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /Product Single */}
                </div>
              </div>
            </div>
            {/* /Product Slick */}
          </div>
          {/* /row */}
          {/* row */}
          <div className="row">
            {/* section title */}
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Deals Of The Day</h2>
                <div className="pull-right">
                  <div className="product-slick-dots-2 custom-dots">
                  </div>
                </div>
              </div>
            </div>
            {/* section title */}
            {/* Product Single */}
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="product product-single product-hot">
                <div className="product-thumb">
                  <div className="product-label">
                    <span className="sale">-20%</span>
                  </div>
                  <ul className="product-countdown">
                    <li><span>00 H</span></li>
                    <li><span>00 M</span></li>
                    <li><span>00 S</span></li>
                  </ul>
                  <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                  <img src="Client/img/product01.jpg"/>
                </div>
                <div className="product-body">
                  <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                  <div className="product-rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-o empty" />
                  </div>
                  <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                  <div className="product-btns">
                    <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                    <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            {/* /Product Single */}
            {/* Product Slick */}
            <div className="col-md-9 col-sm-6 col-xs-6">
              <div className="row">
                <div id="product-slick-2" className="product-slick">
                  {/* Product Single */}
                  <div className="product product-single">
                    <div className="product-thumb">
                      <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                      <img src="Client/img/product06.jpg" />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$32.50</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /Product Single */}
                  {/* Product Single */}
                  <div className="product product-single">
                    <div className="product-thumb">
                      <div className="product-label">
                        <span className="sale">-20%</span>
                      </div>
                      <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                      <img src="Client/img/product05.jpg" />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /Product Single */}
                  {/* Product Single */}
                  <div className="product product-single">
                    <div className="product-thumb">
                      <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                      <img src="Client/img/product04.jpg"/>
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$32.50</h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /Product Single */}
                  {/* Product Single */}
                  <div className="product product-single">
                    <div className="product-thumb">
                      <div className="product-label">
                        <span>New</span>
                        <span className="sale">-20%</span>
                      </div>
                      <button className="main-btn quick-view"><i className="fa fa-search-plus" /> Quick view</button>
                      <img src="Client/img/product03.jpg" />
                    </div>
                    <div className="product-body">
                      <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                      <div className="product-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o empty" />
                      </div>
                      <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                      <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart" /></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange" /></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart" /> Add to Cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /Product Single */}
                </div>
              </div>
            </div>
            {/* /Product Slick */}
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
         
     
    );
  }
}

export default DealProductsComponent;
