<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmpresatemplatesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('empresatemplates', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('status')->default(0);
			$table->string('code',30);
			$table->string('tema',500);
			$table->text('mensaje',9000);
			$table->softDeletes();
			$table->timestamps();
			$table->index('id');
			$table->integer('empresa_id');
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
