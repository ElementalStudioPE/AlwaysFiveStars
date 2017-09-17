<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLugaresTable extends Migration {

	public function up()
	{
		Schema::create('lugares', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('lugar_name',1000);
			$table->text('embed_map');
			$table->float('lugar_latitude',9,5);
			$table->float('lugar_longitude',9,5);
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
		});
	}

	public function down()
	{
		Schema::drop('lugares');
	}

}
