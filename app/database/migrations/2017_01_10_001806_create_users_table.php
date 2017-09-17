<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('estado')->default(0);
			$table->string('username');
			$table->string('nombre_completo');
			$table->string('nombre');
			$table->string('apellido');
			$table->string('email');
			$table->string('password');
			$table->string('password_code');
			$table->string('photo');
			
			$table->string('fb_uid',50);
			$table->string('fb_photo',500);
			$table->string('fb_link',500);
			$table->string('go_uid',50);
			$table->string('go_photo',500);
			$table->string('go_link',500);

			$table->string('access_token');
			$table->string('access_toker_secret');
			$table->text('remember_token');
			$table->softDeletes();
			$table->timestamps();
			$table->index('id');
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
