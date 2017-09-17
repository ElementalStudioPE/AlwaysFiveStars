<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNivelTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('nivel', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('estado')->default(0);
			$table->string('nombre');
			$table->string('seo');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
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
