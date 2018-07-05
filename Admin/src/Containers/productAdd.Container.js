import React, { Component } from 'react';
import{connect} from 'react-redux';
import ProductAddComponent from '../Components/productAdd.Component';
import * as actions from '../Actions/index';


const mapStateToProps = (state) => {
  return{
    categories:state.categories,
    authors:state.authors,
    publishers:state.publishers,
    releaseCompanys:state.releaseCompany
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getAllCategory:()=>{
        dispatch(actions.getAllCategory());
      },
      getAllAuthor:()=>{
        dispatch(actions.getAllAuthor());
      },
      getAllPublisher:()=>{
        dispatch(actions.getAllPublisher());
      },
      getAllReleaseCompany:()=>{
        dispatch(actions.getAllReleaseCompany());
      },
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductAddComponent);
