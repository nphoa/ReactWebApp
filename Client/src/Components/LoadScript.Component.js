import Script from 'react-load-script';
import React, { Component } from "react"; 
 
export default class LoadScriptComponent extends Component {

render() {
    return (
      <Script
       
        url="/Client/js/main.js"
        onCreate={this.handleScriptCreate.bind(this)}
        onError={this.handleScriptError.bind(this)}
        onLoad={this.handleScriptLoad.bind(this)}
      />
    )
  }
   
  
   
  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }

}