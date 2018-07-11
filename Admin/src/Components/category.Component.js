import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as urls from '../API/URL';
import apiCaller from '../API/apiCaller';
import swal from 'sweetalert';
import CategoryChildrenModal from '../Components/Modal/categoryChildren.Modal';
class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show:false,
        idParentCategory:0
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleClose(){
    this.setState({ show: false });
  }
  handleShow(idParent){
    this.setState({ 
        show: true,
        idParentCategory: idParent
    });
  }
  componentDidMount(){
    this.props.getAllCategory();
  }
  showListCategory = (categories) =>{
    console.log(categories);
    let result = null;
    result = categories.map((item,index)=>{
      return (
          <tr  key={index}>
            <th scope="row" style={{width:'6%'}}>{item.category_id}</th>
            <td><a href="#" onClick={()=>this.handleShow(item.category_id)}>{item.category_name}</a></td>
            <td>{item.created_at}</td>
            <td style={{width:'30%'}}>
                <Link to={`/product/add/`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={() => this.deleteProduct(item.product_id)} className="btn btn-info hvr-grow-rotate">Delete</button>
                <Link to={`/product/addImageDetailByProduct/`} className="btn btn-warning hvr-grow-rotate">Add category detail</Link>
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
          <h4>Danh sách danh mục:</h4>
          <br/>
          <Link to="/category/add"   className="btn btn-primary hvr-grow-rotate">Add New</Link>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Category name</th>
                <th>Created at</th>
                <th>Custom</th>
              </tr>
            </thead>
            <tbody>
              {this.showListCategory(this.props.categories)}
            </tbody>
          </table>
        </div>

       <CategoryChildrenModal show = {this.state.show} handleClose = {this.handleClose} idParentCategory = {this.state.idParentCategory}/>
      </div>
    );
  }
}

export default CategoryComponent;
