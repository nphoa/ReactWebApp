<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;

class Publisher extends Model
{
    protected $table='m_publishers';

    protected $fillable = [
        'name',
    ];

   public function getAll()
   {
   		return Publisher::all();
   }
   public function getPublisherById($d)
   {
   		$result = null;
        try {
            $result = DB::table('m_publishers')
                        ->where('id',$id)
                        ->first();
        } catch (Exception $e) {
            $result = $e;
        }
        return $result;
   }
    
}
