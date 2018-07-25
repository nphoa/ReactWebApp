import React, { Component } from 'react';
import{connect} from 'react-redux';
import UserAddComponent from '../../Components/User/userAdd.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    formUserAddField:state.form.userAdd,
    roles:state.roles
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getUserById:(id)=>{
            dispatch(actions.getUserById(id));
        },
        resetUser:()=>{
            dispatch(actions.resetUser());
        },
        getAllRole:()=>{
            dispatch(actions.getAllRole());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserAddComponent);
