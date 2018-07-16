import React, { Component } from 'react';
import{connect} from 'react-redux';
import AuthorAddComponent from '../../Components/Author/authorAdd.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    formAuthorAddField:state.form.authorAdd
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllAuthor:()=>{
            dispatch(actions.getAllAuthor());
        },
        getAuthorById:(id)=>{
            dispatch(actions.getAuthorById(id));
        },
        resetAuthor:()=>{
            dispatch(actions.resetAuthor());
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthorAddComponent);
