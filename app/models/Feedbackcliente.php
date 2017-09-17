<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Feedbackcliente extends Eloquent
{
	use SoftDeletingTrait;
    protected $dates = ['deleted_at'];
    
    protected $table = 'feedbackclientes';
	public $incrementing = false;
}
