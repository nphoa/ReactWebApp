import React, { Component } from "react";
import '../demo.css';
import ImageUploadAndReviewComponent from '../Components/ImageUploadAndReview.Component';
import {Link,Redirect} from 'react-router-dom';
import callApi from "../API/apiCaller";
import * as urls from '../API/URL';
import swal from 'sweetalert';
class AddImageDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idImage:1,
        lstImage:[1],
        lstImageSubmit:[],
        redirectProduct:false
    };
  }
  
  componentWillMount(){
     
  }
  submit = (event) => {
      event.preventDefault();
      var lstSubmit = (this.state.lstImageSubmit);
      var fd = new FormData();
      fd.set('idProduct',JSON.stringify(this.props.match.params.id));
      lstSubmit.forEach(item => {
         fd.append(`image[]`,item);
      });
      callApi(urls.SAVE_PRODUCT_IMAGES,'POST',fd).then(res=>{
        console.log(res);
        if(res.data.data){
          swal("Success!", "Thêm images thành công!", "success");
          this.state.redirectProduct = true;
          this.setState({
            redirectProduct:this.state.redirectProduct
          });
        }
      });
  }
  mapImage = () => {
    let result = null;
    let {lstImage} = this.state;
    console.log(lstImage);
    result = this.state.lstImage.map((item,index)=>{
        return(
            <div className="form-group" key={index}> 
            <label className="col-sm-2 control-label" for="exampleInputFile">Product image detail</label> 
            <div className="col-sm-8">
                <ImageUploadAndReviewComponent getFile={this.getFile}/>
            </div>

            </div>
        )
    });
    return result;
  }
  getFile = (file)=>{
    let {lstImageSubmit} = this.state;
    lstImageSubmit.push(file);
    
    this.state.lstImageSubmit = lstImageSubmit;
    this.setState({
        lstImageSubmit : this.state.lstImageSubmit
    });
  }
  addImage = () => {
      let {lstImage} = this.state;
      let count = lstImage.length;

      lstImage.push(count + 1);
      //console.log(lstImage2);
     // this.state.idImage = idImage1;
      this.state.lstImage = lstImage;
      this.setState({
        lstImage:this.state.lstImage
      });
      //alert(1);
  }
  render() {
    if(this.state.redirectProduct){
      return <Redirect to="/product"/>
    }
    return (
        
        <div className="panel panel-widget forms-panel">
        <div className="progressbar-heading general-heading">
          <h4>Add Images for book:</h4>
        </div>
        <div className="forms">
        
          <div className="form-three widget-shadow">
          <button type="button" onClick={this.addImage}  class="btn btn-warning hvr-grow-rotate" style={{marginLeft: '30px',width:'100px'}}>Add image</button>
            <form className="form-horizontal" onSubmit={this.submit} ref="formSubmit">

            {this.mapImage()}

            
            
            
         
       
      
            <div>
            <Link to="/product" class="btn btn-info hvr-grow-rotate" style={{width:'100px',marginLeft:'163px'}}>Back</Link>
            <button type="submit"  class="btn btn-info hvr-grow-rotate" style={{marginLeft: '30px',width:'100px'}}>Submit</button>
            </div>
           
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddImageDetailComponent;

