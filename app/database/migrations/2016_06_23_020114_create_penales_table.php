<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePenalesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('penales', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('equipo1');
			$table->integer('equipo2');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
			$table->integer('encuentro_id');
			$table->integer('fecha_id');
			$table->integer('campeonato_id');
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
