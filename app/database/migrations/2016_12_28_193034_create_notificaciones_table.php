<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificacionesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('notificaciones', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('status')->nullable();
			$table->boolean('revisado')->default(0);
            $table->string('tipo')->nullable();
            $table->string('link_redirect',400)->nullable();
            $table->string('link',900)->nullable();
			$table->text('cuerpo',9000);
			$table->softDeletes();
			$table->timestamps();
			$table->index('id');
			$table->integer('user_id');
			$table->integer('cliente_id');
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
