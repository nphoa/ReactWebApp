import React, { Component } from "react";
import ProductDetailContainer from '../Containers/ProductDetail.Container';
import * as $ from "jquery";
class ProductDetailPage extends Component {
  constructor(props){
      super(props);
  }

  componentWillMount() {
    // let ele = $(document.getElementsByTagName("script"));
    // for (let index = 0; index < ele.length; index++) {
    //   if (ele[index].getAttribute("src") == "/Client/js/main.js") {
    //     $(ele[index]).remove();
    //   }
    // }

    // var script = document.createElement('script');
    // script.src = "/Client/js/main.js";
    // document.getElementsByTagName('body')[0].appendChild(script);
  }
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

       <ProductDetailContainer {...this.props}/>

      </div>
    );
  }
}

export default ProductDetailPage;
