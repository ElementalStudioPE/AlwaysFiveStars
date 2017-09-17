<?php
class Solicitudcomment extends Eloquent {

	public function user()
	{
		return $this->belongsTo('User');
	}

	public function solicitude()
	{
		return $this->belongsTo('Solicitude');
	}

}