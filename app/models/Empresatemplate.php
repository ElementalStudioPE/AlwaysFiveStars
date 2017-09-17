<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Empresatemplate extends Eloquent
{
	use SoftDeletingTrait;
    protected $dates = ['deleted_at'];
    
    protected $table = 'empresatemplates';
	public $incrementing = false;
}
