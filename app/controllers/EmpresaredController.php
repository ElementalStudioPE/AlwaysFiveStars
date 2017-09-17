<?php

class EmpresaredController extends BaseController {

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


	public function create(){
		return View::make('app.empresa.create');
	}

	public function store(){

		if ( Input::get('name') =='' or Input::get('owner_firstname') =='' or Input::get('owner_lastname') =='' or Input::get('owner_email') =='' ) {
			Session::flash('message', '¡Completa los campos obligatorios!');
			return Redirect::back();
		}

		$codigo = Auth::user()->id.strtolower(str_random(5).date('now').str_random(5));

		$objeto = new Empresa();
		$objeto->name 	= Purifier::clean( Input::get('name') );
		$objeto->seo 	= time().Str::slug( Purifier::clean( Input::get('name') ) );	
		$objeto->phone 				= Purifier::clean( Input::get('phone') );
		$objeto->website 			= Purifier::clean( Input::get('website') );
		$objeto->type 				= Purifier::clean( Input::get('type') );
		$objeto->user_id 			= Auth::user()->id;
		$objeto->save();

		$template = Template::whereStatus(1)->where('code','=','main-feedback')->orderBy('created_at','desc')->first();

		Session::flash('estado', 'success');
		Session::flash('message', '¡Business Added!');
		return Redirect::route('principal.panel');

	}

	public function update($id){
		if ( Input::get('name') =='' or Input::get('owner_firstname') =='' or Input::get('owner_lastname') =='' or Input::get('owner_email') =='' ) {
			Session::flash('estado', 'success');
			Session::flash('message', 'Fields Required');
			return Redirect::back();
		}

		$empresa=Empresa::where('id',$id)->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}

		if ($empresa->estado == 2) {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops.. Business Disable');
			return Redirect::back();
		}

		$objeto=Empresa::find($id);
		$objeto->name = Purifier::clean( Input::get('name') );
		$objeto->owner_firstname = Purifier::clean( Input::get('owner_firstname') );
		$objeto->owner_lastname = Purifier::clean( Input::get('owner_lastname') );
		$objeto->owner_email = Purifier::clean( Input::get('owner_email') );
		$objeto->country = Purifier::clean( Input::get('country') );
		$objeto->type = Purifier::clean( Input::get('type') );
		$objeto->save();
		Session::flash('estado', 'success');
		Session::flash('message', 'Business information updated');
		return Redirect::back();

	}

}