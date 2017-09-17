<?php

use Illuminate\Database\Eloquent\SoftDeletingTrait;

class Notificacion extends Eloquent
{
	use SoftDeletingTrait;
    protected $dates = ['deleted_at'];
    
    protected $table = 'notificaciones';
	public $incrementing = false;
}
