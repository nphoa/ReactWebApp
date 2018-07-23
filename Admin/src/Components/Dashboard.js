import React, { Component } from 'react';
import Footer from '../Pages/Partial/Footer';
import Menu from '../Pages/Partial/Menu';
import Header from '../Pages/Partial/Header';
import routers from '../routers';
import {BrowserRouter as Router,Route,Switch,Redirect,Link} from 'react-router-dom';
import ReloadLibary from '../Components/ReloadLibary.Component';
import {connect} from 'react-redux';

class Dashboard extends Component {
  showContentRoute = (routes) =>{
    var result = null;
    if(routes.length >0){
        result = routes.map((route,index)=>{
            return (
                <Route
                    key = {index} 
                    path={route.path}
                    exact={route.exact}
                    component={route.main}  
                />
            );
        });
    }
    return result;
  }
  render() {
      if(!this.props.isLogin){
           return(
               <Redirect to ='/login'/>
           )
      }
      return (
        <Router>
        <div className="main-content">
        <ReloadLibary/>
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
              <div>
                {this.showContentRoute(routers)}
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
        {/*footer*/}
        <Footer/>
        {/*//footer*/}
      </div>
        </Router>
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


