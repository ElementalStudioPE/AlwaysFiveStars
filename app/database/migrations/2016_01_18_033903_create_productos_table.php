<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductosTable extends Migration {

	public function up()
	{
		Schema::create('productos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('order');
			$table->string('name');
			$table->string('seo');
			$table->text('large_description',10000);
			$table->text('short_description',10000);
			$table->string('image');
			$table->boolean('tiene_verano');
			$table->boolean('tiene_apertura');
			$table->boolean('tiene_clausura');
			$table->integer('year');
			$table->string('youtube_code');
			$table->string('vimeo_code');
			$table->string('otro_code');
			$table->string('color_light');
			$table->string('color_dark');
			$table->string('color_base');
			$table->softDeletes();
			$table->timestamps();

			$table->index('id');
		});
	}

	public function down()
	{
		Schema::drop('productos');
	}

}
