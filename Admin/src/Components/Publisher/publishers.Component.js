import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as urls from '../../API/URL';
import apiCaller from '../../API/apiCaller';
import swal from 'sweetalert';
import moment from 'moment';
class PublishersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };

  }


  componentDidMount(){
      this.props.getAllPublisher();
  }
  showListPublisher = (publishers) =>{
    let result = null;
    result = publishers.map((item,index)=>{
      let createDate = moment(item.created_at).format('DD-MM-YYYY');
      return (
          <tr key={index}>
            <th scope="row" style={{width:'6%'}}>{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{createDate}</td>
            <td style={{width:'30%'}}>
                <Link to={`/publisher/add/${item.id}`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={() => this.deleteCategory(item.category_id)} className="btn btn-info hvr-grow-rotate">Delete</button>
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
          <h4>Danh sách nhà xuất bản:</h4>
          <br/>
          <Link to="/piblisher/add"   className="btn btn-primary hvr-grow-rotate">Add New</Link>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Description</th>
                <th>Created at</th>
                <th>Custom</th>
              </tr>
            </thead>
            <tbody>
              {this.showListPublisher(this.props.publishers)}
            </tbody>
          </table>
        </div>

       
      </div>
    );
  }
}

export default PublishersComponent;
