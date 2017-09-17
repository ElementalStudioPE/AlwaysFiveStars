<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Empresa extends Eloquent
{
	use SoftDeletingTrait;
    protected $dates = ['deleted_at'];
    
    protected $table = 'empresas';
	public $incrementing = false;
}
