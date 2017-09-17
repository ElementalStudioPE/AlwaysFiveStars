<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEncuentrosTable extends Migration {

	public function up()
	{
		Schema::create('encuentros', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('order');
			$table->string('name');
			$table->dateTime('fecha');
			$table->string('horario');
			$table->string('lugar');

			$table->boolean('descansa');
			$table->boolean('jugado');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
			$table->integer('equipo1_id');
			$table->integer('equipo2_id');
			$table->integer('fecha_id');
			$table->integer('lugar_id');
			$table->integer('campeonato_id');
		});
	}

	public function down()
	{
		Schema::drop('encuentros');
	}

}
