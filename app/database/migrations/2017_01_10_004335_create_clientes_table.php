<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClientesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('clientes', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('estado')->default(0);
			$table->string('first_name');
			$table->string('last_name');
			$table->string('full_name');
			$table->string('email');
			$table->string('mobile_phone');
			$table->text('comment');
			$table->softDeletes();
			$table->timestamps();
			$table->index('id');
			$table->integer('empresa_id');
			$table->integer('user_id');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}
