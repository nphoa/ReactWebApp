import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as urls from '../../API/URL';
import apiCaller from '../../API/apiCaller';
import swal from 'sweetalert';
import moment from 'moment';
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
    let result = null;
    result = categories.map((item,index)=>{
      let createDate = moment(item.created_at).format('DD-MM-YYYY');
      return (
          <tr key={index}>
            <th scope="row" style={{width:'6%'}}>{index + 1}</th>
            <td>
              <Link to={`/category/children/${item.category_id}`}>{item.category_name}</Link>
            </td>
            <td>{createDate}</td>
            <td style={{width:'30%'}}>
                <Link to={`/category/add/0/${item.category_id}`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={() => this.deleteCategory(item.category_id)} className="btn btn-info hvr-grow-rotate">Delete</button>
                <Link to={`/category/add/${item.category_id}`} className="btn btn-warning hvr-grow-rotate">Add category detail</Link>
            </td>
          </tr>
      )
    });
    return result;
  }
  deleteCategory = (idCategory) => {
    swal({
      title: "Confirm !",
      text: "Confirm delete this category ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        apiCaller(`${urls.DELETE_CATEGORY}/?idCategory=${idCategory}`,'GET').then(res=>{
          if(res.data.data){
            this.props.getAllCategory();
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
          <Link to="/category/add/0"   className="btn btn-primary hvr-grow-rotate">Add New</Link>
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

       
      </div>
    );
  }
}

export default CategoryComponent;
