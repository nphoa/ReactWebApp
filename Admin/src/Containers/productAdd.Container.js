import React, { Component } from 'react';
import{connect} from 'react-redux';
import ProductAddComponent from '../Components/Product/productAdd.Component';
import * as actions from '../Actions/index';


const mapStateToProps = (state) => {
  return{
    productEdit:state.product.productEdit,
    categories:state.categories.categories,
    authors:state.author.authors,
    publishers:state.publisher.publishers,
    releaseCompanys:state.releaseCompany.releaseCompanys,
    formAddField:state.form.productAdd
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getAllCategory:()=>{
        dispatch(actions.getAllCategory());
      },
      getAllAuthor:(currentPage)=>{
        dispatch(actions.getAllAuthor(currentPage));
      },
      getAllPublisher:(numberPage)=>{
        dispatch(actions.getAllPublisher(numberPage));
      },
      getAllReleaseCompany:()=>{
        dispatch(actions.getAllReleaseCompany());
      },
      getProductById:(id)=>{
        dispatch(actions.getProductById(id));
      },
      resetProduct:() =>{
        dispatch(actions.resetProduct());
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductAddComponent);
