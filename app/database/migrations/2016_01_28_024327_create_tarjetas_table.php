<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTarjetasTable extends Migration {

	public function up()
	{
		Schema::create('tarjetas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('sancion');
			$table->string('minuto');
			$table->boolean('sancion_suspendido');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
			$table->integer('jugador_id');
			$table->integer('encuentro_id');
			$table->integer('fecha_id');
		});
	}


	public function down()
	{
		Schema::drop('tarjetas');
	}

}
