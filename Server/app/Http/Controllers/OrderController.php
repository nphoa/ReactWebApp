<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Status;
use App\Order;
class OrderController extends Controller
{
    public function order(Request $req)
    {
    	$userLogin = $req->json()->get('userLogin');
    	$cart = $req->json()->get('cart');
    	$checkout = $req->json()->get('checkout');
    	//$Obj_Checkout = (object)$checkout;
    	//$Obj_cart = (object)$cart;
		$modelOrder = new Order();
    	$result = $modelOrder->order($userLogin,$cart,$checkout);
    	return response()->json(['status'=>'success','data'=>$result]);
    }

    
}
