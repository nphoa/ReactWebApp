import React, { Component } from 'react';
import{connect} from 'react-redux';
import CategoryComponent from '../Components/Category/category.Component';
import * as actions from '../Actions/index';


const mapStateToProps = (state) => {
  return{
    categories:state.categories.categories
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllCategory:()=>{
            dispatch(actions.getAllCategory());
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryComponent);
