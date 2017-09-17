<?php
class Subcategory extends Eloquent {

	public function category()
	{
		return $this->belongsTo('Category');
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