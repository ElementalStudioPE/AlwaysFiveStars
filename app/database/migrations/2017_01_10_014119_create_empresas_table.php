<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmpresasTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('empresas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('estado')->default(0);
			$table->string('codigo');
			$table->string('name');
			$table->string('seo');
			$table->string('logo');
			$table->string('owner_firstname');
			$table->string('owner_lastname');
			$table->string('owner_email');
			$table->string('country');
			$table->string('state_province');
			$table->string('city');
			$table->string('address');
			$table->string('postal_code');
			$table->string('phone');
			$table->string('website');
			$table->string('type');
			$table->softDeletes();
			$table->timestamps();
			$table->index('id');
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
