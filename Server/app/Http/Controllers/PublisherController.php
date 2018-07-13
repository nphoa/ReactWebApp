<?php

namespace App\Http\Controllers;
use App\Publisher;
use Illuminate\Http\Request;

class PublisherController extends Controller
{
    public function getAll()
    {
    	$model = new Publisher();
    	return response()->json(['status'=>'success','data'=>$model->getAll()]);
    }
    public function getPublisherById(Request $req)
    {
    	$model = new Publisher();
    	return response()->json(['status'=>'success','data'=>$model->getPublisherById($req->get('idPublisher'))]);
    }
}
