<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEquiposTable extends Migration {

	public function up()
	{
		Schema::create('equipos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('camiseta');
			$table->text('delegado_info',12000);
			$table->string('imagen_equipo');
			$table->string('imagen_camiseta');

			$table->integer('puesto');
			$table->integer('pj');
			$table->integer('pg');
			$table->integer('pe');
			$table->integer('pp');
			$table->integer('gf');
			$table->integer('gc');
			$table->integer('df');
			$table->integer('pt');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
			$table->integer('campeonato_id');
			$table->integer('grupo_id');
		});
	}

	public function down()
	{
		Schema::drop('equipos');
	}

}

