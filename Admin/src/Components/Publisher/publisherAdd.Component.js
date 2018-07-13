import React, { Component } from "react";
import {Field,reduxForm} from 'redux-form';
import axios from 'axios';
import apiCaller from '../../API/apiCaller';
import * as urls from '../../API/URL';
import {Redirect,Link} from 'react-router-dom';
import swal from 'sweetalert';
import {connect} from 'react-redux';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const requiredSelect = value => (typeof value === 'number' || value > 0 ? undefined : 'Required Select')



class PublisherAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        redirectPublisher:false
    };
  }
  
  componentDidMount(){
    // if(this.props.categories != null &&  this.props.categories.length == 0){
    //     this.props.getAllCategory();
    // }
    if(this.props.match.params.idCategory != undefined){
        this.props.getCategoryById(this.props.match.params.idCategory);
    }
   
  }




  showListCategoryParent = (categories) => {
    let result = null;
    result  = categories.map((item,index)=>{
        return (
            <option value={item.category_id} key={index}>{item.category_name}</option>
        )
    });
    return result;
  }

  submit = () => {
    let values = this.props.formCategoryAddField.values;
    values.category_parrent_id = this.props.match.params.idParent;
    let fd = new FormData();
    fd.set('category',JSON.stringify(values));
    apiCaller(urls.SAVE_CATEGORY,'POST',fd).then((res)=>{
      if(res.data.data){
        swal("Success!", "Thêm sản danh mục thành công!", "success");
        this.state.redirectCategory = true;
        this.setState({
            redirectCategory:this.state.redirectCategory
        });
      }
    });
   
  }
  renderField = ({input,type,meta:{ touched, error, warning}}) => {
    return (
      <div>
        <input {...input} type={type}  className="form-control" />
        {touched &&
          ((error && <span style={{color:'red'}}>{error}</span>))}
      </div>
    )
  }


  render() {
    const { pristine, reset, submitting,valid,handleSubmit } = this.props;
    const {idPublisher} = this.props.match.params;
    if(this.state.redirectPublisher){
        return <Redirect to="/publisher"/>
    } 
    return (
        <div className="panel panel-widget forms-panel">
        <div className="progressbar-heading general-heading">
          <h4>
            {(idPublisher != undefined) ? 
                'Edit publisher' : 
                'Add new publisher' }
          </h4>
        </div>
        <div className="forms">
          <div className="form-three widget-shadow">
            <form className="form-horizontal" onSubmit={handleSubmit(this.submit.bind(this))}>

              <div className="form-group">
                <label className="col-sm-2 control-label">Name</label>
                <div className="col-sm-8">
                <Field name="name" type="text" component={this.renderField} validate={[required]}/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-2 control-label">Description</label>
                <div className="col-sm-8">
                <Field className="form-control" name="description" type="input" component="textarea" cols={40} rows={3}/>
                </div>
              </div>

              <div className="form-group">
              <label className="col-sm-2 control-label">Number sort</label>
              <div className="col-sm-8">
                  <Field name="sort" type="number" component={this.renderField}   />
              </div>
            </div>
              
           
            
          
       
            <div>
            <Link to="/category" onClick={()=>this.props.resetPublisher()}  class="btn btn-info hvr-grow-rotate" style={{width:'100px',marginLeft:'163px'}}>Back</Link>
            <button type="submit" disabled={submitting}  class="btn btn-info hvr-grow-rotate" style={{marginLeft: '30px',width:'100px'}}>Submit</button>
            </div>
           
            </form>
          </div>
        </div>
      </div>
    );
  }

  }




var RF_publisherAdd = reduxForm({
  form:'publisherAdd',
  enableReinitialize :true,
  
})(PublisherAddComponent);

RF_publisherAdd = connect(
  
  state => ({
    initialValues: state.publisher.publisherEditing
  })
)(RF_publisherAdd);
export default RF_publisherAdd;