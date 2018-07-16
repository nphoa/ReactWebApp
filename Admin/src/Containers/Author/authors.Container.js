import React, { Component } from 'react';
import{connect} from 'react-redux';
import AuthorsComponent from '../../Components/Author/authors.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    authors:state.author.authors
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllAuthor:()=>{
            dispatch(actions.getAllAuthor());
        },
        resetAuthor:()=>{
            dispatch(actions.resetAuthor());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthorsComponent);
