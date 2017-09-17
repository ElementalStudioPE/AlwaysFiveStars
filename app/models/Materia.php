<?php
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Materia extends Eloquent {

	use SoftDeletingTrait;
	
    protected $dates = ['deleted_at'];

	protected $table = 'materia';

	public function nivel()
	{
		return $this->belongsTo('Nivel');
	}

}
