<?php

namespace App\Http\Controllers;
use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function all()
    {
    	$model = new Category();
    	return response()->json(['status'=>'success','data'=>$model->getAll()]);
    }

    public function allV2()
    {
    	$model = new Category();
    	return response()->json(['status'=>'success','data'=>$model->getAllV2()]);
    }
}
