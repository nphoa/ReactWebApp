import React, { Component } from "react";
import BannerImage from "../Pages/Partial/Client/BannerImage";
import DealProductsComponent from "../Components/Deal_Products.Component";
import LatestProductsComponent from "../Components/Latest_Products.Component";
import * as $ from "jquery";
import ReloadLibrary from '../Components/ReloadLibrary.Component';
class HomeComponent extends Component {
  componentWillMount() {
    //this.reloadLibary();
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        {/* HOME */}
        <BannerImage />
        <ReloadLibrary/>
        {/* /HOME */}
        {/* section */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">{/* <ProductsContainer/> */}</div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /section */}
        {/* section san pham giam gia */}
        <DealProductsComponent />
        {/* /section */}
        {/* section san pham moi nhat */}
        <LatestProductsComponent />
        {/* /section */}
        {/* FOOTER */}
      </div>
    );
  }
}

export default HomeComponent;
