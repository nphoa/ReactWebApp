import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import LoginComponent from '../../Components/Login/login.Component';
import Main from '../../Pages/Layout/Main';
import LayoutComponent from '../../Components/Layout';
import ProducPage from '../Product.Page';
import routersV2 from '../../routersV2';



class Layout extends Component {

  showContentRoute = (routes) =>{
    
    var result = null;
    if(routes.length >0){
        result = routes.map((route,index)=>{
            return (
                <Route
                    key = {index} 
                    path={route.path}
                    exact={route.exact}
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <route.component {...props} routes={route.routes} />
                    )}  
                />
            );
        });
    }
    return result;
  }
  render() {
    return(
      <Router>
        <div>
          {this.showContentRoute(routersV2)}
        </div>
       
      </Router>
   
    )
     
    }

  }


export default Layout;


