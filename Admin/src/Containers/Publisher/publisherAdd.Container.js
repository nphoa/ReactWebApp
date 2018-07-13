import React, { Component } from 'react';
import{connect} from 'react-redux';
import PublishersComponent from '../../Components/Publisher/publishers.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    publishers:state.publisher.publishers
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllPublisher:()=>{
            dispatch(actions.getAllPublisher());
        },
        resetPublisher:()=>{
            dispatch(actions.resetPublisher());
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PublishersComponent);
