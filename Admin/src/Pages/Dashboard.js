import React, { Component } from 'react';
import ImageUploadAndReviewComponent from '../Components/ImageUploadAndReview.Component';
import{connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component {
  getFile = (file) =>{
      console.log(file);
  }
  render() {
    // if(!this.props.isLogin){
    //     return (
    //       <Redirect to='/login'/>
    //     )
    // }
    return (
        <div>
        <h1>Dashboard</h1>
        <ImageUploadAndReviewComponent getFile = {this.getFile}/>
        </div>
    );
  }
}

//export default Dashboard;

const mapStateToProps = (state) => {
  return{
    isLogin:state.login.isLogin
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
