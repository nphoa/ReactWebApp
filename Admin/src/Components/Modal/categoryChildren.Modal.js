import React, { Component } from "react";
import {Modal,Button,Table} from 'react-bootstrap';
class CategoryChildrenModal extends Component {
  constructor(props){
      super(props);
      
  }

  componentWillMount(){
      console.log('123123213213');
  }
  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>List category children</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table responsive>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.idParentCategory}</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>           
          </tbody>
        </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
     
    );
  }
}

export default CategoryChildrenModal;