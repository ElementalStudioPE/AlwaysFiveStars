<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmpresaredesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('empresaredes', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('estado')->default(0);
			$table->integer('counter');
			$table->string('link');
			$table->softDeletes();
			$table->timestamps();
			$table->index('id');
			$table->integer('empresa_id');
			$table->integer('red_id');
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
