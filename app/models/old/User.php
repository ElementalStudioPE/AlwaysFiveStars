<?php

// use Illuminate\Auth\UserInterface;
// use Illuminate\Auth\Reminders\RemindableInterface;

// class User extends Eloquent implements UserInterface, RemindableInterface {

// 	protected $table = 'users';

// 	/**
// 	 * The attributes excluded from the model's JSON form.
// 	 *
// 	 * @var array
// 	 */
// 	protected $hidden = array('password');

// 	/**
// 	 * Get the unique identifier for the user.
// 	 *
// 	 * @return mixed
// 	 */
// 	public function getAuthIdentifier()
// 	{
// 		return $this->getKey();
// 	}

// 	/**
// 	 * Get the password for the user.
// 	 *
// 	 * @return string
// 	 */
// 	public function getAuthPassword()
// 	{
// 		return $this->password;
// 	}

// 	/**
// 	 * Get the e-mail address where password reminders are sent.
// 	 *
// 	 * @return string
// 	 */
// 	public function getReminderEmail()
// 	{
// 		return $this->email;
// 	}

// 	public function getRememberToken()
// 	{
// 	    return $this->remember_token;
// 	}

// 	public function setRememberToken($value)
// 	{
// 	    $this->remember_token = $value;
// 	}

// 	public function getRememberTokenName()
// 	{
// 	    return 'remember_token';
// 	}

// 	public function publications()
// 	{
// 		return $this->hasMany('Publication');
// 	}

// 	public function solicitudes()
// 	{
// 		return $this->hasMany('Solicitude');
// 	}

// 	public function reporteds()
// 	{
// 		return $this->hasMany('Reported');
// 	}

// 	public function solicitudcomments()
// 	{
// 		return $this->hasMany('Solicitudcomment');
// 	}

// 	public function bills()
// 	{
// 		return $this->hasMany('Bill');
// 	}

// 	public function students()
// 	{
// 		return $this->hasMany('Student');
// 	}

// 	public function notifications()
// 	{
// 		return $this->hasMany('Notification');
// 	}

// 	public function messages()
// 	{
// 		return $this->hasMany('Message');
// 	}

// 	public function denunciations()
// 	{
// 		return $this->hasMany('Denunciation');
// 	}

// 	public function contracts()
// 	{
// 		return $this->hasMany('Contract');
// 	}

// 	public function favoritepublications()
// 	{
// 		return $this->hasMany('Favoritepublication');
// 	}

// 	public function register()
// 	{
// 		return $this->hasOne('Register');
// 	}
// }