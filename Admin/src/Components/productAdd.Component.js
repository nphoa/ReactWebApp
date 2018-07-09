import React, { Component } from "react";
import {Field,reduxForm} from 'redux-form';
import axios from 'axios';
import apiCaller from '../API/apiCaller';
import * as urls from '../API/URL';
import {Redirect,Link} from 'react-router-dom';
import swal from 'sweetalert';
import ImageUploadAndReviewComponent from '../Components/ImageUploadAndReview.Component';


const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const requiredSelect = value => (typeof value === 'number' || value > 0 ? undefined : 'Required Select')



class ProductAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idCategoryChange:1,
        selectedFile:'',
        redirectProduct:false,
        productEdit:null,
    };
  }
  componentWillMount(){
    console.log(this.props.match);
  }
  componentDidMount(){
    this.getProductById((this.props.match.params.id != undefined) ? this.props.match.params.id : undefined);
    this.props.getAllCategory();
    this.props.getAllAuthor();
    this.props.getAllPublisher();
    this.props.getAllReleaseCompany();
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
   getProductById(idProduct = 0){
   
    apiCaller(`${urls.GET_PRODUCT_BY_ID}/?idProduct=${idProduct}`,'GET').then(res=>{
      
        this.state.productEdit = res.data.data[0];
        this.setState({
        productEdit:res.data.data[0]
      });
    });
    
    
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
    console.log(event.target.value);
    this.state.idCategoryChange = event.target.value;
    this.setState({
        idCategoryChange:this.state.idCategoryChange
    })
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
  submit = () => {
    let values = this.props.formAddField.values;
    let fd = new FormData();
    fd.set('product',JSON.stringify(values));
    fd.set('image',this.state.selectedFile);
    console.log(fd.getAll('image'));
    apiCaller(urls.SAVE_PRODUCT,'POST',fd).then((res)=>{
      if(res.data.data){
        swal("Success!", "Thêm sản phẩm thành công!", "success");
        this.state.redirectProduct = true;
        this.setState({
          redirectProduct:this.state.redirectProduct
        });
      }
    });
    console.log(values);
  }
  renderField = ({input,value,type,meta:{ touched, error, warning}}) => {
    return (
      <div>
        <input {...input} type={type}  className="form-control" value={this.state.productEdit[input.name]}/>
        {touched &&
          ((error && <span style={{color:'red'}}>{error}</span>))}
      </div>
    )
  }
  renderFieldSelect = ({input,children,meta:{ touched, error, warning}}) => {
    return (
      <div>
        <select {...input}  className="form-control">
        {children}
        </select>
        {touched &&
          ((error && <span style={{color:'red'}}>{error}</span>))}
      </div>
    )
  }
  fileSelectedHandler = (event) => {
    this.state.selectedFile = event.target.files[0];
    this.setState({
      selectedFile:this.state.selectedFile
    });
  }
  getFile = (file) => {
      this.state.selectedFile = file;
      this.setState({
        selectedFile:this.state.selectedFile
      });
  }
  render() {
    const { pristine, reset, submitting,valid,handleSubmit } = this.props;
    if(this.state.redirectProduct){
      return <Redirect to="/product"/>
    } 
    if(this.state.productEdit != null || this.state.productEdit != undefined){
      console.log(this.state.productEdit.product_code);
    
    return (
        <div className="panel panel-widget forms-panel">
        <div className="progressbar-heading general-heading">
          <h4>Add new book:</h4>
        </div>
        <div className="forms">
          <div className="form-three widget-shadow">
            <form className="form-horizontal" onSubmit={handleSubmit(this.submit.bind(this))}>

              <div className="form-group">
                <label className="col-sm-2 control-label">Product code</label>
                <div className="col-sm-8">
                    <Field name="product_code" type="text" component={this.renderField} validate={[required]} value={`asdasdsa`} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-2 control-label">Product name</label>
                <div className="col-sm-8">
                <Field name="productName" type="text" component={this.renderField} validate={[required]}/>
                </div>
              </div>
          
              <div className="form-group"> 
                <label className="col-sm-2 control-label" for="exampleInputFile">Product image</label> 
                <div className="col-sm-8">

                    <ImageUploadAndReviewComponent getFile = {this.getFile}/>
                </div>
                
              </div>
           
            
              <div className="form-group">
                <label htmlFor="selector1" className="col-sm-2 control-label">Chọn loại sách</label>
                <div className="col-sm-4">
                  <select onChange={this.onChangeCategory} name="selector1" id="selector1" className="form-control1" placeholder="Chọn thể loại">
                    {this.showListCategory(this.props.categories)}
                  </select>
                </div>
                <div className="col-sm-4">
                <Field name="category_id" component={this.renderFieldSelect} validate={[requiredSelect]}>
                  <option value={0}>Please choose category detail !</option>
                  {this.showListCategoryChild(this.state.idCategoryChange,this.props.categories)}
                </Field>
 
                </div>
              </div>
       
              <div className="form-group">
              <label htmlFor="disabledinput" className="col-sm-2 control-label">Product price</label>
              <div className="col-sm-8">
                <Field name="productPrice" type="number" component={this.renderField} validate={[required]}/>
                </div>
            </div>
              
            <div className="form-group">
            <label htmlFor="selector1" className="col-sm-2 control-label">Company release</label>
            <div className="col-sm-8">
            <Field name="id_release_Company" component={this.renderFieldSelect} validate={[requiredSelect]}>
              <option value={0}>Please choose release company !</option>
              {this.showListReleaseCompany(this.props.releaseCompanys)}
            </Field>
           
            </div>
            </div>

            <div className="form-group">
              <label htmlFor="selector1" className="col-sm-2 control-label">Publisher</label>
              <div className="col-sm-8">
                <Field name="id_publisher" component={this.renderFieldSelect} validate={[requiredSelect]}>
                  <option value={0} key={0}>Please choose publisher !</option>
                  {this.showListPublisher(this.props.publishers)}
                </Field>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="selector1" className="col-sm-2 control-label">Author</label>
              <div className="col-sm-8">
                <Field name="id_author" component={this.renderFieldSelect} validate={[requiredSelect]}>
                  <option value={0} key={0}>Please choose author !</option>
                  {this.showListAuthor(this.props.authors)}
                </Field>
              </div>
            </div>  

            <div className="form-group">
                <label htmlFor="disabledinput" className="col-sm-2 control-label">Size</label>
                <div className="col-sm-8">
                  <Field name="productSize" type="text" component={this.renderField} validate={[required]}/>
                </div>
            </div>

            
            <div className="form-group">
            <label htmlFor="disabledinput" className="col-sm-2 control-label">Page number</label>
            <div className="col-sm-8">
              <Field name="productNumberPage" type="number" component={this.renderField} validate={[required]}/>
            </div>
          </div>

          <div className="form-group">
          <label htmlFor="disabledinput" className="col-sm-2 control-label">Release Date </label>
          <div className="col-sm-8">
          <Field name="productReleaseDate" type="date" component={this.renderField} validate={[required]}/>
          </div>
        </div>

        <div className="form-group">
            <label htmlFor="disabledinput" className="col-sm-2 control-label">Cover type</label>
            <div className="col-sm-8">
            <Field name="productCoverType" type="text" component={this.renderField} validate={[required]}/>
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="txtarea1" className="col-sm-2 control-label">Short description </label>
            <div className="col-sm-8">
            <Field className="form-control" name="product_content" type="input" component="textarea" cols={40} rows={3}/>
            </div>
        </div>
        
        <div className="form-group">
            <label htmlFor="txtarea1" className="col-sm-2 control-label">Detail description</label>
            <div className="col-sm-8">
              <Field className="form-control" name="product_detail" type="input" component="textarea" cols={50} rows={4}/>
              </div>
        </div>

      
            <div>
            <Link to="/product" class="btn btn-info hvr-grow-rotate" style={{width:'100px',marginLeft:'163px'}}>Back</Link>
            <button type="submit" disabled={submitting}  class="btn btn-info hvr-grow-rotate" style={{marginLeft: '30px',width:'100px'}}>Submit</button>
            </div>
           
            </form>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div>Loading data....</div>
    );
  }

  }
}



const RF_productAdd = reduxForm({
  form:'productAdd',
})(ProductAddComponent)

export default RF_productAdd;