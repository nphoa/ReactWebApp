<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductDetailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('m_product_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_product');
            $table->integer('id_release_Company');
            $table->integer('id_publisher');
            $table->integer('id_author');
            $table->string('size');
            $table->integer('page_number');
            $table->date('release_date');
            $table->string('covor_type');
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
        Schema::dropIfExists('product_detail');
    }
}
