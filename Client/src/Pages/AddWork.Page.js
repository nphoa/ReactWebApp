import React, { Component } from 'react';
import AddWorkContainer from '../Containers/AddWork.Container';

class AddWorkPage extends Component {
  render() {
    return (
        <AddWorkContainer history = {this.props.history} match = {this.props.match}/>
      
   
      
   
    );
  }
}

export default AddWorkPage;
