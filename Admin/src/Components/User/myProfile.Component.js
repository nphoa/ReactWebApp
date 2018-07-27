import React, { Component } from "react";
import {Link,Redirect} from 'react-router-dom';
import * as urls from '../../API/URL';
import apiCaller from '../../API/apiCaller';
import swal from 'sweetalert';
import moment from 'moment';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';

import '../../profile.css';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

class MyProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        editProfile:false
    };
    
  }
  editProfile = (event) => {
      event.preventDefault();
      this.setState({
        editProfile:true
      });
     
  }
  cancelEditProfile = (event) => {
    event.preventDefault();
    this.setState({
      editProfile:false
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
  submit = () => {
    let values = this.props.formProfileField.values;
    let fd = new FormData();
    fd.set('user',JSON.stringify(values));
    apiCaller(urls.SAVE_USER,'POST',fd).then((res)=>{
      if(res.data.data){
        swal("Success!", "Update user success!Please login again for information change !", "success");
        this.setState({
            editProfile:false
        });
      }
    });
   
  }
  render(){
      let userLogin = JSON.parse(sessionStorage.getItem('loginUser'));
      let {editProfile} = this.state;
      const { pristine, reset, submitting,valid,handleSubmit } = this.props;
      return(
        
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 toppad">
            <div className="panel panel-info">
            <form className="form-horizontal" onSubmit={handleSubmit(this.submit.bind(this))}>
              <div className="panel-heading">
                <h3 className="panel-title">{userLogin.name}</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" src={'../../images/boy.png'} className="img-circle img-responsive" /> </div>
                  <div className=" col-md-9 col-lg-9 "> 
                    <table className="table table-user-information">
                      <tbody>
                        <tr>
                          <td>Name:</td>
                          <td>
                            {editProfile && 
                                <Field name="name" type="text" component={this.renderField} validate={[required]} />
                            } 
                            {!editProfile && 
                                <p>{userLogin.name}</p>
                            } 
                          </td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>nphoa@gmail.com</td>
                        </tr>
                        
                        <tr>
                          <td>Address</td>
                          <td>
                          {editProfile && 
                            <Field className="form-control" name="address" type="input" component="textarea" cols={40} rows={3}/>
                          } 
                          {!editProfile && 
                            <p>{userLogin.address}</p>
                          } 
                          
                          </td>
                        </tr>
                       
                        <tr>
                           <td>Phone Number</td>
                           <td>
                           {editProfile && 
                            <Field name="phone" type="text" component={this.renderField} />
                           } 
                           {!editProfile && 
                                <p>{userLogin.phone}</p>
                            }
                             
                           </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="panel-footer">
                <a data-original-title="Change password" data-toggle="tooltip" type="button" className="btn btn-sm btn-primary"><i className="glyphicon glyphicon-pencil" /></a>
                <span className="pull-right">
                  {!editProfile &&
                    <a style={{marginRight:'8px'}} href="" onClick={this.editProfile} data-original-title="Edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-edit" /></a>
                  }
                
                  {editProfile && 
                    <a style={{marginRight: '10px'}} onClick={this.cancelEditProfile} data-original-title="Cancel edit this user" data-toggle="tooltip" type="button" className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-remove" /></a>
                  }
                  {editProfile && 
                    <button type="submit" disabled={submitting}  class="btn btn-info hvr-grow-rotate">Submit</button>
                  }
                </span>
              </div>
              </form>
            </div>
          </div>
    
      )
  }
}

//export default MyProfileComponent
const mapStateToProps = (state) => {
    return{
      formProfileField:state.form.myProfile
    }

}
var RF_myProfile = reduxForm({
    form:'myProfile',
    enableReinitialize :true,
    
  })(MyProfileComponent);
  
  RF_myProfile = connect(
    
    state => ({
      initialValues: state.login.userLogin,
    })
  )(RF_myProfile);

  RF_myProfile = connect(mapStateToProps)(RF_myProfile);
  export default RF_myProfile;