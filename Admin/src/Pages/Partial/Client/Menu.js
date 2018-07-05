import React, { Component } from 'react';

class MenuClient extends Component {
  render() {
    return (
        <div id="navigation">
        {/* container */}
        <div className="container">
          <div id="responsive-nav">
            {/* category nav */}
            <div className="category-nav">
              <span className="category-header">Categories <i className="fa fa-list" /></span>
              <ul className="category-list">
                <li className="dropdown side-dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women’s Clothing <i className="fa fa-angle-right" /></a>
                  <div className="custom-menu">
                    <div className="row">
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3></li>
                          <li><a href="#">Women’s Clothing</a></li>
                          <li><a href="#">Men’s Clothing</a></li>
                          <li><a href="#">Phones &amp; Accessories</a></li>
                          <li><a href="#">Jewelry &amp; Watches</a></li>
                          <li><a href="#">Bags &amp; Shoes</a></li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                      </div>
                      <div className="col-md-4">
                        <ul className="list-links">
                          <li>
                            <h3 className="list-links-title">Categories</h3></li>
                          <li><a href="#">Women’s Clothing</a></li>
                          <li><a href="#">Men’s Clothing</a></li>
                          <li><a href="#">Phones &amp; Accessories</a></li>
                          <li><a href="#">Jewelry &amp; Watches</a></li>
                          <li><a href="#">Bags &amp; Shoes</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row hidden-sm hidden-xs">
                      <div className="col-md-12">
                        <hr />
                        <a className="banner banner-1" href="#">
                          <img src="Client/img/banner05.jpg"/>
                          <div className="banner-caption text-center">
                            <h2 className="white-color">NEW COLLECTION</h2>
                            <h3 className="white-color font-weak">HOT DEAL</h3>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="#">Bags &amp; Shoes</a></li>
                <li><a href="#">View All</a></li>
              </ul>
            </div>
            {/* /category nav */}
            {/* menu nav */}
            <div className="menu-nav">
              <span className="menu-header">Menu <i className="fa fa-bars" /></span>
              <ul className="menu-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Info</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            {/* menu nav */}
          </div>
        </div>
        {/* /container */}
      </div>
    );
  }
}

export default MenuClient;