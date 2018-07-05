<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('m_products', function (Blueprint $table) {
            $table->increments('product_id');
            $table->string('product_code');
            $table->string('product_name');
            $table->integer('category_id');
            $table->double('product_price_base',8,2);
            $table->double('product_price_sale',8,2);
            $table->double('product_price_of',8,2);
            $table->integer('product_sale_percen');
            $table->text('product_content');
            $table->text('product_detail');
            $table->string('product_image');
            $table->integer('IsDelete');
            $table->integer('IsPublic');
            $table->integer('product_qty');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}
