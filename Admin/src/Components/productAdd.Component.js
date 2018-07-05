import React, { Component } from "react";
import {Field,reduxForm} from 'redux-form';
import axios from 'axios';
const required = value => (value || typeof value === 'number' ? undefined : 'Required')





class ProductAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idCategoryChange:1,
        selectedFile:''
    };
  }
  componentDidMount(){
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
  showListCategoryChild = (idParent,categories) => {
    let result = null;
    let cate = categories.find(item => item.category_id == idParent);
    if(cate != undefined) {
        result  = cate.listChild.map((item,index)=>{
            return (
                <option value={item.category_id} key={index}>{item.category_name}</option>
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
            <option value={item.id} key={index}>{item.name}</option>
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
            <option value={item.id} key={index}>{item.name}</option>
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
            <option value={item.id} key={index}>{item.name}</option>
        )
      });
     }
    return result;
  }
  submit = () => {
    alert('xong');
    console.log(this.props.formAddField.values);

    var formData = new FormData(); // Currently empty
    formData.append('username', 'Chris');
    var obj = {
      image:this.state.selectedFile,
      nam:'nph'
    }
    console.log(obj);
  }
  renderField = ({input,label,type,meta:{ touched, error, warning}}) => {
    return (
      <div>
        <input {...input} type={type}  className="form-control"/>
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
  submitImage = () => {
    const fd = new FormData();
    fd.append('image',this.state.selectedFile);
   
    // console.log(fd);
    // axios.post('http://localhost:8000/api/uploadImage',fd).then(res=>{
    //     console.log(res.data);
    // });
  }
  render() {
    const { pristine, reset, submitting,valid,handleSubmit } = this.props;
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
                    <Field name="productCode" type="text" component={this.renderField} validate={[required]}/>
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
                    <form onSubmit={this.submitImage}>
                    <input type="file" id="product_image" onChange={this.fileSelectedHandler}/> 
                    <p className="help-block">Upload hình ảnh sản phẩm</p>
                    <button type="submit">Submit Image</button>
                    </form>
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
                <Field name="category_id" component="select" className="form-control" placeholder="Chọn danh mục theo loại">
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
            <Field name="id_release_Company" component="select" className="form-control" placeholder="">
              {this.showListReleaseCompany(this.props.releaseCompanys)}
            </Field>
           
            </div>
            </div>

            <div className="form-group">
              <label htmlFor="selector1" className="col-sm-2 control-label">Publisher</label>
              <div className="col-sm-8">
                <Field name="id_publisher" component="select" className="form-control" placeholder="">
                  {this.showListPublisher(this.props.publishers)}
                </Field>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="selector1" className="col-sm-2 control-label">Author</label>
              <div className="col-sm-8">
                <Field name="id_author" component="select" className="form-control" placeholder="">
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
            <Field name="productCoverType" type="number" component={this.renderField} validate={[required]}/>
            </div>
        </div>

        <div className="form-group">
            <label htmlFor="txtarea1" className="col-sm-2 control-label">Mô tả ngắn</label>
            <div className="col-sm-8"><textarea name="txtarea1" id="txtarea1" cols={50} rows={4} className="form-control1"  /></div>
        </div>
        
        <div className="form-group">
            <label htmlFor="txtarea1" className="col-sm-2 control-label">Mô tả chi tiết</label>
            <div className="col-sm-8"><textarea name="txtarea1" id="txtarea1" cols={50} rows={4} className="form-control1"  /></div>
        </div>
            
            <button type="submit" disabled={submitting}  class="btn btn-info hvr-grow-rotate" style={{marginLeft: '690px',width:'100px'}}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}



const RF_productAdd = reduxForm({
  form:'productAdd',
})(ProductAddComponent)

export default RF_productAdd;