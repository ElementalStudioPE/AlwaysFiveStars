<?php
use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Nivel extends Eloquent {

	use SoftDeletingTrait;
	
    protected $dates = ['deleted_at'];

	protected $table = 'nivel';

	public function materias()
	{
		return $this->hasMany('Materia');
	}
}
