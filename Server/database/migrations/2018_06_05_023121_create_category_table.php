<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('m_categories', function (Blueprint $table) {
            $table->increments('category_id');
            $table->string('category_icon');
            $table->string('category_name');
            $table->integer('category_parrent_id');
            $table->integer('category_sort');
            $table->integer('IsPublic');
            $table->integer('IsHaveChild');
            $table->integer('IsDelete');
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
        Schema::dropIfExists('categories');
    }
}
