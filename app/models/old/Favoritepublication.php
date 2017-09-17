<?php
class Favoritepublication extends Eloquent {

	public function user()
	{
		return $this->belongsTo('User');
	}

	public function publication()
	{
		return $this->belongsTo('Publication');
	}

}