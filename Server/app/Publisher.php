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

   public function getAll($currentPage)
   {  
      $itemPerPage = 10;
      $countData = DB::table('m_publishers')->where(['IsDelete'=>0])->count(); 
      if($currentPage == 1){
        $dem = 0;
      }elseif($countData == (((int)$currentPage * $itemPerPage) - $itemPerPage)) {
          $currentPage -= 1;
          $dem = ((int)$currentPage * $itemPerPage) - $itemPerPage;
      }
      else{
        $dem = ((int)$currentPage * $itemPerPage) - $itemPerPage;
      }
      

   		$publishers = Publisher::where(['IsDelete'=>0])
                        ->offset($dem)
                        ->limit($itemPerPage)
                        ->get();
                       
      $countRestData = $countData - ($currentPage * $itemPerPage);
      $result = ['publishers'=>$publishers,'countData'=>$countData,'countRestData'=>$countRestData,'currentPage'=>$currentPage];
      return $result;
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
            $publisher['IsDelete']  = 0;
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
