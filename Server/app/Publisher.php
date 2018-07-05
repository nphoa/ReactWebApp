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
    
}
