import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../Actions/index';

class Layout extends Component {
    componentWillMount(){
        this.props.login();
    }
    render() {
    const {isLogin} = this.props;
    if(!isLogin){
        return (
            <Redirect to ='/login'/>
        );
    }
    return (
        <Redirect to ='/dashboard'/>
    );
    
  }
}

//export default Layout;

const mapStateToProps = (state) => {
    return{
      isLogin:state.login.isLogin
    }
  }
  const mapDispatchToProps = (dispatch,props) => {
      return {
        login:()=>{
            dispatch(actions.login())
        }
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Layout);