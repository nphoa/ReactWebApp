import React, { Component } from "react";
import {Link,Redirect} from 'react-router-dom';
import * as urls from '../../API/URL';
import apiCaller from '../../API/apiCaller';
import swal from 'sweetalert';
import moment from 'moment';
class UsersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersPerPage:4,
      redirectPage:false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidUpdate(newProps){
    if(this.props.match.url != newProps.match.url){
      this.props.getAllUser(this.props.match.params.currentPage);
    }
  }
  componentDidMount(){
      this.props.getAllUser(this.props.match.params.currentPage);
  }
  showListUser = (users) =>{
    let result = null;
    result = users.map((item,index)=>{
      let createDate = moment(item.created_at).format('DD-MM-YYYY');
      return (
          <tr key={index}>
            <th scope="row" style={{width:'6%'}}>{index + 1}</th>
            <td style={{width:'30%'}}  >{item.name}</td>
            <td style={{width:'28%'}}>{item.email}</td>
            <td style={{width:'10%'}}>{item.sort}</td>
            <td style={{width:'10%'}}>{createDate}</td>
            <td style={{width:'22%'}}>
                <Link to={`/user/add/${item.id}`}  className="btn btn-warning hvr-grow-rotate">Edit</Link>
                <button style={{marginLeft:'5px',marginRight:'7px'}} onClick={() => this.deleteUser(item.id)} className="btn btn-info hvr-grow-rotate">Delete</button>
            </td>
          </tr>
      )
    });
    return result;
  }
  deleteUser = (idUser) => {
    swal({
      title: "Confirm !",
      text: "Confirm delete this user ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        apiCaller(`${urls.DELETE_USER}/?idUser=${idUser}`,'GET').then(res=>{
          if(res.data.data){
            this.props.getAllUser(this.props.match.params.currentPage);
          }
        });
      } else {
        swal("Cancel !");
      }
    });
  }
  handleClick(event){
    // this.setState({
    //   currentPage:event.target.id
    // });
    this.props.paginationAuthor(event.target.id);
    this.props.getAllAuthor(event.target.id);
   
}
  render() {
    const{users,currentPage,countData} = this.props;
    if(users != null && users.length == 0 ){
      return(<div>Screen is loading . . .</div>)
    }
    if(this.props.match.params.currentPage != currentPage){
      return(<Redirect to={`/users/${currentPage}`}/>)
    }
    //Pagination client logic
    const {usersPerPage}  = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * usersPerPage;
    const indexOfFirstTodo = indexOfLastTodo - usersPerPage;
    //const currentTodos = publishers.slice(indexOfFirstTodo, indexOfLastTodo);
    
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countData / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    //Map page numbers to Tag <li> in HTML
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li  key={number}  className="page-item">
          <Link to={`/users/${number}`} className="page-link" id={number}>{number}</Link>
        </li>
      );
    });


    return (
      <div className="panel panel-widget">
        <div className="tables">
          <h4>Danh sách người dùng:</h4>
          <br/>
          <Link to="/user/add" onClick={()=>this.props.resetUser}   className="btn btn-primary hvr-grow-rotate">Add New</Link>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Email</th>
                <th>Sort</th>
                <th>Created at</th>
                <th>Custom</th>
              </tr>
            </thead>
            <tbody>
              {this.showListUser(this.props.users)}
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

export default UsersComponent;
