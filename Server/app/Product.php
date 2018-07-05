<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use URL;
use App\ProductDetail;
use App\Publisher;
use App\Author;
use App\ReleaseCompany;
use DB;
use App\ProductImage;
class Product extends Model
{
    protected $table='m_products';

    protected $fillable = [
        'product_id', 'product_code', 'product_name','category_id',
        'product_price_base','IsPublic','product_content','product_detail'
    ];
    public function product_detail_relationship()
    {
        return $this->hasOne('App\ProductDetail','id_product','product_id');
    }
    public function product_images_relationship()
    {   
         return $this->hasMany('App\ProductImage','id_product','product_id');
    }
    public function getProductByIdCategory($id)
    {
        //print_r(URL::to('/img').'/sad');
    	$products = Product::where('category_id',$id)->get();
    	foreach ($products as $item) {
            if($item['product_image'])
                $item['product_image'] = URL::to('/img').'/'.$item['product_code'].'/'.$item['product_image'];
        }
        return $products;
    }
    public function getProductById($id)
    {
        $result = null;
        try {
            $product = DB::table('m_products')
                    ->where('m_products.product_id','=',$id)
                    ->leftJoin('m_product_details','m_products.product_id','=','m_product_details.id_product')
                    ->leftJoin('m_authors','m_product_details.id_author','=','m_authors.id')
                    ->leftJoin('m_publishers','m_product_details.id_publisher','=','m_publishers.id')
                    ->leftJoin('m_release_companys','m_product_details.id_release_Company','=','m_release_companys.id')
                    ->select(
                        'm_products.*',
                        'm_authors.name as author',
                        'm_publishers.name as publisher',
                        'm_release_companys.name as release_company',
                        'm_product_details.size as size',
                        'm_product_details.page_number as page_number',
                        'm_product_details.covor_type as covor_type',
                         'm_product_details.release_date as release_date'
                    )
                    ->get();
            $product[0]->product_image = URL::to('/img').'/'.$product[0]->product_code.'/'.$product[0]->product_image;

            $productImage = Product::where('product_id',$id)->first()->product_images_relationship;
            foreach ($productImage as $item) {
                $item->image_name = URL::to('/img').'/'.$product[0]->product_code.'/'.$item->image_name;
            }
            $product[0]->productImage =  $productImage;
            $result =  $product;
        } catch (Exception $e) {
            $result = $e;
        }
        return $result;
    }

    public function getAllProduct()
    {
        $result = null;
        try {
            $product = DB::table('m_products')
                    ->leftJoin('m_product_details','m_products.product_id','=','m_product_details.id_product')
                    ->leftJoin('m_authors','m_product_details.id_author','=','m_authors.id')
                    ->leftJoin('m_publishers','m_product_details.id_publisher','=','m_publishers.id')
                    ->leftJoin('m_release_companys','m_product_details.id_release_Company','=','m_release_companys.id')
                    ->select(
                        'm_products.*',
                        'm_authors.name as author',
                        'm_publishers.name as publisher',
                        'm_release_companys.name as release_company',
                        'm_product_details.size as size',
                        'm_product_details.page_number as page_number',
                        'm_product_details.covor_type as covor_type',
                        'm_product_details.release_date as release_date'
                    )
                    ->get();
      

            foreach ($product as $item) {
                 $item->product_image = URL::to('/img').'/'.$item->product_code.'/'.$item->product_image;
            };
            $result =  $product;
        } catch (Exception $e) {
            $result = $e;
        }
        return $result;
       
    }
}
