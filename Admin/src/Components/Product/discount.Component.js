import React, { Component } from "react";
import '../../demo.css';
import ImageUploadAndReviewComponent from '../ImageUploadAndReview.Component';
import {Link,Redirect} from 'react-router-dom';
import callApi from "../../API/apiCaller";
import * as urls from '../../API/URL';
import swal from 'sweetalert';
class DiscountProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
    };
  }
  
  componentWillMount(){
     
  }
 
 

  
  render() {
    if(this.state.redirectProduct){
      return <Redirect to="/products"/>
    }
    return (
        <div className="panel panel-widget forms-panel">
        <div className="progressbar-heading general-heading">
          <h4>
            Discount Product
          </h4>
        </div>
        <div className="forms">
          <div className="form-three widget-shadow">
            <form className="form-horizontal">
           
                
                <div class="panel panel-info" style={{padding:'0px'}}>
                <div class="panel-heading">Filter Information</div>
                <div class="panel-body">
                    <br/>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-8">
                          
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-8">
                           
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Password confirm</label>
                        <div className="col-sm-8">
                     
                        </div>
                    </div>
                </div>
            </div>
        
            
            
            
            <div class="panel panel-info" style={{padding:'0px'}}>
                <div class="panel-heading">Product Applied</div>
                <div class="panel-body">
                    <br/>
                   
             

                   
                    
                </div>
            </div>
             
       
            <div>
            <Link to="/users/1" onClick={()=>this.props.resetUser()}  class="btn btn-info hvr-grow-rotate" style={{width:'100px',marginLeft:'163px'}}>Back</Link>
            <button type="submit"   class="btn btn-info hvr-grow-rotate" style={{marginLeft: '30px',width:'100px'}}>Submit</button>
            </div>
           
            </form>
          </div>
        </div>
      </div>
  
    )
  }
}

export default DiscountProductComponent;

