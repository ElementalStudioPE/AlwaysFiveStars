<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJugadoresTable extends Migration {

	public function up()
	{
		Schema::create('jugadores', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('first_name');
			$table->string('last_name');
			$table->integer('dni');
			$table->integer('year');
			$table->string('posicion');
			$table->string('posicion_res');
			$table->string('numero_camiseta');
			$table->string('es_jale');
			$table->string('institucion');
			$table->string('promocion');
			$table->string('email');
			$table->string('extranjero');
			$table->string('talla');
			$table->string('celular');
			$table->string('photo');

			$table->integer('goles');
			$table->boolean('puede_jugar');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
			$table->integer('equipo_id');
		});
	}

	public function down()
	{
		Schema::drop('jugadores');
	}

}
