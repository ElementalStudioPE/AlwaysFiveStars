<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('user', function(Blueprint $table)
		{
			$table->engine = 'MyISAM';
			$table->increments('id');
			$table->integer('estado')->default(0);
			$table->boolean('is_teacher')->default(false);
			$table->boolean('verificado')->default(false);
			$table->string('username');
			$table->string('nombre_completo');
			$table->string('nombre');
			$table->string('apellido');
			$table->string('email');
			$table->string('telefono');
			$table->string('celular');
			$table->string('photo');
			$table->string('youtube_code',320);
			$table->float('rating',9,2);
			$table->float('score',9,2);

			$table->string('fb_uid',50);
			$table->string('fb_photo',500);
			$table->string('fb_link',500);

			$table->string('go_uid',50);
			$table->string('go_photo',500);
			$table->string('go_link',500);

			$table->string('access_token');
			$table->string('access_toker_secret');
			$table->text('remember_token');
			$table->text('universidad',9000);
			$table->string('pais');
			$table->string('ciudad',700);
			$table->string('distrito',700);
			$table->string('costo_persona');
			$table->string('costo_grupo');
			$table->text('lista_materia',1000);
			$table->text('lista_distrito',1000);
			$table->text('lista_horario',1000);
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
		});

		DB::statement('ALTER TABLE user ADD FULLTEXT search(lista_materia, lista_distrito)');
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
