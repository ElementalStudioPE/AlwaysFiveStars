<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCampeonatolugaresTable extends Migration {

	public function up()
	{
		Schema::create('campeonatolugares', function(Blueprint $table)
		{
			$table->increments('id');
			$table->softDeletes();
			$table->timestamps();

			$table->integer('campeonato_id');
			$table->integer('lugar_id');
			$table->index('id');
		});
	}

	public function down()
	{
		Schema::drop('campeonatolugares');
	}

}
