<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use DB;
class ReleaseCompany extends Model
{
    protected $table='m_release_companys';

    protected $fillable = [
        'name',
    ];

   public function getAll()
   {
   		return ReleaseCompany::where(['IsDelete'=>0])->orderBy('sort','desc')->get();
   }

   public function getReleaseCompanyById($id)
   {
   		$result = null;
        try {
            $result = DB::table('m_release_companys')
                        ->where(['id'=> $id,'IsDelete'=>0])
                        ->first();
        } catch (Exception $e) {
            $result = $e;
        }
        return $result;
   }
   public function saveReleaseCompany($releaseCompany)
   {
     $result = false;
     try {
        if($releaseCompany['id'] == 0){
            $releaseCompany['created_at']  = DB::raw('now()');
            $releaseCompany['updated_at']  = DB::raw('now()');
            $releaseCompany['IsDelete']  = 0;
            DB::table('m_release_companys')->insert($releaseCompany);
        }else{
             DB::table('m_release_companys')->where('id',$releaseCompany['id'])
                                      ->update($releaseCompany);
        }
        $result = true;
     } catch (Exception $e) {
        $result = false;
     }
     return $result;
   }
   public function deleteReleaseCompany($id)
    {
        $result = false;
        try {
            $result = DB::table('m_release_companys')
                        ->where('id',$id)
                        ->update(['IsDelete'=>1]);
            $result = true;             
        } catch (Exception $e) {
            $result = false;
        }
        return $result;
    } 
    
}
