<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Red extends Eloquent
{
	use SoftDeletingTrait;
    protected $dates = ['deleted_at'];
    
    protected $table = 'redes';
	public $incrementing = false;
}
