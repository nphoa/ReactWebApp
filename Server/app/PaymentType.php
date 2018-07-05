<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use Illuminate\Support\Facades\DB;
class PaymentType extends Model
{
    protected $table='m_payment_types';

    protected $fillable = [
        'payment_type_name','IsDelete','description'
    ];

   	public function getAll()
   	{
   		return DB::table('m_payment_types')->get();
   	}

    
}
