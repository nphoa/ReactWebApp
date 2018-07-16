import React, { Component } from 'react';
import{connect} from 'react-redux';
import ReleaseCompanysComponent from '../../Components/ReleaseCompany/releaseCompanys.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    releaseCompanys:state.releaseCompany.releaseCompanys
    
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllReleaseCompany:()=>{
            dispatch(actions.getAllReleaseCompany());
        },
        resetReleaseCompany:()=>{
            dispatch(actions.resetReleaseCompany());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReleaseCompanysComponent);
