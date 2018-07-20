import React, { Component } from "react";
import{connect} from 'react-redux';
import * as actions from '../Actions/index';


class DemoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
       count:0,
       test:0
    };
    this.incrementCount = this.incrementCount.bind(this);
  }
  
  incrementCount(){
    this.setState((prevState)=>{
        return {
            count:prevState.count +1
        }
    });
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.props.getAllCategory();
    // this.setState({
    //     test:1
    // });
  }
  handleClick = () => {
      this.incrementCount();
      this.incrementCount();
      this.incrementCount();
  }
  


  render() {
      console.log('rende ' + this.state.test);
      console.log(this.props.categories);
   return(
       <div>
           <h3>Learning</h3>
           <h1>Result is : {this.state.test}</h1>
            <button onClick = {this.handleClick} className="btn btn-danger">Run</button>
       </div>
   )
  }
}

const mapStateToProps = (state) => {
    return{
      categories:state.categories.categories
      
    }
  };
  const mapDispatchToProps = (dispatch,props) => {
      return {
          getAllCategory:()=>{
              dispatch(actions.getAllCategory());
          },
      };
    }
const containerDemo = connect(
        mapStateToProps,
        mapDispatchToProps
      )(DemoComponent)

export default containerDemo;

