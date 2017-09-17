<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGolesTable extends Migration {

	public function up()
	{
		Schema::create('goles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('cantidad');
			$table->boolean('atribuible');
			$table->string('minuto');

			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
			$table->integer('jugador_id');
			$table->integer('encuentro_id');
			$table->integer('equipo_id');
			$table->integer('campeonato_id');
		});
	}

	public function down()
	{
		Schema::drop('goles');
	}

}
