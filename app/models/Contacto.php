<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Contacto extends Eloquent {

	use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $table = 'contactos';

	// public function prisubtema()
	// {
	// 	return $this->belongsTo('Prisubtema');
	// }

}
