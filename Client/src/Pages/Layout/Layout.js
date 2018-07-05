import React, { Component } from 'react';
import Footer from '../Partial/Client/Footer';
import HeaderContainer from '../../Containers/Header.Container';
import MenuContainer from '../../Containers/Category.Container';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import routes from '../../routers';


class LayoutClient extends Component {
    showContentRoute = (routes) =>{
    console.log(this.props);   
    var result = null;
    if(routes.length >0){
        result = routes.map((route,index)=>{
            
            return (
                <Route
                key={index}
                path={route.path}
                render={props => (
                  // pass the sub-routes down to keep nesting
                  <route.component {...props}/>
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
        {/* HEADER */}
        <HeaderContainer/>
        {/* /HEADER */}
        {/* NAVIGATION */}
        
        <div>
            <MenuContainer/>
            {/* /NAVIGATION */}
            {this.showContentRoute(routes)}
           
        </div>
        
        <Footer/>
      </div>
    );
  }
}

export default LayoutClient;
