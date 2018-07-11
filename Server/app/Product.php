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
                    ->leftJoin('m_categories','m_products.category_id','=','m_categories.category_id')
                    ->select(
                        'm_products.*',
                        'm_authors.name as author',
                        'm_product_details.id_author as id_author',
                        'm_product_details.id_publisher as id_publisher',
                        'm_product_details.id_release_Company as id_release_Company',
                        'm_categories.category_parrent_id as category_parent_id',
                        'm_publishers.name as publisher',
                        'm_release_companys.name as release_company',
                        'm_product_details.size as size',
                        'm_product_details.page_number as page_number',
                        'm_product_details.covor_type as covor_type',
                         'm_product_details.release_date as release_date'
                    )
                    ->first();
            $product->product_image = URL::to('/img').'/'.$product->product_code.'/'.$product->product_image;

            $productImage = Product::where('product_id',$id)->first()->product_images_relationship;
            foreach ($productImage as $item) {
                $item->image_name = URL::to('/img').'/'.$product->product_code.'/'.$item->image_name;
            }
            $product->productImage =  $productImage;
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
            $product = DB::table('m_products')->where('IsDelete',0)
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
        $objProduct = (object)$product;
        $result = null;
        DB::beginTransaction();
        try {
            //Insert table m_products
            $queryList = [
                'product_code'      => $product['product_code'],
                'product_name'      => $product['product_name'],
                'category_id'       => $product['category_id'],
                'product_price_base'=> $product['product_price_base'],
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

            $queryListProductDetail = [
                'id_release_Company'  => $product['id_release_Company'],
                'id_publisher'        => $product['id_publisher'],
                'id_author'           => $product['id_author'],
                'size'                => $product['size'],
                'page_number'         => $product['page_number'],
                'release_date'        => $product['release_date'],
                'covor_type'          => $product['covor_type'],   
                'created_at'          => DB::raw('now()'),
                'updated_at'          => DB::raw('now()')
            ];
            if($objProduct->product_id==0){
                //Add New
                //Insert table m_product
                $idProductAfterInsert = DB::table('m_products')->insertGetId($queryList);
                //Insert table m_product_details
                $queryListProductDetail['id_product'] = $idProductAfterInsert;
                DB::table('m_product_details')->insert($queryListProductDetail); 
            }else{
                //Edit
                //Save table m_product
                DB::table('m_products')
                        ->where('product_id', $objProduct->product_id)
                        ->update($queryList);
                //Save table m_product_details  
                DB::table('m_product_details')
                        ->where('id_product', $objProduct->product_id)
                        ->update($queryListProductDetail);
            }
            //Upload image
            if(File::exists($file)){
                 $file->move('img/'.$product['product_code'], $file->getClientOriginalName());
            }
            DB::commit();
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
    public function deleteProduct($idProduct)
    {
        $result = false;
        try {
            $rowEffect = DB::table('m_products')
                        ->where('product_id', $idProduct)
                        ->update(['IsDelete'=>1]);
          
        if($rowEffect == 1){$result=true;}  
        } catch (Exception $e) {
             $result = false;
        }
        return $result;
    }
}
