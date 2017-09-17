<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	public function up()
	{
		Schema::create('users', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('name',200);
			$table->string('email',200);
			$table->string('password',200);
			$table->string('access_token');
			$table->string('access_toker_secret');
			$table->text('remember_token');
			$table->timestamps();

			$table->unique('email');
			$table->index('id');
		});
	}

	public function down()
	{
		Schema::drop('users');
	}

}
