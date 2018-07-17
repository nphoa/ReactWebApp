<?php

namespace App\Http\Controllers;
use App\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function getAll(Request $req)
    {
    	$model = new Author();
    	return response()->json(['status'=>'success','data'=>$model->getAll($req->get('currentPage'))]);
    }
    public function getAuthorById(Request $req)
    {
    	$model = new Author();
    	return response()->json(['status'=>'success','data'=>$model->getAuthorById($req->get('idAuthor'))]);
    }
    public function saveAuthor(Request $req)
    {
        $model = new Author();
        $objAuthor = json_decode($req->get('author'));
        
        foreach ($objAuthor as $key => $value) {
            $arrayAuthor[$key] = $value ;
        }
        return response()->json(['status'=>'success','data'=>$model->saveAuthor($arrayAuthor)]);

    }

    public function deleteAuthor(Request $req)
    {
        $model = new Author();
        return response()->json(['status'=>'success','data'=>$model->deleteAuthor($req->get('idAuthor'))]);
    }
}
