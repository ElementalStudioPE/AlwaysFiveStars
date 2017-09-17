<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCampeonatosTable extends Migration {

	public function up()
	{
		Schema::create('campeonatos', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('status');
			$table->integer('order'); 
			$table->string('name');
			$table->string('seo');
			$table->string('logo_campeonato');
			$table->text('large_description',10000);
			$table->text('short_description',10000);
			$table->integer('year');
			$table->string('youtube_code');
			$table->string('vimeo_code');
			$table->string('otro_code');
			$table->integer('vera_aper_clau');
			$table->dateTime('fecha_inicio');
			$table->dateTime('fecha_fin');
			$table->string('tipo_campeonato');
			$table->string('archivo_bases');
			$table->string('archivo_fixture');
			$table->integer('tipo_final');
			$table->string('producto_servicio');
			$table->softDeletes();
			$table->timestamps();

			$table->integer('producto_id');
			$table->index('id');
		});
	}

	public function down()
	{
		Schema::drop('campeonatos');
	}

}
