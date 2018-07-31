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
      filter:{
        productName:"",
        productCode:"",
        categoryId:"",
        authorId:"",
        publisher:"",
        companyReleaseId:""
      }
    };
  }
  
  componentWillMount(){
     
  }
 
  handleChange = (event) => {
    // this.setState({
    //   filter:{
    //     [event.target.name]:event.target.value
    //   }
    // })

    this.setState(prevState => ({
       filter: {
            ...prevState.filter,
            [event.target.name]:event.target.value
        }
    }))
  }

  handleSubmitFilter = (event) => {
    event.preventDefault();
    console.log(this.state.filter);
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
            <form className="form-horizontal" onSubmit={this.handleSubmitFilter}>
           
                
                <div class="panel panel-info" style={{padding:'0px'}}>
                <div class="panel-heading">Filter Information</div>
                <div class="panel-body">
                    <br/>
                    <div className='row'>
                        <div className="col-sm-6">
                          <div className="form-group">
                          <label className="col-sm-4 control-label">Product Code</label>
                          <div className="col-sm-6">
                              <input type="text" className="form-control" name="productCode" onChange={this.handleChange}/>
                          </div>
                          </div>

                          <div className="form-group">
                              <label className="col-sm-4 control-label">Product Name</label>
                              <div className="col-sm-6">
                                <input type="text" className="form-control" name="productName"/>
                              </div>
                          </div>

                          <div className="form-group">
                              <label className="col-sm-4 control-label">Category Id</label>
                              <div className="col-sm-3">
                                <select type="text" className="form-control" name="categoryParentId">
                                    <option>A</option>      
                                </select>
                              </div>
                              <div className="col-sm-3">
                                <select type="text" className="form-control" name="categoryId">
                                    <option>A</option>      
                                </select>
                              </div>
                          </div>

                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                                <label className="col-sm-4 control-label">Author</label>
                                <div className="col-sm-6">
                                  <select type="text" className="form-control" name="authorId">
                                        <option>A</option>
                                  </select>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="col-sm-4 control-label">Publisher</label>
                                <div className="col-sm-6">
                                  <select type="text" className="form-control" name="publisherId">
                                        <option>A</option>
                                  </select>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="col-sm-4 control-label">Company release</label>
                                <div className="col-sm-6">
                                  <select type="text" className="form-control" name="companyReleaseId">
                                        <option>A</option>
                                  </select>
                                </div>
                          </div>
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

