import React, { Component } from "react";
import {Link} from 'react-router-dom';
import * as urls from '../../API/URL';
import apiCaller from '../../API/apiCaller';
import swal from 'sweetalert';
import moment from 'moment';
import '../../pagination.css';
class PublishersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentPage:this.props.currentPage,
        publishersPerPage:10
    };
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount(){
      this.props.getAllPublisher(this.state.currentPage);
  }
  showListPublisher = (publishers) =>{
    let result = null;
    result = publishers.map((item,index)=>{
      let createDate = moment(item.created_at).format('DD-MM-YYYY');
      return (
          <tr key={index}>
            <th scope="row" style={{width:'6%'}}>{index + 1}</th>
            <td style={{width:'30%'}}  >{item.name}</td>
            <td style={{width:'38%'}}>{item.description}</td>
            <td style={{width:'10%'}}>{createDate}</td>
            <td style={{width:'22%'}}>
                <Link to={`/publisher/add/${item.id}`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={() => this.deletePublisher(item.id)} className="btn btn-info hvr-grow-rotate">Delete</button>
            </td>
          </tr>
      )
    });
    return result;
  }
  deletePublisher = (idPublisher) => {
    swal({
      title: "Confirm !",
      text: "Confirm delete this publisher ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        apiCaller(`${urls.DELETE_PUBLISHER}/?idPublisher=${idPublisher}`,'GET').then(res=>{
          if(res.data.data){
            this.props.getAllPublisher(this.state.currentPage);
            console.log(this.state.currentPage);
          }
        });
      } else {
        swal("Cancel !");
      }
    });
  }
  handleClick(event){
      this.setState({
        currentPage:event.target.id
      });
      this.props.getAllPublisher(event.target.id);
     
  }
  render() {
    const {publishers,countRestPublishers,countData} = this.props;
    if(publishers != null && publishers.length == 0 ){
        return(<div>Screen is loading . . .</div>)
    }
    const {currentPage,publishersPerPage}  = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * publishersPerPage;
    const indexOfFirstTodo = indexOfLastTodo - publishersPerPage;
    //const currentTodos = publishers.slice(indexOfFirstTodo, indexOfLastTodo);
    
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countData / publishersPerPage); i++) {
      pageNumbers.push(i);
    }
   
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        // <li
        //   key={number}
        //   id={number}
        //   onClick={this.handleClick}
        // >
        //   {number}
        // </li>
        <li  key={number}  className="page-item"><a className="page-link" id={number} onClick={this.handleClick} href="#"> {number}</a></li>
      );
    });


    return (
      <div className="panel panel-widget">
        <div className="tables">
          <h4>Danh sách nhà xuất bản:</h4>
          <br/>
          <Link to="/publisher/add" onClick={()=>this.props.resetPublisher}   className="btn btn-primary hvr-grow-rotate">Add New</Link>
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
              {this.showListPublisher(publishers)}
            </tbody>
          </table>
        </div>
      
        <nav aria-label="Page navigation example">
          <ul class="pagination">
          {renderPageNumbers}
        </ul>
      </nav>
      </div>
    );
  }
}

export default PublishersComponent;
