<?php
class Solicitude extends Eloquent {

	public function user()
	{
		return $this->belongsTo('User');
	}

	public function city()
	{
		return $this->belongsTo('City');
	}

	public function subcategory()
	{
		return $this->belongsTo('Subcategory');
	}

	public function reporteds()
	{
		return $this->hasMany('Reported');
	}

	public function solicitudcomments()
	{
		return $this->hasMany('Solicitudcomment');
	}
}