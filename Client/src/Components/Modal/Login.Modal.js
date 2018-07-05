import React, { Component } from "react";
import {Modal,Button} from 'react-bootstrap';
class LoginModal extends Component {
  constructor(props){
      super(props);
      this.state = {
          email:'',
          password:''
      }
  }
  onChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      });
  }
  onSubmit = (event) => {
      event.preventDefault();
      this.props.login(this.state);
  }
  render() {
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" name="email" id="email" onChange={this.onChange}/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={this.onChange}/>
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
        </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
     
    );
  }
}

export default LoginModal;