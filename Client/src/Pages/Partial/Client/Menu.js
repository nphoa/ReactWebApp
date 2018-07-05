import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MenuClient extends Component {
  componentDidMount(){
    this.props.getAllCategory();
  }
  showCategoryNoChilder(entry,index){
    return (
      <li key={index}><a href="#">{entry.category_name}</a></li>
    )
  }
  showCategoryHasChilder(listChild,entry,index){
    return (
        <li key={index} className="dropdown side-dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{entry.category_name} <i className="fa fa-angle-right" /></a>
        <div className="custom-menu">
          <div className="row">
            <div className="col-md-12">
              <ul className="list-links">
                {
                  listChild.map((item,index)=>{
                    return (
                      <li key={index}><Link to={`/product/getProductByCategoryId/${item.category_id}`}>{item.category_name}</Link></li>
                    ) 
                  })

                }
            
              </ul>
              <hr className="hidden-md hidden-lg" />
            </div>
          </div>
          <div className="row hidden-sm hidden-xs">
            <div className="col-md-12">
              <hr />
              <a className="banner banner-1" href="#">
                <img src="Client/img/banner05.jpg"/>
                <div className="banner-caption text-center">
                  <h2 className="white-color">NEW COLLECTION</h2>
                  <h3 className="white-color font-weak">HOT DEAL</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </li>
      )
  }
  showCategory(list){
      let listfilter = list.filter(item=>item.category_parrent_id === 0);
      var result = null;
      result = listfilter.map((item,index)=>{
        let listfilterChilren = list.filter(item1=>item1.category_parrent_id === item.category_id);   
        return (
            (listfilterChilren.length === 0) ? this.showCategoryNoChilder(item,index) : this.showCategoryHasChilder(listfilterChilren,item,index)
          )
      });
      return result;
  }
  render() {
    return (
        
      <div id="navigation">
      {/* container */}
      <div className="container">
        <div id="responsive-nav">
          {/* category nav */}
          <div className="category-nav show-on-click">
            <span className="category-header">Categories <i className="fa fa-list" /></span>
            <ul className="category-list">
            {this.showCategory(this.props.category)}
            </ul>
          </div>
          {/* /category nav */}
          {/* menu nav */}
          <div className="menu-nav">
            <span className="menu-header">Menu <i className="fa fa-bars" /></span>
            <ul className="menu-list">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/info">Info</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
            </div>
          {/* menu nav */}
        </div>
      </div>
      {/* /container */}
    </div>
    );
  }
}

export default MenuClient;