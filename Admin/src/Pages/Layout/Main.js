import React, { Component } from 'react';
import Footer from '../Partial/Footer';
import Menu from '../Partial/Menu';
import Header from '../Partial/Header';
import routers from '../../routers';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import{connect} from 'react-redux';
import * as actions from '../../Actions/index';

class Main extends Component {
  showContentRoute = (routes) =>{
    var result = null;
    if(routes.length >0){
        result = routes.map((route,index)=>{
            return (
                <Route
                    key = {index} 
                    path={route.path}
                    exact ={route.exact}
                    component={route.main}  
                />
            );
        });
    }
    return result;
  }
  render() {
      return (
        <div className="main-content">
        {/*left-fixed -navigation*/}
        <Menu/>
        {/*left-fixed -navigation*/}
        {/* header-starts */}
        <Header/>
        {/* //header-ends */}
        {/* main content start*/}
        <div id="page-wrapper">
          <div className="main-page">
            {/* four-grids */}
            <div className="row four-grids">
              <Switch>
                {this.showContentRoute(routers)}
              </Switch>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/*footer*/}
        <Footer/>
        {/*//footer*/}
      </div>
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
        dispatch(actions.login());
      },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
