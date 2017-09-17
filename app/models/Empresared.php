<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Empresared extends Eloquent
{
	use SoftDeletingTrait;
    protected $dates = ['deleted_at'];
    
    protected $table = 'empresaredes';
	public $incrementing = false;
}
