<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use Illuminate\Support\Facades\DB;

class ShipmentType extends Model
{
    protected $table='m_shipment_types';

    protected $fillable = [
        'shipment_type_name','IsDelete','description'
    ];

   	public function getAll()
   	{
   		return DB::table('m_shipment_types')->get();
   	}
    
}
