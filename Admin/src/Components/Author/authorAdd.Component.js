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



class AuthorAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        redirectAuthor:false
    };
  }
  componentWillMount(){
    console.log(this.props.match);
  }
  componentDidMount(){
    // if(this.props.categories != null &&  this.props.categories.length == 0){
    //     this.props.getAllCategory();
    // }
    if(this.props.match.params.idAuthor != undefined){
        this.props.getAuthorById(this.props.match.params.idAuthor);
    }
   
  }

  submit = () => {
    let values = this.props.formAuthorAddField.values;
    let fd = new FormData();
    fd.set('author',JSON.stringify(values));
    apiCaller(urls.SAVE_AUTHOR,'POST',fd).then((res)=>{
      if(res.data.data){
        swal("Success!", "Thêm tác giả thành công!", "success");
        this.setState({
            redirectAuthor:true
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
    const {idAuthor} = this.props.match.params;
    if(this.state.redirectAuthor){
        return <Redirect to="/author/1"/>
    } 
    return (
        <div className="panel panel-widget forms-panel">
        <div className="progressbar-heading general-heading">
          <h4>
            {(idAuthor != undefined) ? 
                'Edit author' : 
                'Add new author' }
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
            <Link to="/author/1" onClick={()=>this.props.resetAuthor()}  class="btn btn-info hvr-grow-rotate" style={{width:'100px',marginLeft:'163px'}}>Back</Link>
            <button type="submit" disabled={submitting}  class="btn btn-info hvr-grow-rotate" style={{marginLeft: '30px',width:'100px'}}>Submit</button>
            </div>
           
            </form>
          </div>
        </div>
      </div>
    );
  }

  }




var RF_authorAdd = reduxForm({
  form:'authorAdd',
  enableReinitialize :true,
  
})(AuthorAddComponent);

RF_authorAdd = connect(
  
  state => ({
    initialValues: state.author.authorEditing
  })
)(RF_authorAdd);
export default RF_authorAdd;