import React, { Component } from 'react';
import ImageUploadAndReviewComponent from '../Components/ImageUploadAndReview.Component';

class Dashboard extends Component {
  getFile = (file) =>{
      console.log(file);
  }
  render() {
    return (
        <div>
        <h1>Dashboard</h1>
        <ImageUploadAndReviewComponent getFile = {this.getFile}/>
        </div>
       
   
      
   
    );
  }
}

export default Dashboard;
