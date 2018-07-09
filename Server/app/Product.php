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
use File;
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
            if($id  != 0){
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
        }
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
    public function saveProduct($file,$product)
    {
        $result = null;
        DB::beginTransaction();
        try {
            //Insert table m_products
            $queryList = [
                'product_code'      => $product['productCode'],
                'product_name'      => $product['productName'],
                'category_id'       => $product['category_id'],
                'product_price_base'=> $product['productPrice'],
                'product_content'   => $product['product_content'],
                'product_detail'    => $product['product_detail'],
                'IsDelete'          => 0,
                'IsPublic'          => 1,  
                'created_at'        => DB::raw('now()'),
                'updated_at'        =>  DB::raw('now()') 
            ];
            if(File::exists($file)){
                $queryList['product_image'] = $file->getClientOriginalName();
            }
            $idProductAfterInsert = DB::table('m_products')->insertGetId($queryList); 

            //Insert table m_product_details
            DB::table('m_product_details')->insert([
                'id_product'          => $idProductAfterInsert,
                'id_release_Company'  => $product['id_release_Company'],
                'id_publisher'        => $product['id_publisher'],
                'id_author'           => $product['id_author'],
                'size'                => $product['productSize'],
                'page_number'         => $product['productNumberPage'],
                'release_date'        => $product['productReleaseDate'],
                'covor_type'          => $product['productCoverType'],   
                'created_at'          => DB::raw('now()'),
                'updated_at'          => DB::raw('now()')
            ]);
            DB::commit();
            
            //Upload image
            $file->move('img/'.$product['productCode'], $file->getClientOriginalName());

            $result = true;
        } catch (Exception $e) {
            DB::rollBack();
            $result = false;
        }
        return $result;
    }
    public function saveProductImages($idProduct,$file)
    {
        $result = true;
        try {
            $product = Product::where('product_id',$idProduct)->first();
            if($product != null && count($file) > 0){
                foreach ($file as $item) {
                    DB::table('m_product_images')->insert([
                        'id_product'  => $product->product_id,
                        'image_type'  => 'Detail',
                        'image_name'  => $item->getClientOriginalName(),  
                        'created_at'  => DB::raw('now()'),
                        'updated_at'  => DB::raw('now()')
                    ]);
                    $item->move('img/'.$product->product_code, $item->getClientOriginalName());
                }
              }else{
                  $result = false;
              }
          
        } catch (Exception $e) {
             $result = false;
        }
        return $result;
    }
}
