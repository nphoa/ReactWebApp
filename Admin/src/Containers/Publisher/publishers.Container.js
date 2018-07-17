import React, { Component } from 'react';
import{connect} from 'react-redux';
import PublishersComponent from '../../Components/Publisher/publishers.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    publishers:state.publisher.publishers,
    countRestPublishers:state.publisher.countRestPublishers,
    countData:state.publisher.countData,
    currentPage:state.publisher.currentPage
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllPublisher:(currentPage)=>{
            dispatch(actions.getAllPublisher(currentPage));
        },
        resetPublisher:()=>{
            dispatch(actions.resetPublisher());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PublishersComponent);
