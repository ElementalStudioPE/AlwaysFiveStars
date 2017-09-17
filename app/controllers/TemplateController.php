<?php

class TemplateController extends BaseController {

	public function __construct()
	{
		$this->beforeFilter(function(){
			if (Auth::guest()) {
				return Redirect::route('session.ingresar');
			}
			if (Auth::user()->is_admin == 0) {
				return Redirect::route('principal.panel');
			}
		});
	}


	public function update()
	{
		$template = Template::whereId( Purifier::clean( Input::get('id') ) )->first();
		if ($template) {
			$objecto = Template::find($template->id);
			$objecto->tema    = Purifier::clean( Input::get('tema') );
			$objecto->mensaje = Purifier::clean( Input::get('mensaje') );
			$objecto->save();
			Session::flash('estado', 'success');
			Session::flash('message', '¡Template Updated!');
		}
		else{
			Session::flash('estado', 'error');
			Session::flash('message', '¡Template No Updated!');
		}
		return Redirect::back();
	}


}
