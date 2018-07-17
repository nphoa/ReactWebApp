<?php

namespace App\Http\Controllers;
use App\Publisher;
use Illuminate\Http\Request;

class PublisherController extends Controller
{
    public function getAll(Request $req)
    {
    	$model = new Publisher();
    	return response()->json(['status'=>'success','data'=>$model->getAll($req->get('currentPage'))]);
    }
    public function getPublisherById(Request $req)
    {
    	$model = new Publisher();
    	return response()->json(['status'=>'success','data'=>$model->getPublisherById($req->get('idPublisher'))]);
    }
    public function savePublisher(Request $req)
    {
        $model = new Publisher();
        $objPublisher = json_decode($req->get('publisher'));
        
        foreach ($objPublisher as $key => $value) {
            $arrayPublisher[$key] = $value ;
        }
        return response()->json(['status'=>'success','data'=>$model->savePublisher($arrayPublisher)]);

    }

    public function deletePublisher(Request $req)
    {
        $model = new Publisher();
        return response()->json(['status'=>'success','data'=>$model->deletePublisher($req->get('idPublisher'))]);
    }
}
