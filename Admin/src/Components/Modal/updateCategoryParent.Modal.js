import React, { Component } from "react";
import {Modal,Button,Table} from 'react-bootstrap';
import { compose } from "redux";
import callApi from "../../API/apiCaller";
import * as urls from '../../API/URL';
import {Redirect} from 'react-router-dom';
class UpdateCategoryParentModal extends Component {
  constructor(props){
      super(props);
      this.state = {
        idParentCategory:'',
        idCategory:this.props.idCategoryUpdateParent,
        redirectToCategory:false
      }
  }


  showListParent  = (lstCategoryParent) => {
    let result = null;
    result = this.props.lstCategoryParent.map((item,index)=>{
      return (
        <option  key={index} value={item.category_id}>{item.category_name}</option>
      )
    })
    return result;
  }
  onChange = (event) => {
    this.state.idParentCategory = event.target.value;
    this.setState({
      idParentCategory:this.state.idParentCategory
    })
  }
  submitUpdate = (event) => {
    event.preventDefault();
    if(this.state.idParentCategory == "" ){
      this.state.idParentCategory = this.refs.selectDemo.childNodes[0].value;
    }
    let fd = new FormData();
    fd.set('data',JSON.stringify(this.state));
    callApi(urls.UPDATE_CATEGORY_PARENT,'POST',fd).then(res=>{
      if(res.data.data){
        this.state.redirectToCategory = true;
        this.setState({redirectToCategory:this.state.redirectToCategory});
      }
    });
   
  }
  render() {
    if(this.state.redirectToCategory){
      return <Redirect to="/category"/>
    }
    return (
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update category parent</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={this.submitUpdate}>
            <div className="form-group">
              <label>Select category parent</label>
              <select ref="selectDemo" value={this.state.idParentCategory} className="form-control" name="idParentCategory" onChange={this.onChange}>
                {this.showListParent(this.props.lstCategoryParent)}
             
              </select>
              </div>
            <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
     
    );
  }
}

export default UpdateCategoryParentModal;