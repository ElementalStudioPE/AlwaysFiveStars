<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeedbackclientesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('feedbackclientes', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('status')->default(0);
			$table->string('code',30);
			$table->string('tema',500);
			$table->text('mensaje',9000);
			$table->integer('rating');
			$table->text('feedback',9000);
			$table->softDeletes();
			$table->timestamps();
			$table->index('id');
			$table->integer('cliente_id');
			$table->integer('empresa_id');
			$table->integer('empresatemplate_id');
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
