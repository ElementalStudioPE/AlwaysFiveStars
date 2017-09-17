<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Template extends Eloquent
{
	use SoftDeletingTrait;
    protected $dates = ['deleted_at'];
    
    protected $table = 'templates';
	public $incrementing = false;
}
