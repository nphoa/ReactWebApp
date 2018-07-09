import React, { Component } from "react";
import * as $ from "jquery";
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
class ProductDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityCart: 0
    };
  }
  componentWillMount() {

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
  componentDidMount() {
    console.log('didmount');
    this.props.getProductById(this.props.match.params.idProduct);
    // callApi(`${urls.GET_PRODUCT_BY_ID}/?idProduct=${this.props.match.params.idProduct}`,'GET').then((res)=>{
    //   this.setState({
    //       isLoaded: true,
    //       product: res.data.data[0]
    //     });
    // });
  }


  handleChange = event => {
    this.setState({
      quantityCart: event.target.value
    });
  };
  submitAddToCart = event => {
    event.preventDefault();
    this.props.addProductToCart(
      this.props.productDetail,
      this.state.quantityCart
    );
  };
  showListImage_Detail = lstImage => {
   
    let result = null;
    if (lstImage != null && lstImage.length > 0) {
      result = lstImage.map((item, index) => {
        if(item.image_type==='Detail'){
          return (
            <div className="product-view" key={index}>
              <img style={{width:'100px',height:'200px'}} src={item.image_name}  />
            </div>
          );
        }
      });
      
    }
    return result;
  };
  showListImage_Main = lstImage => {
    
    let result = null;
    if (lstImage != null && lstImage.length > 0) {
      result = lstImage.map((item, index) => {
        if(item.image_type === 'Detail'){
          return (
            <div className="product-view" key={index}>
              <img style={{width:'600px',height:'700px'}} src={item.image_name} />
            </div>
          );
        }
      });
      
    }
    return result;
  };
 
  render() {
    const {productDetail} = this.props;    
    console.log(productDetail);
    if(productDetail == null || productDetail == undefined || Object.keys(productDetail).length === 0){
      return <div>Data is loaded</div>
    }else{
      this.reloadLibary();
      return (
        <div>
          <div className="section">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/*  Product Details */}
                <div className="product product-details clearfix">
                  <div className="col-md-6">
                    <div id="product-main-view">
                     {this.showListImage_Main(productDetail.productImage)}
                    </div>
  
                    <div id="product-view">
                      {this.showListImage_Detail(productDetail.productImage)}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-body">
                      <div className="product-label">
                        <span>New</span>
                        <span className="sale">-20%</span>
                      </div>
                      <h2 className="product-name">
                        {productDetail.product_name}
                      </h2>
                      <h3 className="product-price">
                        ${productDetail.product_price_sale}{" "}
                        <del className="product-old-price">
                          ${productDetail.product_price_base}
                        </del>
                      </h3>
                      <div>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                        <a href="#">3 Review(s) / Add Review</a>
                      </div>
                      <p>
                        <strong>Availability:</strong> In Stock
                      </p>
                      <p>
                        <strong>Brand:</strong> E-SHOP
                      </p>
                      <p>{productDetail.product_content}</p>
  
                      <div className="product-btns">
                        <form onSubmit={this.submitAddToCart}>
                          <div className="qty-input">
                            <span className="text-uppercase">QTY: </span>
                            <input
                              className="input"
                              type="number"
                              value={this.state.quantityCart}
                              onChange={this.handleChange}
                            />
                          </div>
                          <button
                            type="submit"
                            value="submit"
                            className="primary-btn add-to-cart"
                          >
                            <i className="fa fa-shopping-cart" /> Add to Cart
                          </button>
                        </form>
                        <div className="pull-right">
                          <button className="main-btn icon-btn">
                            <i className="fa fa-heart" />
                          </button>
                          <button className="main-btn icon-btn">
                            <i className="fa fa-exchange" />
                          </button>
                          <button className="main-btn icon-btn">
                            <i className="fa fa-share-alt" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="product-tab">
                      <ul className="tab-nav">
                        <li className="active">
                          <a data-toggle="tab" href="#tab1" aria-expanded="true">
                            Description
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#tab2" aria-expanded="false">
                            Details
                          </a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#tab3" aria-expanded="false">
                            Reviews (3)
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="tab1" className="tab-pane fade active in">
                          <p>{productDetail.product_detail}</p>
                        </div>
                        <div id="tab2" className="tab-pane fade">
                          <table
                            className="table table-bordered"
                            style={{ width: "50%" }}
                          >
                            <tbody>
                              <tr>
                                <td style={trStyle}>Công ty phát hành</td>
                                <td>
                                  {productDetail.release_company}
                                </td>
                              </tr>
                              <tr>
                                <td style={trStyle}>Nhà xuất bản</td>
                                <td>{productDetail.publisher}</td>
                              </tr>
                              <tr>
                                <td style={trStyle}>Tác giả</td>
                                <td>{productDetail.author}</td>
                              </tr>
                              <tr>
                                <td style={trStyle}>Kích thước</td>
                                <td>{productDetail.size}</td>
                              </tr>
                              <tr>
                                <td style={trStyle}>Loại bìa</td>
                                <td>{productDetail.covor_type}</td>
                              </tr>
                              <tr>
                                <td style={trStyle}>Số trang</td>
                                <td>{productDetail.page_number}</td>
                              </tr>
                              <tr>
                                <td style={trStyle}>Ngày sản xuất</td>
                                <td>{productDetail.release_date}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div id="tab3" className="tab-pane fade">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="product-reviews">
                                <div className="single-review">
                                  <div className="review-heading">
                                    <div>
                                      <a href="#">
                                        <i className="fa fa-user-o" /> nphoa
                                      </a>
                                    </div>
                                    <div>
                                      <a href="#">
                                        <i className="fa fa-clock-o" /> 27 DEC
                                        2017 / 8:0 PM
                                      </a>
                                    </div>
                                    <div className="review-rating pull-right">
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star" />
                                      <i className="fa fa-star-o empty" />
                                    </div>
                                  </div>
                                  <div className="review-body">
                                    <p>This is a book very nice</p>
                                  </div>
                                </div>
                                <ul className="reviews-pages">
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
                            <div className="col-md-6">
                              <h4 className="text-uppercase">
                                Write Your Review
                              </h4>
                              <p>Your email address will not be published.</p>
                              <form className="review-form">
                                <div className="form-group">
                                  <input
                                    className="input"
                                    type="text"
                                    placeholder="Your Name"
                                  />
                                </div>
                                <div className="form-group">
                                  <input
                                    className="input"
                                    type="email"
                                    placeholder="Email Address"
                                  />
                                </div>
                                <div className="form-group">
                                  <textarea
                                    className="input"
                                    placeholder="Your review"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="form-group">
                                  <div className="input-rating">
                                    <strong className="text-uppercase">
                                      Your Rating:{" "}
                                    </strong>
                                    <div className="stars">
                                      <input
                                        type="radio"
                                        id="star5"
                                        name="rating"
                                        defaultValue={5}
                                      />
                                      <label htmlFor="star5" />
                                      <input
                                        type="radio"
                                        id="star4"
                                        name="rating"
                                        defaultValue={4}
                                      />
                                      <label htmlFor="star4" />
                                      <input
                                        type="radio"
                                        id="star3"
                                        name="rating"
                                        defaultValue={3}
                                      />
                                      <label htmlFor="star3" />
                                      <input
                                        type="radio"
                                        id="star2"
                                        name="rating"
                                        defaultValue={2}
                                      />
                                      <label htmlFor="star2" />
                                      <input
                                        type="radio"
                                        id="star1"
                                        name="rating"
                                        defaultValue={1}
                                      />
                                      <label htmlFor="star1" />
                                    </div>
                                  </div>
                                </div>
                                <button className="primary-btn">Submit</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Product Details */}
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
        </div>
      );
    }
     
    
    
  }
}

export default ProductDetailComponent;

var trStyle = {
  backgroundColor: "#EEEEEE",
  fontSize: "boid"
};
