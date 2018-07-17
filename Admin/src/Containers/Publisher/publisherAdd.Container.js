import React, { Component } from 'react';
import{connect} from 'react-redux';
import PublisherAddComponent from '../../Components/Publisher/publisherAdd.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    publishers:state.publisher.publishers,
    formPublisherAddField:state.form.publisherAdd,
    currentPage:state.publisher.currentPage
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllPublisher:()=>{
            dispatch(actions.getAllPublisher());
        },
        getPublisherById:(id)=>{
            dispatch(actions.getPublisherById(id));
        },
        resetPublisher:()=>{
            dispatch(actions.resetPublisher());
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PublisherAddComponent);
