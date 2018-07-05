import React, { Component } from "react";
import {Modal,Button} from 'react-bootstrap';
class ConfirmModal extends Component {
  constructor(props){
      super(props);
      this.state = {
      
      }
  }

  confirm = (event) => {
      event.preventDefault();
      this.props.logout();
      this.props.handleClose();
  }
  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Are you sure want to {this.props.type}</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.confirm}>Confirm</Button>
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
     
    );
  }
}

export default ConfirmModal;