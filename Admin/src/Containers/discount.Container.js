import React, { Component } from 'react';
import{connect} from 'react-redux';
import DiscountProductContainer from '../Components/Product/discount.Component';
import * as actions from '../Actions/index';


const mapStateToProps = (state) => {
  return{
    categories:state.categories.categories,
    authors:state.author.authors,
    publishers:state.publisher.publishers,
    releaseCompanys:state.releaseCompany.releaseCompanys,
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
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DiscountProductContainer);
