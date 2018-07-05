import React, { Component } from "react";
import * as types from '../Constant/ActionType';
import * as urls from '../API/URL';
import callApi from '../API/apiCaller';
import {Redirect} from 'react-router-dom';
import {WOW} from 'wow.js';
import 'animate.css';
import swal from 'sweetalert';
export default class CheckoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled:true,
      redirect: false,
      checkout:{
          shipmentType:'',
          paymentType:'',
          informationShiping:{
            name_Delivery:'',
            email_Delivery:'',
            address_Delivery:'',
            telephone_Delivery:''
          }
      }
    }
  }
  componentWillMount(){
    this.state.checkout.informationShiping= {}
  }
  componentDidMount(){
    this.props.getAllPaymentType();
    this.props.getAllShipmentType();
  }
  showListPaymentType = (lstPaymentType) =>{
    let result = null;
    let defaultCheck = false;
    result = lstPaymentType.map((item,index)=>{
      defaultCheck = (index == 0) ? true : false;
      return (
        <div className="input-checkbox" key={index}>
        <input type="radio" name="payments" defaultChecked={defaultCheck} value={item.id} onChange={this.handleChangePaymentType} />
        <label htmlFor="payments-1">{item.payment_type_name}</label>
        <div className="caption">
          <p>{item.description}
          </p><p>
          </p></div>
      </div>
      )
    });
    return result;
  }
  showListShipmentType = (lstShipmentType) =>{
    let result = null;
    let defaultCheck = false;
    result = lstShipmentType.map((item,index)=>{
      defaultCheck = (index == 0) ? true : false;
      return (
          <div className="input-checkbox" key={index}>
              <input type="radio" name="shipping" defaultChecked = {defaultCheck} value={item.id} onChange={this.handleChangeShipmentType}/>
                <label htmlFor="shipping-2">{item.shipment_type_name}</label>
                    <div className="caption">
                      <p>{item.description}
                      </p><p>
                    </p>
                </div>
          </div>
      )
    });
    return result;
  }
  handleChange = (event) => {
    if(event.target.value == 1){
      this.state.disabled = false;
      this.setState({
        disabled:false
      });
    }else{
      this.state.disabled = true;
      this.state.checkout.informationShiping = {};
      this.setState({
        disabled:true,
      });
      this.refreshForm();
    }
  }
  refreshForm = () =>{
    this.refs.name_Delivery.value ="";
    this.refs.email_Delivery.value ="";
    this.refs.address_Delivery.value="";
    this.refs.telephone_Delivery.value ="";
  }
  handleChangePaymentType = (event) =>{
    this.state.checkout.paymentType = event.target.value;
  }
  handleChangeShipmentType = (event) =>{
    this.state.checkout.shipmentType = event.target.value;
  }
  handleChangeInformationShiping = (event) => {
      this.state.checkout.informationShiping[event.target.name] = event.target.value;

  }
  onSubmitForm = (event)=>{
    event.preventDefault();
    swal({
      title: "Xác nhận !",
      text: "Bạn có chắc chắn muốn đặt hàng ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.order();
      } else {
        swal("Hủy bỏ !");
      }
    });
  }
  order = () => {
    let userLogin = localStorage.getItem('login');
    if(userLogin != null || userLogin != undefined){
      let objCart = {
        userLogin:JSON.parse(localStorage.getItem('login')),
        cart:this.props.carts,
        checkout:this.state.checkout
      }
      if(this.props.carts.length==0){
        swal("Error!", "Giỏ hàng rỗng!", "error");
        return;
      }
      this.orderCallAPI(objCart);
    }else{
      swal("Warning!", "Bạn phải đăng nhập để có thể đặt hàng nhé !", "warning");
    }
  }
  async orderCallAPI(objCart){
    let res = null ;
    await callApi(urls.ORDER,'POST',objCart).then(data => {
        res = data;
    });
    if(res.data.data == true){
      swal({
        title: "Good job!",
        text: "Bạn đã đặt hàng thành công!",
        icon: "success",
        button: "Ok!!!",
      });
      this.state.redirect = true;
      this.setState({
        redirect:this.state.redirect
      });
    }
 }
  render() {
    const divStyle = {
      backgroundColor:(this.state.disabled) ? '#CCCCCC' : ''
    };
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/home'/>;
    }
    return (
        <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <form id="checkout-form" className="clearfix" onSubmit={this.onSubmitForm}>  
            <div className="col-md-6">
                <div className="billing-details">
                  <p>Already a customer ? <a href="#">Login</a></p>
                    <div className="input-checkbox">
                    <input type="radio" name="informationShipment"  defaultChecked onChange ={this.handleChange} value={0}/>
                    <label style={{paddingRight:'40px'}} htmlFor="payments-1">Chọn thông tin giao hàng mặc định(User)</label>

                    <input type="radio" name="informationShipment" onChange ={this.handleChange} value={1} />
                    <label htmlFor="payments-1">Chọn thông tin giao hàng khác</label>
                    </div>
                  <div className="section-title">
                    <h3 className="title">Nhập thông tin chi tiết</h3>
                  </div>
                  <div className="form-group">
                    <input ref="name_Delivery" disabled={this.state.disabled} style={divStyle}  className="input" type="text" name="name_Delivery" placeholder="Họ tên người nhận" onChange={this.handleChangeInformationShiping} />
                  </div>
                  <div className="form-group">
                    <input ref="email_Delivery" disabled={this.state.disabled} style={divStyle}  className="input" type="email" name="email_Delivery" placeholder="Email" onChange={this.handleChangeInformationShiping}/>
                  </div>
                  <div className="form-group">
                    <input ref="address_Delivery" disabled={this.state.disabled} style={divStyle} className="input" type="text" name="address_Delivery" placeholder="Địa chỉ" onChange={this.handleChangeInformationShiping}/>
                  </div>
                  <div className="form-group">
                    <input ref="telephone_Delivery" disabled={this.state.disabled} style={divStyle} className="input" type="tel" name="telephone_Delivery" placeholder="Số điện thoại" onChange={this.handleChangeInformationShiping}/>
                  </div>
                 
                </div>
              </div>
              <div className="col-md-6">
                <div className="shiping-methods">
                  <div className="section-title">
                    <h4 className="title">Chọn phương thức giao hàng</h4>
                  </div>

                  
                  {this.showListShipmentType(this.props.shipmentType)}
               
             


                </div>
                <div className="payments-methods">
                  <div className="section-title">
                    <h4 className="title">Chọn phương thức thanh toán</h4>
                  </div>
                  
                  {this.showListPaymentType(this.props.paymentType)}

                 

                
                  
                </div>
              </div>
              
              <button type="submit" style={{marginLeft:'400px'}} className="primary-btn">Tiến hành đặt hàng</button>
              
              
            </form>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>



     
    );
  }
}

