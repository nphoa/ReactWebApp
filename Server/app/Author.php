<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use DB;
class Author extends Model
{
    protected $table='m_authors';

    protected $fillable = [
        'name',
    ];

   public function getAll($currentPage)
   {
   		//return Author::where(['IsDelete'=>0])->get();
      $itemPerPage = 4;
      $countData = DB::table('m_authors')->where(['IsDelete'=>0])->count(); 
      if($currentPage == 1){
        $dem = 0;
      }elseif($countData == (((int)$currentPage * $itemPerPage) - $itemPerPage)) {
          $currentPage -= 1;
          $dem = ((int)$currentPage * $itemPerPage) - $itemPerPage;
      }
      else{
        $dem = ((int)$currentPage * $itemPerPage) - $itemPerPage;
      }
      

      $authors = Author::where(['IsDelete'=>0])
                        ->offset($dem)
                        ->limit($itemPerPage)
                        ->get();
                       
      $countRestData = $countData - ($currentPage * $itemPerPage);
      $result = ['authors'=>$authors,'countData'=>$countData,'countRestData'=>$countRestData,'currentPage'=>$currentPage];
      return $result;
   }
    public function getAuthorById($id)
   {
   		$result = null;
        try {
            $result = DB::table('m_authors')
                        ->where(['id'=> $id,'IsDelete'=>0])
                        ->first();
        } catch (Exception $e) {
            $result = $e;
        }
        return $result;
   }
   public function saveAuthor($author)
   {
     $result = false;
     try {
        if($author['id'] == 0){
        	$author['IsDelete']    = 0;
            $author['created_at']  = DB::raw('now()');
            $author['updated_at']  = DB::raw('now()');
            DB::table('m_authors')->insert($author);
        }else{
             DB::table('m_authors')->where('id',$author['id'])
                                      ->update($author);
        }
        $result = true;
     } catch (Exception $e) {
        $result = false;
     }
     return $result;
   }
   public function deleteAuthor($id)
    {
        $result = false;
        try {
            $result = DB::table('m_authors')
                        ->where('id',$id)
                        ->update(['IsDelete'=>1]);
            $result = true;             
        } catch (Exception $e) {
            $result = false;
        }
        return $result;
    } 
}
