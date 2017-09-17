<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormulariosTable extends Migration {

	public function up()
	{
		Schema::create('formularios', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('first_name');
			$table->string('last_name');
			$table->string('email');
			$table->string('phone');
			$table->string('empresa');
			$table->text('comentario');
			$table->string('extra_1');
			$table->string('extra_2');
			$table->string('extra_3');
			$table->integer('extra_4');
			$table->integer('extra_5');
			$table->boolean('extra_6');
			$table->boolean('extra_7');
			$table->dateTime('extra_8');
			$table->dateTime('extra_9');
			$table->text('extra_10');
			$table->text('extra_11');
			$table->timestamps();
			$table->index('id');
		});
	}

	public function down()
	{
		Schema::drop('formularios');
	}

}
