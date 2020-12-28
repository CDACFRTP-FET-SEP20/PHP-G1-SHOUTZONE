<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFriendsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('friends', function (Blueprint $table) {
            $table->increments('id');
            // $table->integer('user_id_1')->unsigned();
            // $table->integer('user_id_2')->unsigned();
            $table->foreignId('user_id_1')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('user_id_2')->references('id')->on('users')->onDelete('cascade');
            $table->boolean('approved')->default(0);
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
        Schema::dropIfExists('friends');
    }
}
