import React, { Component } from "react";

var hasClass, addClass, removeClass;
function classReg( className ) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }
if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}




class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  

  componentDidMount(){
    var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeftPush = document.getElementById( 'showLeftPush' ),
    body = document.body;
    
    showLeftPush.onclick = function() {
        toggleClass( this, 'active' );
        toggleClass( body, 'cbp-spmenu-push-toright' );
        toggleClass( menuLeft, 'cbp-spmenu-open' );
        disableOther( 'showLeftPush' );
    };


    function disableOther( button ) {
        if( button !== 'showLeftPush' ) {
            toggleClass( showLeftPush, 'disabled' );
        }
    }
   
  
  }
 
  


  render() {
   return(
       <div>
         A
       </div>
   )
  }
}


export default CustomComponent;

