<?php

namespace App\Http\Controllers;
use App\ShipmentType;
use Illuminate\Http\Request;

class ShipmentTypeController extends Controller
{
    public function getAll()
    {
    	$model = new ShipmentType();
    	return response()->json(['status'=>'success','data'=>$model->getAll()]);
    }

    
}
