import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as urls from '../../API/URL';
import apiCaller from '../../API/apiCaller';
import swal from 'sweetalert';
import moment from 'moment';
class ReleaseCompanysComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };

  }


  componentDidMount(){
      this.props.getAllReleaseCompany();
  }
  showListReleaseCompany = (releaseCompanys) =>{
    let result = null;
    result = releaseCompanys.map((item,index)=>{
      let createDate = moment(item.created_at).format('DD-MM-YYYY');
      return (
          <tr key={index}>
            <th scope="row" style={{width:'6%'}}>{index + 1}</th>
            <td style={{width:'30%'}}  >{item.name}</td>
            <td style={{width:'38%'}}>{item.description}</td>
            <td style={{width:'10%'}}>{createDate}</td>
            <td style={{width:'22%'}}>
                <Link to={`/releaseCompany/add/${item.id}`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={() => this.deleteReleaseCompany(item.id)} className="btn btn-info hvr-grow-rotate">Delete</button>
            </td>
          </tr>
      )
    });
    return result;
  }
  deleteReleaseCompany = (idReleaseCompany) => {
    swal({
      title: "Confirm !",
      text: "Confirm delete this publisher ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        apiCaller(`${urls.DELETE_RELEASECOMPANY}/?idReleaseCompany=${idReleaseCompany}`,'GET').then(res=>{
          if(res.data.data){
            this.props.getAllReleaseCompany();
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
          <h4>Danh sách công ty phát hành:</h4>
          <br/>
          <Link to="/releaseCompany/add" onClick={()=>this.props.resetReleaseCompany}   className="btn btn-primary hvr-grow-rotate">Add New</Link>
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
              {this.showListReleaseCompany(this.props.releaseCompanys)}
            </tbody>
          </table>
        </div>

       
      </div>
    );
  }
}

export default ReleaseCompanysComponent;
