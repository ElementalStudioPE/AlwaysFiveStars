<?php
class City extends Eloquent {

	public function country()
	{
		return $this->belongsTo('Country');
	}

	public function publications()
	{
		return $this->hasMany('Publication');
	}

	public function solicitudes()
	{
		return $this->hasMany('Solicitude');
	}
}