import React, { Component } from "react";
import ModalLogin from './Modal/Login.Modal';
class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      show:false,
      isLogin:false
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleClose(){
    this.setState({ show: false });
  }
  handleShow(){
    this.setState({ show: true });
  }

  // componentDidUpdate(){
  //   if(Object.keys(this.props.login).length > 0){
  //     this.setState({
  //         isLogin:true
  //     });
  //   }
  // }

  login = (login)=>{
    this.props.getLogin(login);
    this.handleClose();
  }
  render() {
    console.log('render');
    let isLogin = false;
    let userLogin = JSON.parse(localStorage.getItem('login'));
    if(userLogin !== null){
      isLogin = Object.keys(userLogin).length;
    }
    return (
        (isLogin) ? (
          <div>
          <span>Hello:</span><a href="#" className="text-uppercase">{`${userLogin.name}`}</a>
          <ModalLogin show = {this.state.show} handleClose = {this.handleClose} login = {this.login}/>
          </div>
        ) :(
          <div>
          <a href="#" onClick={this.handleShow} className="text-uppercase">Login</a>
          <ModalLogin show = {this.state.show} handleClose = {this.handleClose} login = {this.login}/>
        </div>
        )
     
    );
  }
}

export default LoginComponent;