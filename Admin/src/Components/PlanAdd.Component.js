import React, { Component } from "react";
import WOW from "wow.js";
import {Link} from 'react-router-dom';
class PlanAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:0,
      name:'',
      start_Date:'',
      end_Date:0
    }
  }
  
  componentWillMount() {
    //Run before render view
    new WOW().init();
    
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      id:nextProps.planEditting.id,
      name:nextProps.planEditting.name,
      start_Date:nextProps.planEditting.start_Date,
      end_Date:nextProps.planEditting.end_Date,
    });
  }
  
  
  onChange = (e) =>{
    this.setState({
      [e.target.name] :e.target.value
    });
    
  }
  onSubmit = (e) => {
    this.state.id = this.props.planEditting.id;
    e.preventDefault();
    console.log(this.state);
    this.props.onAddPlan(this.state);
  }
  render() {
    //console.log(this.props.planEditting);
    
    return (
      <div class="wow flipInX">
        <div className="panel panel-widget forms-panel"style={{ width: "60%" }}>
          <div className="forms">
            <div className="form-grids widget-shadow"data-example-id="basic-forms">
              <div className="form-title">
                <h4>{this.props.planEditting.id == 0 ? 'Add New' : 'Update'}</h4>
              </div>
              <div className="form-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={this.onChange}
                      value={this.state.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="start_Date"
                      onChange={this.onChange}
                      value={this.state.start_Date}
                    />
                  </div>
                  <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="end_Date"
                    onChange={this.onChange}
                    value={this.state.end_Date}
                  />
                </div>
                    <div>
                    <button type="submit" className="btn btn-default" style={{ marginRight:"10px" }}>
                    Submit
                  </button>
                  <Link to="/plan" type="button" className="btn btn-success">
                    Cancel
                   </Link>
                </div>
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanAddComponent;
