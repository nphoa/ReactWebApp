import React, { Component } from 'react';
import{connect} from 'react-redux';
import AuthorsComponent from '../../Components/Author/authors.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    authors:state.author.authors,
    currentPage:state.author.currentPage,
    countData:state.author.countData
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllAuthor:(numberPage)=>{
            dispatch(actions.getAllAuthor(numberPage));
        },
        resetAuthor:()=>{
            dispatch(actions.resetAuthor());
        },
        paginationAuthor:(numberPage)=>{
            dispatch(actions.paginationAuthor(numberPage));
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthorsComponent);
