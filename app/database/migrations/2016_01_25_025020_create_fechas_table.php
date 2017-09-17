<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFechasTable extends Migration {

	public function up()
	{
		Schema::create('fechas', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('order');
			$table->string('name');
			$table->dateTime('fecha');
			$table->string('etapa');

			$table->boolean('todos_jugados');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
			$table->integer('campeonato_id');
		});
	}

	public function down()
	{
		Schema::drop('fechas');
	}

}
