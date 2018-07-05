import * as types from "../Constant/ActionType";

// import * as api from '../API/Product';

var initialState = [

];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      let objfind = state.find((item)=>{
        return item.product.product_id === action.product.product_id;
      })
      if(objfind === undefined || objfind === null){
        state.push({product:action.product,quantity:parseInt(action.quantity)});
        return [...state];
      }
      objfind.quantity += parseInt(action.quantity);
      return [...state];
      break;
    case types.REMOVE_PRODUCT_FROM_CART:
      const index = state.findIndex((item)=>{
        return item.product.product_id === action.product.product_id;
      });
      state.splice(index,1);
      return [...state];
      break;
    case types.UPDATE_QUANTITY_PRODUCT_FROM_CART:
    let objfind1 = state.find((item)=>{
      return item.product.product_id === action.cart.product.product_id;
    });
    objfind1.quantity = action.quantity;
    return [...state];
    break;
    default:
      //console.log(api.getAllProduct());
      return [...state];
      break;
  }
};

export default myReducer;
