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

    public function getReleaseCompanyById(Request $req)
    {
    	$model = new ReleaseCompany();
    	return response()->json(['status'=>'success','data'=>$model->getReleaseCompanyById($req->get('idReleaseCompany'))]);
    }
    public function saveReleaseCompany(Request $req)
    {
        $model = new ReleaseCompany();
        $objReleaseCompany = json_decode($req->get('releaseCompany'));
        
        foreach ($objReleaseCompany as $key => $value) {
            $arrayReleaseCompany[$key] = $value ;
        }
        return response()->json(['status'=>'success','data'=>$model->saveReleaseCompany($arrayReleaseCompany)]);

    }

    public function deleteReleaseCompany(Request $req)
    {
        $model = new ReleaseCompany();
        return response()->json(['status'=>'success','data'=>$model->deleteReleaseCompany($req->get('idReleaseCompany'))]);
    }
}
