import React, { Component } from 'react';
import * as jQuery from 'jquery';

import toggleClass from '../Components/classie';
import metisMenu from 'metismenu';
class Custom extends Component {

  componentWillMount(){
   
      
  }
  demoCss(){
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
  componentDidMount(){
    jQuery('#side-menu').metisMenu();

    jQuery(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            jQuery('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            jQuery('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            jQuery("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = jQuery('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
    this.demoCss();
  }
  render() {
        return(<div>
           
        </div>)
        
      }

     
    }

  


export default Custom;



