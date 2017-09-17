<?php
class Report extends Eloquent {

	public function user()
	{
		return $this->belongsTo('User');
	}

	public function publication()
	{
		return $this->belongsTo('Publication');
	}

	public function solicitude()
	{
		return $this->belongsTo('Solicitude');
	}
}