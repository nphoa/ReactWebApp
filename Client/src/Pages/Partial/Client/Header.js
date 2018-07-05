import React, { Component } from 'react';
import MyCartContainer from '../../../Containers/MyCart.Container';
import LoginContainer from '../../../Containers/Login.Container';
import swal from 'sweetalert';
class HeaderClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      confirmModal:{
        type:'',
        isLogin:false
      }
    }
  }
  componentWillMount(){
  
  }
  componentDidUpdate(){
    let userLogin = JSON.parse(localStorage.getItem('login'));
    if(userLogin != null){
      alert(1);
      this.setState({
        isLogin:true
      })
    }else{
      this.setState({
        isLogin:false
      })
    }
  }
  handleLogout = () => {
    swal({
      title: "Xác nhận!",
      text: "Bạn có chắc chắn muốn đăng xuất ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.props.logout();
      } else {
        swal("Hủy bỏ");
      }
    });
  }
  render() {
    let {isLogin} = this.state;
   
    return (
        <div>
             {/* top Header */}
          <div id="top-header">
          <div className="container">
            <div className="pull-left">
              <span>Welcome to E-book!</span>
            </div>
          </div>
        </div>
        {/* /top Header */}
        {/* header */}
        <div id="header">
          <div className="container">
            <div className="pull-left">
              {/* Logo */}
              <div className="header-logo">
                <a className="logo" href="#">
                  <img style={{width:'130px',height:'90px'}} src="Client/img/logo.png" />
                </a>
              </div>
              {/* /Logo */}
              {/* Search */}
              <div className="header-search">
                <form>
                  <input className="input search-input" type="text" placeholder="Enter your keyword" />
                  <select className="input search-categories">
                    <option value={0}>All Categories</option>
                    <option value={1}>Category 01</option>
                    <option value={1}>Category 02</option>
                  </select>
                  <button className="search-btn"><i className="fa fa-search" /></button>
                </form>
              </div>
              {/* /Search */}
            </div>
            <div className="pull-right">
              <ul className="header-btns">
                {/* Account */}
                <li className="header-account dropdown default-dropdown">
                  <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                    <div className="header-btns-icon">
                      <i className="fa fa-user-o" />
                    </div>
                    <strong className="text-uppercase">My Account <i className="fa fa-caret-down" /></strong>
                  </div>
                 <LoginContainer/>
                 
                  <ul className="custom-menu">
                    <li><a href="#"><i className="fa fa-user-o" /> My Account</a></li>
                    <li><a href="#"><i className="fa fa-heart-o" /> My Wishlist</a></li>
                    <li><a href="#"><i className="fa fa-exchange" /> Compare</a></li>
                    <li><a href="#"><i className="fa fa-check" /> Checkout</a></li>
                    {
                      isLogin ? (
                        <li>
                          <a href="#" onClick={this.handleLogout}><i className="fa fa-unlock-alt" /> Logout</a>
                        </li>
                      ) : ''
                    }
                  
                    <li><a href="#"><i className="fa fa-user-plus" /> Create An Account</a></li>
                  </ul>
                </li>
                {/* /Account */}
                {/* Cart */}
                <MyCartContainer/>
                {/* /Cart */}
                {/* Mobile nav toggle*/}
                <li className="nav-toggle">
                  <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars" /></button>
                </li>
                {/* / Mobile nav toggle */}
              </ul>
            </div>
          </div>
          {/* header */}
        </div>
        {/* container */}

        </div>
    );
  }
}

export default HeaderClient;
