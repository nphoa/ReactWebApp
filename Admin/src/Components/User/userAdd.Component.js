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
// let confirmPassword = (value) => {
//     console.log(this.ref.Input_password);
// }


class UserAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        redirectUsers:false
    };
    this.Input_password = React.createRef();
  }
  
  validateConfirmPassword = (value) => {
    return (value == this.Input_password.current.value) ? undefined : 'Password confirm';
  }
  componentDidMount(){
    this.props.getAllRole();
    // if(this.props.categories != null &&  this.props.categories.length == 0){
    //     this.props.getAllCategory();
    // }
    if(this.props.match.params.idUser != undefined){
        this.props.getUserById(this.props.match.params.idUser);
    }
   
  }

  submit = () => {
    let values = this.props.formUserAddField.values;
    //console.log(values);
    let fd = new FormData();
    fd.set('user',JSON.stringify(values));
    apiCaller(urls.SAVE_USER,'POST',fd).then((res)=>{
      if(res.data.data){
        swal("Success!", "Thêm user thành công!", "success");
        this.setState({
            redirectUsers:true
        });
      }
    });
   
  }
  renderField = ({input,type,ref,meta:{ touched, error, warning}}) => {
    return (
      <div>
        <input {...input} type={type} ref={ref} className="form-control" />
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
  showListRole = (roles) => {
    let result = null;
     if(roles!=null){
      result  = roles.map((item,index)=>{
        return (
            <option value={item.id} key={index+1}>{item.name}</option>
        )
      });
     }
    return result;
  }
  render() {
    const { pristine, reset, submitting,valid,handleSubmit } = this.props;
    const {idUser} = this.props.match.params;
    let showFormLogin = (idUser == undefined) ? true : false;
    if(this.state.redirectUsers){
        return <Redirect to="/users/1"/>
    } 
    return (
        <div className="panel panel-widget forms-panel">
        <div className="progressbar-heading general-heading">
          <h4>
            {(idUser != undefined) ? 
                'Edit user' : 
                'Add new user' }
          </h4>
        </div>
        <div className="forms">
          <div className="form-three widget-shadow">
            <form className="form-horizontal" onSubmit={handleSubmit(this.submit.bind(this))}>
            
            {showFormLogin && 
                
                <div class="panel panel-info" style={{padding:'0px'}}>
                <div class="panel-heading">Information login</div>
                <div class="panel-body">
                    <br/>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-8">
                            <Field name="email" type="text" component={this.renderField} validate={[required]}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-8">
                            <Field name="password" type="password" component={this.renderField} validate={[required]} ref={this.Input_password}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Password confirm</label>
                        <div className="col-sm-8">
                            <Field name="password_confirm" type="password" component={this.renderField} validate={[this.validateConfirmPassword]}/>
                        </div>
                    </div>
                </div>
            </div>
        
            }
            
            
            <div class="panel panel-info" style={{padding:'0px'}}>
                <div class="panel-heading">Information common</div>
                <div class="panel-body">
                    <br/>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-8">
                            <Field name="name" type="text" component={this.renderField} validate={[required]}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Phone</label>
                        <div className="col-sm-8">
                            <Field name="phone" type="text" component={this.renderField}   />
                        </div>
                    </div>
                  
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Address</label>
                          <div className="col-sm-8">
                          <Field className="form-control" name="address" type="input" component="textarea" cols={40} rows={3}/>
                      </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Number sort</label>
                        <div className="col-sm-8">
                            <Field name="sort" type="number" component={this.renderField}   />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="selector1" className="col-sm-2 control-label">Role</label>
                        <div className="col-sm-8">
                            <Field name="roleId" component={this.renderFieldSelect} validate={[requiredSelect]}>
                            <option value={0}>Please choose user role !</option>
                            {this.showListRole(this.props.roles)}
                            </Field>
                        </div>
                    </div>
                    
                </div>
            </div>
             
       
            <div>
            <Link to="/users/1" onClick={()=>this.props.resetUser()}  class="btn btn-info hvr-grow-rotate" style={{width:'100px',marginLeft:'163px'}}>Back</Link>
            <button type="submit" disabled={submitting}  class="btn btn-info hvr-grow-rotate" style={{marginLeft: '30px',width:'100px'}}>Submit</button>
            </div>
           
            </form>
          </div>
        </div>
      </div>
    );
  }

  }




var RF_userAdd = reduxForm({
  form:'userAdd',
  enableReinitialize :true,
  
})(UserAddComponent);

RF_userAdd = connect(
  
  state => ({
    initialValues: state.user.userEditing
  })
)(RF_userAdd);
export default RF_userAdd;