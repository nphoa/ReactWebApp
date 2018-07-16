import React, { Component } from 'react';
import{connect} from 'react-redux';
import ReleaseCompanyAddComponent from '../../Components/ReleaseCompany/releaseCompanyAdd.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    formReleaseCompanyAddField:state.form.releaseCompanyAdd
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllReleaseCompany:()=>{
            dispatch(actions.getAllReleaseCompany());
        },
        getReleaseCompanyById:(id)=>{
            dispatch(actions.getReleaseCompanyById(id));
        },
        resetReleaseCompany:()=>{
            dispatch(actions.resetReleaseCompany());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReleaseCompanyAddComponent);
