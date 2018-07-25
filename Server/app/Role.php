<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use DB;
class Role extends Model
{
    protected $table='m_roles';

    protected $fillable = [
        'name','description'
    ];

   public function getAll()
   {
      return Role::all();
   }
    
}
