<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class ProductDetail extends Model
{
    protected $table='m_product_details';

    protected $fillable = [
        'id_product', 'id_release_Company','id_publisher','id_author','size','page_number','release_date','covor_type'
    ];

    public function ProductDetail()
    {
        return $this->belongsTo('App\Product','id_product','product_id');
    }

    public function test()
    {
        $detail = ProductDetail::find(1)->first();
        return $detail->ProductDetail;
    }
    
}
