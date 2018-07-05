<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use Illuminate\Support\Facades\DB;
use App\Status;
class Order extends Model
{
    protected $table='t_orders';

    protected $fillable = [
        'order_code','order_date','order_status','customer_id','total_price','shipment_id','payment_id'
    ];

    public function sum_amount_cart($cart)
    {
    	$sum = 0;
    	foreach ($cart as $key => $value) {
    		$sum += ($value['product']['product_price_base'] * $value['quantity']);
    	}
    	return $sum;

    }
    public function order($userLogin,$cart,$checkout)
    {
    	$result = null;
    	DB::beginTransaction();
    	try {
    		$modelStatus = new Status();
    		//Insert table t_payments
    		$idPaymentAfterInsert = DB::table('t_payments')->insertGetId([
    			'payment_type_id' => $checkout['paymentType'],
    			'payment_amout'  => $this->sum_amount_cart($cart),
    			'payment_date' 	  =>  DB::raw('now()'),
    			'payment_status'  => $modelStatus->getStatusByType('Payment',1), 
    			'payment_amount_paid' => 0,
    			'create_user' => 1,
    			'update_user' => 1,
    			'created_at'  => DB::raw('now()'),
    			'updated_at'  =>  DB::raw('now()') 
    		]);
    		//Insert table t_shipments
    		$queryList = [
    			'customer_id' 	   => $userLogin['id'],
    			'delivery_status'  => $modelStatus->getStatusByType('Shipment',1),
    			'date_check_out'   => DB::raw('now()'),
    			'date_delivery'    => DB::raw('now()'),
    			'create_user' 	   => 1,
    			'update_user'      => 1,
    			'created_at'       => DB::raw('now()'),
    			'updated_at'       => DB::raw('now()')
    		];
    		if (count($checkout['informationShiping']) > 0) {
    			$queryList['address_delivery'] = $checkout['informationShiping']['address_Delivery'];
    			$queryList['phone_number_delivery'] = $checkout['informationShiping']['telephone_Delivery'];
    			$queryList['name_delivery'] = $checkout['informationShiping']['name_Delivery'];
    			$queryList['email_delivery'] = $checkout['informationShiping']['email_Delivery'];
    		};
    		$idShipmentAfterInsert = DB::table('t_shipments')->insertGetId($queryList);

    		//Insert table t_orders
    		$idOrderAfterInsert = DB::table('t_orders')->insertGetId([
    			'order_code' 	=> 'ORDER_01',
    			'order_date'  	=> DB::raw('now()'),
    			'order_status' 	=> $modelStatus->getStatusByType('Order',1),
    			'customer_id'   => $userLogin['id'], 
    			'total_price'   => $this->sum_amount_cart($cart),
    			'shipment_id'   => $idShipmentAfterInsert,
    			'payment_id'    => $idPaymentAfterInsert,
    			'create_user'   => $userLogin['id'],
    			'update_user'   => $userLogin['id'],
    			'created_at'    => DB::raw('now()'),
    			'updated_at'    => DB::raw('now()')
    		]);
    		//Insert table t_order_details
    		foreach ($cart as $key => $value) {
    			DB::table('t_order_details')->insert([
    				'order_id' 	  	  => $idOrderAfterInsert,
    				'product_id'      => $value['product']['product_id'],
    				'product_price'	  => $value['product']['product_price_base'],
    				'product_quantity'=> $value['quantity'],
    				'product_total'   => $value['product']['product_price_base'] * $value['quantity'],
    				'create_user'     => $userLogin['id'],
    				'update_user'     => $userLogin['id'],
    				'created_at'      => DB::raw('now()'),
    				'updated_at'      => DB::raw('now()')
    			]);
    		}
    		DB::commit();
    		$result = true;
    	} catch (Exception $e) {
    		DB::rollBack();
    		$result = false;
    	}
    	return $result;
    }
   
    
}
