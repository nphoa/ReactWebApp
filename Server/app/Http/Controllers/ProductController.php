<?php

namespace App\Http\Controllers;
use App\Product;
use Illuminate\Http\Request;
use File;
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
    public function uploadImage(Request $req)
    {
        
        if ($req->hasFile('image')) {
            $file = $req->file('image');
            //print_r($req->file('image'));
            print_r('Tên Files: ' . $file->getClientOriginalName());
            

            //Lấy Đuôi File
            print_r('Đuôi file: ' . $file->getClientOriginalExtension());
           

            //Lấy đường dẫn tạm thời của file
            print_r('Đường dẫn tạm: ' . $file->getRealPath());
            

            //Lấy kích cỡ của file đơn vị tính theo bytes
            print_r('Kích cỡ file: ' . $file->getSize());
            
             $file->move('img', $file->getClientOriginalName());
           
             
        }
        return "true";
    }
    public function saveProduct(Request $req)
    {
        
         $file = $req->file('image');
         $product = json_decode($req->get('product'), true);
         $model = new Product();
         $result = $model->saveProduct($file,$product);
         // if(File::exists($file)){
         //    print_r($file);
         // }
         return response()->json(['status'=>'success','data'=>$result]);
         
    }
}
