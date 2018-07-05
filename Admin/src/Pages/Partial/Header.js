import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="sticky-header header-section ">
        <div className="header-left">
          {/*logo */}
          <div className="logo">
            <a href="index.html">
              <ul>	
                <li><img src="images/logo1.png" alt /></li>
                <li><h2>App</h2></li>
                <div className="clearfix"> </div>
              </ul>
            </a>
          </div>
          {/*//logo*/}
          <div className="header-right header-right-grid">
            <div className="profile_details_left">{/*notifications of menu start */}
              <ul className="nofitications-dropdown">
                <li className="dropdown head-dpdn">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope" /><span className="badge">3</span></a>
                  <ul className="dropdown-menu anti-dropdown-menu">
                    <li>
                      <div className="notification_header">
                        <h3>You have 3 new messages</h3>
                      </div>
                    </li>
                    <li><a href="#">
                        <div className="user_img"><img src="images/1.png" alt /></div>
                        <div className="notification_desc">
                          <p>Lorem ipsum dolor amet</p>
                          <p><span>1 hour ago</span></p>
                        </div>
                        <div className="clearfix" />	
                      </a></li>
                    <li>
                      <div className="notification_bottom">
                        <a href="#">See all messages</a>
                      </div> 
                    </li>
                  </ul>
                </li>
                <li className="dropdown head-dpdn">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-bell" /><span className="badge blue">3</span></a>
                  <ul className="dropdown-menu anti-dropdown-menu">
                    <li>
                      <div className="notification_header">
                        <h3>You have 3 new notification</h3>
                      </div>
                    </li>
                    <li><a href="#">
                        <div className="user_img"><img src="images/2.png" alt /></div>
                        <div className="notification_desc">
                          <p>Lorem ipsum dolor amet</p>
                          <p><span>1 hour ago</span></p>
                        </div>
                        <div className="clearfix" />	
                      </a></li>
                    <li>
                      <div className="notification_bottom">
                        <a href="#">See all notifications</a>
                      </div> 
                    </li>
                  </ul>
                </li>	
                <li className="dropdown head-dpdn">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-tasks" /><span className="badge blue1">15</span></a>
                  <ul className="dropdown-menu anti-dropdown-menu">
                    <li>
                      <div className="notification_header">
                        <h3>You have 8 pending task</h3>
                      </div>
                    </li>
                    <li><a href="#">
                        <div className="task-info">
                          <span className="task-desc">Database update</span><span className="percentage">40%</span>
                          <div className="clearfix" />	
                        </div>
                        <div className="progress progress-striped active">
                          <div className="bar yellow" style={{width: '40%'}} />
                        </div>
                      </a></li><li><a href="#">
                      </a><div className="notification_bottom"><a href="#">
                        </a><a href="#">See all pending tasks</a>
                      </div> 
                    </li>
                  </ul>
                </li>	
              </ul>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        {/*search-box*/}
        <div className="search-box">
          <form className="input">
            <input className="sb-search-input input__field--madoka" placeholder="Search..." type="search" id="input-31" />
          </form>
        </div>
        {/*//end-search-box*/}
        <div className="header-right">
          {/*notification menu end */}
          <div className="profile_details">		
            <ul>
              <li className="dropdown profile_details_drop">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <div className="profile_img">	
                    <span className="prfil-img"><img src="images/a.png" alt /> </span> 
                    <div className="clearfix" />	
                  </div>	
                </a>
                <ul className="dropdown-menu drp-mnu">
                  <li> <a href="#"><i className="fa fa-cog" /> Settings</a> </li> 
                  <li> <a href="#"><i className="fa fa-user" /> Profile</a> </li> 
                  <li> <a href="#"><i className="fa fa-sign-out" /> Logout</a> </li>
                </ul>
              </li>
            </ul>
          </div>
          {/*toggle button start*/}
          <button id="showLeftPush"><i className="fa fa-bars" /></button>
          {/*toggle button end*/}
          <div className="clearfix"> </div>				
        </div>
        <div className="clearfix"> </div>	
      </div>
    );
  }
}

export default Header;
