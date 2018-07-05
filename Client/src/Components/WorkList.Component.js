import React, { Component } from "react";
import WorkItemComponent from '../Components/WorkItem.Component';
import {  Link } from "react-router-dom";
class WorkListComponent extends Component {
  showListItem = (works) => {
    var result = null;  
    if(works && works.length > 0){
        result = works.map((work,index) => {
            return <WorkItemComponent work={work} key={index}/>
        });
    }
    return result;  
  };
  render() {
    return (
      
      <div>
      <Link to="/work/add/0"  className="btn btn-large btn-block btn-success" style={{width: 100}}>Add New</Link>

      <br/>
      
      <div className="panel panel-widget">
      
        <div className="tables">
          <h4>Work List</h4>
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Kế hoạch</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
                {this.showListItem(this.props.works)}
            </tbody>
            
          </table>
        </div>
      </div>

      </div>
    );
  }
}

export default WorkListComponent;
