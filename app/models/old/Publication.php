<?php
class Publication extends Eloquent {

	public function user()
	{
		return $this->belongsTo('User');
	}

	public function subcategory()
	{
		return $this->belongsTo('Subcategory');
	}

	public function city()
	{
		return $this->belongsTo('City');
	}

	public function reporteds()
	{
		return $this->hasMany('Reported');
	}

	public function favoritepublications()
	{
		return $this->hasMany('Favoritepublication');
	}

	public function bills()
	{
		return $this->hasMany('Bill');
	}

	public function students()
	{
		return $this->hasMany('Student');
	}

	public function contracts()
	{
		return $this->hasMany('Contract');
	}
}