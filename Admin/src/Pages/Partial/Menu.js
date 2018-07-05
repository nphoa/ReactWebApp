import React, { Component } from 'react';
import {  Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
     
     
      <div className="sidebar" role="navigation">
        <div className="navbar-collapse">
          <nav className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right dev-page-sidebar mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar" id="cbp-spmenu-s1">
            <div className="scrollbar scrollbar1">
              <ul className="nav" id="side-menu">
                <li>
                  <Link to ="/" className="active"><i className="fa fa-home nav_icon" />Dashboard</Link>
                </li>
                <li>
                  <a href="#"><i className="fa fa-cogs nav_icon" />Danh mục <span className="fa arrow" /></a>
                  <ul className="nav nav-second-level collapse">
                    <li>
                      <Link to ="/product">Sách</Link>
                    </li>
                    <li>
                      <Link to ="/plan">Nhà xuất bản</Link>
                    </li>
                    <li>
                      <Link to ="/product">Tác giả</Link>
                    </li>
                  </ul>
                  {/* /nav-second-level */}
                </li>
                <li>
                  <a href="#"><i className="fa fa-cogs nav_icon" />Đơn hàng <span className="fa arrow" /></a>
                  <ul className="nav nav-second-level collapse">
                    <li>
                      <Link to ="/product">Quản lý đơn hàng</Link>
                    </li>
                
                  </ul>
                  {/* /nav-second-level */}
                </li>
              </ul>
            </div>
            {/* //sidebar-collapse */}
          </nav>
        </div>
      </div>
      
   
    );
  }
}

export default Menu;
