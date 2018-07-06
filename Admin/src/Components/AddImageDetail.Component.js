import React, { Component } from "react";
import '../demo.css';
import ImageUploadAndReviewComponent from '../Components/ImageUploadAndReview.Component';
import {Link} from 'react-router-dom';
class AddImageDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idImage:1,
        lstImage:[1],
        lstImageSubmit:[]
    };
  }
  
  componentWillMount(){
      console.log(this.state.lstImage);
  }
  submit = () => {
      alert('1');
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
    console.log(file);
    let {lstImageSubmit} = this.state;
    lstImageSubmit.push(file);
    this.state.lstImageSubmit = lstImageSubmit;
    this.setState({
        lstImageSubmit : this.state.lstImageSubmit
    });
    console.log(lstImageSubmit);
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
    return (
        
        <div className="panel panel-widget forms-panel">
        <div className="progressbar-heading general-heading">
          <h4>Add Images for book:</h4>
        </div>
        <div className="forms">
        
          <div className="form-three widget-shadow">
          <button type="button" onClick={this.addImage}  class="btn btn-warning hvr-grow-rotate" style={{marginLeft: '30px',width:'100px'}}>Add image</button>
            <form className="form-horizontal" onSubmit={this.submit}>

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

