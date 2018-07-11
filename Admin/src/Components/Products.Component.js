import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as urls from '../API/URL';
import apiCaller from '../API/apiCaller';
import swal from 'sweetalert';
class ProductsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.getAllProduct();
  }
  showListProduct = (products) =>{
    let result = null;
    result = products.map((item,index)=>{
      return (
          <tr  key={index}>
            <th scope="row" style={{width:'6%'}}>{item.product_id}</th>
            <td>
              <img style={{width:'50px',height:'50px'}} src={item.product_image}  />
            </td>
            <td>{item.product_code}</td>
            <td>{item.product_name}</td>
            <td>{item.product_price_base}</td>
            <td style={{width:'30%'}}>
                <Link to={`/product/add/${item.product_id}`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={() => this.deleteProduct(item.product_id)} className="btn btn-info hvr-grow-rotate">Delete</button>
                <Link to={`/product/addImageDetailByProduct/${item.product_id}`} className="btn btn-warning hvr-grow-rotate">Add image</Link>
            </td>
          </tr>
      )
    });
    return result;
  }
  deleteProduct = (idProduct) => {
    swal({
      title: "Confirm !",
      text: "Confirm delete this product ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        apiCaller(`${urls.DELETE_PRODUCT}/?idProduct=${idProduct}`,'GET').then(res=>{
          if(res.data.data){
            this.props.getAllProduct();
          }
        });
      } else {
        swal("Cancel !");
      }
    });
  }
  render() {
    return (
      <div className="panel panel-widget">
        <div className="tables">
          <h4>Danh sách sản phẩm:</h4>
          <br/>
          <Link to="/product/add" onClick={()=>this.props.resetProduct()}  className="btn btn-primary hvr-grow-rotate">Add New</Link>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Product image</th>
                <th>Product code</th>
                <th>Product name</th>
                <th>Product price</th>
                <th>Custom</th>
              </tr>
            </thead>
            <tbody>
              {this.showListProduct(this.props.products)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductsComponent;
