<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Encuentro extends Eloquent {

	use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $table = 'encuentros';

	// public function prisubtema()
	// {
	// 	return $this->belongsTo('Prisubtema');
	// }

}
