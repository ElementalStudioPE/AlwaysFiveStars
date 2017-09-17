<?php

class PrincipalController extends BaseController {

	public function __construct()
	{
		$this->beforeFilter(function(){
			if (Auth::guest()) {
				return Redirect::route('session.ingresar');
			}
			if (Auth::check() && Auth::user()->estado == '5') {
				return Redirect::route('session.waiting');
			}
			if (Auth::check() && Auth::user()->estado == '2') {
				return Redirect::route('account.cancelled');
			}
		});
	}

	// public function inicio()
	// {
	// 	return View::make('app.landing');
	// }

	public function panel()
	{
		if (Auth::guest()) {
			return Redirect::route('session.ingresar');
		}
		$empresas = Empresa::whereUser_id(Auth::user()->id)->get();
		return View::make('app.panel', compact('empresas'));
	}

	public function clientes()
	{
		if (Auth::guest()) {
			return Redirect::route('session.ingresar');
		}
		$empresas = Empresa::whereUser_id(Auth::user()->id)->get();
		return View::make('app.clientes', compact('empresas'));
	}

	public function users()
	{
		if (Auth::guest()) {
			return Redirect::route('session.ingresar');
		}
		if (Auth::user()->is_admin == 0) {
			return Redirect::route('principal.panel');
		}
		return View::make('app.users');
	}

	public function templates()
	{
		if (Auth::guest()) {
			return Redirect::route('session.ingresar');
		}
		if (Auth::user()->is_admin == 0) {
			return Redirect::route('principal.panel');
		}
		return View::make('app.templates');
	}

}
