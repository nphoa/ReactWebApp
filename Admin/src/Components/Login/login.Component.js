import React, { Component } from "react";
import {Link,Redirect} from 'react-router-dom';
import swal from 'sweetalert';
import {connect} from 'react-redux';
import * as actions from '../../Actions/index';
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'nphoa',
        password:''
    };
    
  }
  componentWillMount(){
    this.checkLogin();
  }
  onChange = (event) => {
    this.setState({
        [event.target.name] :event.target.value
    });

  }
  checkLogin = () => {
    let userLogin =JSON.parse(sessionStorage.getItem('loginUser'));
    if(userLogin != null || userLogin != undefined){
        this.props.checkLogin(userLogin);
    }
  }
  onSubmit = (event) => {
      event.preventDefault();
      this.props.login(this.state);
      // if(this.state.email == 'nphoa7777@gmail.com' && this.state.password == '123456'){
      //     let loginUser = {
      //         email:this.state.email,
      //         password:this.state.password
      //     };
      //     localStorage.setItem('loginUser',JSON.stringify(loginUser));
      //     swal("Success!", "Đăng nhập thành công!", "success");
      //     this.props.login();
      // }
  }
  render() {
    if(this.props.isLogin){
        return(
          <Redirect to='/'/>
        )
    }
    return (

      <div className="login-bg">
      <div className="login-body">
      <div className="login-heading">
        <h1>Login</h1>
      </div>
      <div className="login-info">
        <form onSubmit={this.onSubmit}>
          <input type="text" className="user" name="email" placeholder="Email" required onChange={this.onChange} />
          <input type="password" name="password" className="lock" placeholder="Password" onChange={this.onChange}/>
          <div className="forgot-top-grids">
            <div className="forgot-grid">
              <ul>
                <li>
                  <input type="checkbox" id="brand1" defaultValue />
                  <label htmlFor="brand1"><span />Remember me</label>
                </li>
              </ul>
            </div>
            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
            <div className="clearfix"> </div>
          </div>
          <input type="submit" name="Sign In" defaultValue="Login" />
          <div className="signup-text">
            <a href="signup.html">Don't have an account? Create one now</a>
          </div>
          <hr />
          <h2>or login with</h2>
          <div className="login-icons">
            <ul>
              <li><a href="#" className="facebook"><i className="fa fa-facebook" /></a></li>
              <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
              <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" className="dribbble"><i className="fa fa-dribbble" /></a></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
    <div className="go-back login-go-back">
      <a href="index.html">Go To Home</a>
    </div>
    <div className="copyright login-copyright">
      <p>© 2016 Baxster . All Rights Reserved . Design by </p></div>
       
      </div>
    );
  }
}

//export default LoginComponent;

const mapStateToProps = (state) => {
    return{
      isLogin:state.login.isLogin
    }
  }
  const mapDispatchToProps = (dispatch,props) => {
      return {
          login:(login)=>{
              dispatch(actions.login(login))
          },
          checkLogin:(data)=>{
            dispatch(actions.login_success(data))
          }
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);
