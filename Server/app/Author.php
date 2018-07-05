<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;

class Author extends Model
{
    protected $table='m_authors';

    protected $fillable = [
        'name',
    ];

   public function getAll()
   {
   		return Author::all();
   }
    
}
