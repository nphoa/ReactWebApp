import React, { Component } from "react";
import '../demo.css';

class ImageUploadAndReviewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        file: '',
        imagePreviewUrl: ''
    };
  }
  


  handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
   
    reader.onload = (e) => {
        // The file's text will be printed here
        //console.log(e.target.result);
        this.state.imagePreviewUrl = e.target.result;
        this.setState({
            imagePreviewUrl:this.state.imagePreviewUrl
        });
    };
    reader.readAsDataURL(file);
    
    this.props.getFile(file);
  }
  


  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <div className="imgPreview">
            <img style={{width:'200px',height:'230px'}} src={imagePreviewUrl} />
        </div>
         
        );
    } 

    return (
      <div className="previewComponent">
          <input className="fileInput" 
            type="file"
            name="iamges[]"
            multiple 
            onChange={(e)=>this.handleImageChange(e)} />
      
        
          {$imagePreview}
        
      </div>
    )
  }
}

export default ImageUploadAndReviewComponent;

