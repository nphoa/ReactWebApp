<?php

namespace App\Http\Controllers;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProductByIdCategory(Request $req)
    {
    	//print_r($req->json()->get('idCategory'));

    	$model = new Product();
    	return response()->json(['status'=>'success','data'=>$model->getProductByIdCategory($req->get('idCategory'))]);
    }

    public function getProductById(Request $req)
    {
    	$model = new Product();
    	return response()->json(['status'=>'success','data'=>$model->getProductById($req->get('idProduct'))]);
    }
    public function getAllProduct(Request $req)
    {
        $model = new Product();
        return response()->json(['status'=>'success','data'=>$model->getAllProduct()]);
    }
}
