<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;

class ReleaseCompany extends Model
{
    protected $table='m_release_companys';

    protected $fillable = [
        'name',
    ];

   public function getAll()
   {
   		return ReleaseCompany::all();
   }
    
}
