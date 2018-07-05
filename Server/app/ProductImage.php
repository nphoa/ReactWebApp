<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class ProductImage extends Model
{
    protected $table='m_product_images';

    protected $fillable = [
        'id_product', 'image_name','image_type'
    ];

    

    
}
