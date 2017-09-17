<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGruposTable extends Migration {

	public function up()
	{
		Schema::create('grupos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('seo');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
			$table->integer('campeonato_id');
		});
	}

	public function down()
	{
		Schema::drop('grupos');
	}

}
