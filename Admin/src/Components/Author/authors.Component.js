import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as urls from '../../API/URL';
import apiCaller from '../../API/apiCaller';
import swal from 'sweetalert';
import moment from 'moment';
class AuthorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };

  }


  componentDidMount(){
      this.props.getAllAuthor();
  }
  showListAuthor = (authors) =>{
    let result = null;
    result = authors.map((item,index)=>{
      let createDate = moment(item.created_at).format('DD-MM-YYYY');
      return (
          <tr key={index}>
            <th scope="row" style={{width:'6%'}}>{index + 1}</th>
            <td style={{width:'30%'}}  >{item.name}</td>
            <td style={{width:'38%'}}>{item.description}</td>
            <td style={{width:'10%'}}>{createDate}</td>
            <td style={{width:'22%'}}>
                <Link to={`/author/add/${item.id}`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={() => this.deleteAuthor(item.id)} className="btn btn-info hvr-grow-rotate">Delete</button>
            </td>
          </tr>
      )
    });
    return result;
  }
  deleteAuthor = (idAuthor) => {
    swal({
      title: "Confirm !",
      text: "Confirm delete this author ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        apiCaller(`${urls.DELETE_AUTHOR}/?idAuthor=${idAuthor}`,'GET').then(res=>{
          if(res.data.data){
            this.props.getAllAuthor();
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
          <h4>Danh sách tác giả:</h4>
          <br/>
          <Link to="/author/add" onClick={()=>this.props.resetAuthor}   className="btn btn-primary hvr-grow-rotate">Add New</Link>
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
              {this.showListAuthor(this.props.authors)}
            </tbody>
          </table>
        </div>

       
      </div>
    );
  }
}

export default AuthorComponent;
