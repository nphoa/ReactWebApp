import React, { Component } from 'react';
import{connect} from 'react-redux';
import UsersComponent from '../../Components/User/users.Component';
import * as actions from '../../Actions/index';


const mapStateToProps = (state) => {
  return{
    users:state.user.users,
    currentPage:state.user.currentPage,
    countData:state.user.countData
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        getAllUser:(numberPage)=>{
            dispatch(actions.getAllUser(numberPage));
        },
        resetUser:()=>{
            dispatch(actions.resetUser());
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersComponent);
