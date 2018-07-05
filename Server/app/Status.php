<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use Illuminate\Support\Facades\DB;

class Status extends Model
{
    protected $table='m_status';

    protected $fillable = [
        'id','type','status','description'
    ];

   	public function getStatusByType($type,$status)
   	{
   		return DB::table('m_status')
   					->where(['type'=>$type,'status'=>$status])
   					->first()->id;
   	}
    
}
