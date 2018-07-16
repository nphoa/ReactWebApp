<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use DB;
class Publisher extends Model
{
    protected $table='m_publishers';

    protected $fillable = [
        'name',
    ];

   public function getAll()
   {
   		return Publisher::where(['IsDelete'=>0])->get();
   }
   public function getPublisherById($id)
   {
   		$result = null;
        try {
            $result = DB::table('m_publishers')
                        ->where(['id'=> $id,'IsDelete'=>0])
                        ->first();
        } catch (Exception $e) {
            $result = $e;
        }
        return $result;
   }
   public function savePublisher($publisher)
   {
     $result = false;
     try {
        if($publisher['id'] == 0){
            $publisher['created_at']  = DB::raw('now()');
            $publisher['updated_at']  = DB::raw('now()');
            DB::table('m_publishers')->insert($publisher);
        }else{
             DB::table('m_publishers')->where('id',$publisher['id'])
                                      ->update($publisher);
        }
        $result = true;
     } catch (Exception $e) {
        $result = false;
     }
     return $result;
   }
   public function deletePublisher($id)
    {
        $result = false;
        try {
            $result = DB::table('m_publishers')
                        ->where('id',$id)
                        ->update(['IsDelete'=>1]);
            $result = true;             
        } catch (Exception $e) {
            $result = false;
        }
        return $result;
    }
    
}
