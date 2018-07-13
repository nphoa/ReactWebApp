import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as urls from '../../API/URL';
import apiCaller from '../../API/apiCaller';
import swal from 'sweetalert';
import UpdateCategoryParentModal from '../Modal/updateCategoryParent.Modal';
import moment from 'moment';
class CategoryChildrenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      idCategoryUpdateParent:0
    };
  
  }
  componentDidMount(){
    if(this.props.categories != null &&  this.props.categories.length == 0){
        this.props.getAllCategory();
    }
  }
  handleShow = (idCategory) => {
    this.state.idCategoryUpdateParent = idCategory
    this.setState({
      idCategoryUpdateParent:this.state.idCategoryUpdateParent,
      show:true
    });
    //console.log(this.state.idCategoryUpdateParent);
  }
  handleClose = () => {
    this.setState({
      show:false
    });
  }
  showListCategoryChildren = (categories) =>{
    let result = null;
    var now = moment();
    
    result = categories.map((item,index)=>{
      let createDate = moment(item.created_at).format('DD-MM-YYYY');
      return (
          <tr  key={index}>
            <th scope="row" style={{width:'6%'}}>{item.category_id}</th>
            <td>{item.category_name}</td>
            <td>{createDate}</td>
            <td style={{width:'30%'}}>
                <Link to={`/category/add/${item.category_parrent_id}/${item.category_id}`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={()=>this.deleteCategory(item.category_id)}  className="btn btn-info hvr-grow-rotate">Delete</button>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={()=>this.handleShow(item.category_id)}  className="btn btn-info hvr-grow-rotate">Update parent</button>
            </td>
          </tr>
      )
    });
    return result;
  }
  getCategoryChildrenOnStore(lstCategory){
        let result = null;
        result = lstCategory.find((item)=>{
            return item.category_id == this.props.match.params.idParent;
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
  showModal = ()=>{
    return(
      (this.state.show) ?
        <UpdateCategoryParentModal 
        show = {this.state.show}
        handleClose = {this.handleClose}
        idCategoryUpdateParent = {this.state.idCategoryUpdateParent} 
        lstCategoryParent = {this.props.categories}
      /> : null

    )
  }
  render() {
    if(this.props.categories.length ==0){
        return(<div>Screen is loading...</div>)
    }
    let categoryParent = this.getCategoryChildrenOnStore(this.props.categories);
    return (
      <div className="panel panel-widget">
        <div className="tables">
          <h4>Danh sách danh mục con của :{categoryParent.category_name}</h4>
          <br/>
          <Link to={`/category/add/${categoryParent.category_id}`} className="btn btn-warning hvr-grow-rotate">Add New</Link>
          <Link to="/category" style={{marginLeft:'10px'}}   className="btn btn-danger hvr-grow-rotate">Back</Link>
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
              {this.showListCategoryChildren(categoryParent.listChild)}
            </tbody>
          </table>
        </div>

        {this.showModal()}
            
      </div>
    );
  }
}

export default CategoryChildrenComponent;
