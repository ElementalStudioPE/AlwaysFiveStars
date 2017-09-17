<?php
class Review extends Eloquent {

	public function user()
	{
		return $this->belongsTo('User');
	}

	public function publications()
	{
		return $this->belongsTo('Publication');
	}
}