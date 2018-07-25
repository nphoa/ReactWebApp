<?php

namespace App\Http\Controllers;
use App\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function getAll()
    {
    	$model = new Role();
    	return response()->json(['status'=>'success','data'=>$model->getAll()]);
    }
   
   
}
