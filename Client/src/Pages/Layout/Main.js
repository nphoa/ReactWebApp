import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import HomeComponent from '../../Components/Home.Component';
import {routes} from '../../routers';


class MainComponent extends Component {
  showContentRoute = (routes) =>{
    console.log(this.props);
    var result = null;
    if(routes.length >0){
        result = routes.map((route,index)=>{
            return (
                <Route
                key={index}
                path={route.path}
                exact ={true}
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
    return (
        <div>        
            {this.showContentRoute(routes)}
        </div>
        
       
     
    );
  }
}

export default MainComponent;
