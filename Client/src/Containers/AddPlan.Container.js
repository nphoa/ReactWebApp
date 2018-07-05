import React, { Component } from 'react';
import{connect} from 'react-redux';
import * as actions from '../Actions/index';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import PlanAddComponent from '../Components/PlanAdd.Component';
import {  Redirect  } from "react-router-dom";
class AddPlanContainer extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
      callApi(urls.GET_PLAN_BY_ID + `?idPlan=${this.props.match.params.id}`,'GET',null).then((res)=>{
          this.props.getPlanById(res.data.result);
      });

  }
  addPlan = (plan) => {
    callApi(urls.POST_ADD_PLAN,'POST',plan).then((res)=>{
        this.props.history.goBack();
    });
    this.props.resetPlanEditting();
  }
  render() {
    return (
      <PlanAddComponent onAddPlan={this.addPlan} planEditting = {this.props.planEditting}/>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    products:state.product,
    planEditting:state.planEditting
  }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
      getPlanById:(plan)=>{
        dispatch(actions.getPlanById(plan));
      },
      resetPlanEditting:()=>{
        dispatch(actions.resetPlan());
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddPlanContainer);
