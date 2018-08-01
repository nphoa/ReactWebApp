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
        publisherId:"",
        companyReleaseId:""
      },
      other:{
        idCategoryChange:1
      }
    };
  }
  
  componentDidMount(){
     this.props.getAllCategory();
     this.props.getAllAuthor(1);
     this.props.getAllPublisher(1);
     this.props.getAllReleaseCompany();
  }
  
  handleChange = (event) => {
    let someProperties = {...this.state.filter};
    someProperties[event.target.name] = event.target.value;
    this.setState({
      filter:someProperties
    });
  }

  handleSubmitFilter = (event) => {
    event.preventDefault();
    console.log(this.state.filter);
    this.filterToServer(this.state.filter);
    
  }
  async filterToServer(objFilter){
    let fd = new FormData();
    fd.append('filterProduct',JSON.stringify(objFilter));
    let data = null;
    await callApi(urls.FILTER_PRODUCT_SEARCH,'POST',fd).then((res)=>{
      console.log(res.data);
    });
  }
  showListCategory = (categories) => {
    let result = null;
    result  = categories.map((item,index)=>{
        return (
            <option value={item.category_id} key={index}>{item.category_name}</option>
        )
    });
    return result;
  }
  showListCategoryChild = (idParent,categories) => {
    let result = null;
    let cate = categories.find(item => item.category_id == idParent);
    if(cate != undefined) {
        result  = cate.listChild.map((item,index)=>{
            return (
                <option value={item.category_id} key={index+1}>{item.category_name}</option>
            )
        });
    }
    return result;
  }
  onChangeCategory = (event) => {
    this.setState({
        other:{
          idCategoryChange:event.target.value
        }
    });
  }
  showListAuthor = (authors) => {
    let result = null;
    if(authors != undefined) {
      result  = authors.map((item,index)=>{
        return (
            <option value={item.id} key={index+1}>{item.name}</option>
        )
      });
    }
    return result;
  }
  showListPublisher = (publishers) => {
    let result = null;
    if(publishers!=null){
      result  = publishers.map((item,index)=>{
        return (
            <option value={item.id} key={index+1}>{item.name}</option>
        )
      });
    }
    return result;
  }
  showListReleaseCompany = (releaseCompanys) => {
    let result = null;
     if(releaseCompanys!=null){
      result  = releaseCompanys.map((item,index)=>{
        return (
            <option value={item.id} key={index+1}>{item.name}</option>
        )
      });
     }
    return result;
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
                                <input type="text" className="form-control" name="productName"  onChange={this.handleChange}/>
                              </div>
                          </div>

                         

                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                                <label className="col-sm-4 control-label">Author</label>
                                <div className="col-sm-6">
                                  <select type="text" className="form-control" name="authorId" onChange={this.handleChange}>
                                  <option value={0} key={0}>Choose author !</option>
                                  {this.showListAuthor(this.props.authors)}
                                  </select>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="col-sm-4 control-label">Publisher</label>
                                <div className="col-sm-6">
                                  <select type="text" className="form-control" name="publisherId" onChange={this.handleChange}>
                                  <option value={0} key={0}>Choose publisher !</option>
                                  {this.showListPublisher(this.props.publishers)}
                                  </select>
                                </div>
                          </div>
                          <div className="form-group">
                                <label className="col-sm-4 control-label">Company release</label>
                                <div className="col-sm-6">
                                  <select type="text" className="form-control" name="companyReleaseId" onChange={this.handleChange}>
                                  <option value={0}>Choose release company !</option>
                                  {this.showListReleaseCompany(this.props.releaseCompanys)}
                                  </select>
                                </div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                          <div className="form-group">
                            <label className="col-sm-4 control-label">Category Id</label>
                            <div className="col-sm-6">
                              <select type="text" className="form-control" name="categoryParentId" onChange={this.onChangeCategory}>
                                  <option value={0}>Choose Category Parent !</option>
                                  {this.showListCategory(this.props.categories)}
                              </select>
                            </div>
                          </div>
                      </div>
                      <div className="col-sm-6">
                          <div className="form-group">
                              <label className="col-sm-4 control-label">Category Children</label>
                              <div className="col-sm-6">
                              <select type="text" className="form-control" name="categoryId" onChange={this.handleChange}>
                                  <option value={0}>Choose Category Children !</option>
                                  {this.showListCategoryChild(this.state.other.idCategoryChange,this.props.categories)}
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

