<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShipmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('t_shipments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('customer_id');
            $table->string('address_delivery')->nullable();;
            $table->dateTime('date_check_out');
            $table->dateTime('date_delivery');
            $table->integer('delivery_status');
            $table->string('phone_number_delivery')->nullable();;
            $table->string('name_delivery')->nullable();;
            $table->string('email_delivery')->nullable();;
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
        Schema::dropIfExists('shipment');
    }
}

