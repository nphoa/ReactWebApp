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
      //currentPage:this.props.currentPage,
      authorsPerPage:4
    };
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidUpdate(newProps){
    //console.log(this.props);
    //console.log(newProps);
    if(this.props.match.url != newProps.match.url){
      this.props.getAllAuthor(this.props.match.params.currentPage);
    }
  }
  componentDidMount(){
      this.props.getAllAuthor(this.props.match.params.currentPage);
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
  handleClick(event){
    // this.setState({
    //   currentPage:event.target.id
    // });
    this.props.paginationAuthor(event.target.id);
    this.props.getAllAuthor(event.target.id);
   
}
  render() {
    const{authors,currentPage,countData} = this.props;
    if(authors != null && authors.length == 0 ){
      return(<div>Screen is loading . . .</div>)
    }
    //Pagination client logic
    const {authorsPerPage}  = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * authorsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - authorsPerPage;
    //const currentTodos = publishers.slice(indexOfFirstTodo, indexOfLastTodo);
    
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(countData / authorsPerPage); i++) {
      pageNumbers.push(i);
    }
    //Map page numbers to Tag <li> in HTML
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li  key={number}  className="page-item">
          <Link to={`/author/${number}`} className="page-link" id={number}>{number}</Link>
        </li>
      );
    });


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

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {renderPageNumbers}
          </ul>
        </nav>
       
      </div>
    );
  }
}

export default AuthorComponent;
