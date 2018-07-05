import React, { Component } from "react";
import BannerImage from "../Pages/Partial/Client/BannerImage";
import DealProductsComponent from "../Components/Deal_Products.Component";
import LatestProductsComponent from "../Components/Latest_Products.Component";
import * as $ from "jquery";
class HomeComponent extends Component {
  componentWillMount() {
    //this.reloadLibary();
  }
  componentDidMount() {

  }
  reloadLibary() {
    let ele = $(document.getElementsByTagName("script"));
    for (let index = 0; index < ele.length; index++) {
      if (ele[index].getAttribute("src") == "/Client/js/main.js") {
        $(ele[index]).remove();
      }
    }

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/Client/js/main.js";

    document.getElementsByTagName("body")[0].appendChild(script);
  }
  render() {
    return (
      <div>
       
        {/* HOME */}
        <BannerImage />
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
