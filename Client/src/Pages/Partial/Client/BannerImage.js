import React, { Component } from 'react';

class BannerImageClient extends Component {
  render() {
    return (
        <div id="home">
          {/* container */}
          <div className="container">
            {/* home wrap */}
            <div className="home-wrap" style={{marginLeft:0}}>
              {/* home slick */}
              <div id="home-slick">
                {/* banner */}
                <div className="banner banner-1">
                  <img style={{width:'1200px',height:'675px'}} src="Client/img/banner01.jpg" />
                  <div className="banner-caption text-center">
                    <h1>Bags sale</h1>
                    <h3 className="white-color font-weak">Up to 50% Discount</h3>
                    <button className="primary-btn">Shop Now</button>
                  </div>
                </div>
                {/* /banner */}
                {/* banner */}
                <div className="banner banner-1">
                  <img style={{width:'1200px',height:'675px'}} src="Client/img/banner02.jpg" />
                  <div className="banner-caption">
                    <h1 className="primary-color">HOT DEAL<br /><span className="white-color font-weak">Up to 50% OFF</span></h1>
                    <button className="primary-btn">Shop Now</button>
                  </div>
                </div>
                {/* /banner */}
                {/* banner */}
                <div className="banner banner-1">
                  <img style={{width:'1200px',height:'675px'}} src="Client/img/banner03.jpg" />
                  <div className="banner-caption">
                    <h1 className="white-color">New Product <span>Collection</span></h1>
                    <button className="primary-btn">Shop Now</button>
                  </div>
                </div>
                {/* /banner */}
              </div>
              {/* /home slick */}
            </div>
            {/* /home wrap */}
          </div>
          {/* /container */}
        </div>
    );
  }
}

export default BannerImageClient;