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

   public function getAll()
   {
   		return Author::where(['IsDelete'=>0])->get();
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
