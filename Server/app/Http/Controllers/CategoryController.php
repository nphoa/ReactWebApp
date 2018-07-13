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
    public function getCategoryById(Request $req)
    {
        $model = new Category();
        return response()->json(['status'=>'success','data'=>$model->getCategoryById($req->get('idCategory'))]);
    }
    public function saveCategory(Request $req)
    {
        $model = new Category();
        $objCategory = json_decode($req->get('category'));
        
        foreach ($objCategory as $key => $value) {
            $arrayCategory[$key] = $value ;
        }
        return response()->json(['status'=>'success','data'=>$model->saveCategory($arrayCategory)]);
        //print_r()->category_name);
    }
    public function deleteCategory(Request $req)
    {
        $model = new Category();
        return response()->json(['status'=>'success','data'=>$model->deleteCategory($req->get('idCategory'))]);
    }
    public function updateCategoryParent(Request $req)
    {
        $model = new Category();
        //print_r(json_decode($req->get('data')));
         return response()->json(['status'=>'success','data'=>$model->updateCategoryParent(json_decode($req->get('data')))]);
    }
}
