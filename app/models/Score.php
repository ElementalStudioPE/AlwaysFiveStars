<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Score extends Eloquent {

	use SoftDeletingTrait;

    protected $dates = ['deleted_at'];

	protected $table = 'scores';

	// public function prisubtema()
	// {
	// 	return $this->belongsTo('Prisubtema');
	// }

}
