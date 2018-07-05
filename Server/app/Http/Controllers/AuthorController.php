<?php

namespace App\Http\Controllers;
use App\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    public function getAll()
    {
    	$model = new Author();
    	return response()->json(['status'=>'success','data'=>$model->getAll()]);
    }
}
