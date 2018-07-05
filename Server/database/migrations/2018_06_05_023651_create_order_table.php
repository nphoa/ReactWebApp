<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('t_orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('order_code',100);
            $table->dateTime('order_date');
            $table->integer('order_status');
            $table->integer('customer_id');
            $table->double('total_price',8,2);
            $table->integer('shipment_id');
            $table->integer('payment_id');
            $table->integer('create_user');
            $table->integer('update_user');
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
        Schema::dropIfExists('order');
    }
}

