<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Cliente extends Eloquent
{
	use SoftDeletingTrait;
    protected $dates = ['deleted_at'];

    protected $table = 'clientes';
	public $incrementing = false;

}