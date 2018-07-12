import React, { Component } from 'react';
import{connect} from 'react-redux';
import CategoryAddComponent from '../Components/Category/addCategory.Component';
import * as actions from '../Actions/index';


const mapStateToProps = (state) => {
  return{
    formCategoryAddField:state.form.categoryAdd,
    categories:state.categories.categories
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getAllCategory:()=>{
        dispatch(actions.getAllCategory());
      },
      getCategoryById:(id)=>{
        dispatch(actions.getCategoryById(id));
      },
      resetCategory:() =>{
        dispatch(actions.resetCategory());
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryAddComponent);
