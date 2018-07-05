<?php

namespace App\Http\Controllers;
use App\PaymentType;
use Illuminate\Http\Request;

class PaymentTypeController extends Controller
{
    public function getAll()
    {
    	$model = new PaymentType();
    	return response()->json(['status'=>'success','data'=>$model->getAll()]);
    }

    
}
