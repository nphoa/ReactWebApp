<?php

use Illuminate\Database\Seeder;
use App\Product;
use Illuminate\Support\Facades\DB;
class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	for($i=0;$i <= 10;$i++){
    		DB::table('m_products')->insert([
    		'category_id' => 1,
            'product_code' => str_random(10),
            'product_name' => str_random(10),
            'product_price_base' => 120000
          	
        	]);
    	}
       
    }
}
