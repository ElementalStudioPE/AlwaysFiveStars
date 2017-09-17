<?php
class Bill extends Eloquent {

	public function user()
	{
		return $this->belongsTo('User');
	}

	public function teacherpublication()
	{
		return $this->belongsTo('Publication');
	}
}