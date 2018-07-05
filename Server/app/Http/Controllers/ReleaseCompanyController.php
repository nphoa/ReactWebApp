<?php

namespace App\Http\Controllers;
use App\ReleaseCompany;
use Illuminate\Http\Request;

class ReleaseCompanyController extends Controller
{
    public function getAll()
    {
    	$model = new ReleaseCompany();
    	return response()->json(['status'=>'success','data'=>$model->getAll()]);
    }
}
