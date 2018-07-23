<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getAll(Request $req)
    {
    	$model = new User();
    	return response()->json(['status'=>'success','data'=>$model->getAll($req->get('currentPage'))]);
    }
    public function getUserById(Request $req)
    {
    	$model = new User();
    	return response()->json(['status'=>'success','data'=>$model->getUserById($req->get('idUser'))]);
    }
    public function saveUser(Request $req)
    {
        $model = new User();
        $objUser = json_decode($req->get('user'));
        
        foreach ($objUser as $key => $value) {
            $arrayUser[$key] = $value ;
        }
        return response()->json(['status'=>'success','data'=>$model->saveUser($arrayUser)]);

    }

    public function deleteUser(Request $req)
    {
        $model = new User();
        return response()->json(['status'=>'success','data'=>$model->deleteUser($req->get('idUser'))]);
    }
}
