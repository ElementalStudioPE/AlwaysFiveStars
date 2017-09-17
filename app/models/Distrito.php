<?php
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Distrito extends Eloquent {

	use SoftDeletingTrait;
	
    protected $dates = ['deleted_at'];

	protected $table = 'distrito';

}
