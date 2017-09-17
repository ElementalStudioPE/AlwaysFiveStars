<?php

class ClienteController extends BaseController {

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

	public function create($empresaId){
		$empresa=Empresa::where('id',$empresaId)->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}
		return View::make('app.cliente.create',compact('empresa'));
	}

	public function store(){

		if ( Input::get('first_name') =='' or Input::get('email') =='' ) {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Field Required');
			return Redirect::back();
		}

		$existeCliente = Cliente::whereEmpresa_id( Input::get('empresa_id') )->where('email','=', Input::get('email') )->first();
		if ( $existeCliente ) {
			Session::flash('estado', 'info');
			Session::flash('message', 'User exist!');
			return Redirect::route('empresa.show',Input::get('empresa_id'));
		}
		$empresa=Empresa::where('id', Input::get('empresa_id') )->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}

		if ($empresa->estado == 2) {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops.. Business Disable');
			return Redirect::back();
		}

		$objeto = new Cliente();
		$objeto->first_name      	= Input::get('first_name');
		$objeto->last_name      	= Input::get('last_name');
		$objeto->full_name      	= Input::get('first_name').' '.Input::get('last_name');
		$objeto->email 				= Input::get('email');
		$objeto->mobile_phone		= Input::get('phone');
		$objeto->empresa_id 		= Input::get('empresa_id');
		$objeto->comment 			= Input::get('comment');
		$objeto->user_id 			= Auth::user()->id;
		$objeto->save();

		Session::flash('estado', 'success');
		Session::flash('message', 'User added');
		return Redirect::route('empresa.show',Input::get('empresa_id'))->with('estado','success')->with('message','Client Added!');
	}

	public function show($empresaId,$clienteId){
		$empresa=Empresa::where('id',$empresaId)->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}
		$cliente=Cliente::where('id',$clienteId)->where('empresa_id','=',$empresa->id)->first();
		if(!isset($cliente)){
			return Redirect::route('empresa.show',$empresaId);
		}
		return View::make('app.cliente.show',compact('empresa','cliente'));
	}

	public function edit($empresaId,$clienteId){
		$empresa=Empresa::where('id',$empresaId)->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}
		$cliente=Cliente::where('id',$clienteId)->where('empresa_id','=',$empresa->id)->first();
		if(!isset($cliente)){
			return Redirect::route('empresa.show',$empresaId);
		}
		return View::make('app.cliente.edit',compact('empresa','cliente'));
	}
	public function update($empresaId,$clienteId){

		$empresa=Empresa::where('id',$empresaId)->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}
		if ($empresa->estado == 2) {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops.. Business Disable');
			return Redirect::back();
		}
		$cliente=Cliente::where('id',$clienteId)->where('empresa_id','=',$empresa->id)->first();
		if(!isset($cliente)){
			return Redirect::route('empresa.show',$empresaId);
		}

		$objeto = Cliente::find($clienteId);
		$objeto->first_name      	= Input::get('first_name');
		$objeto->last_name      	= Input::get('last_name');
		$objeto->full_name      	= Input::get('first_name').' '.Input::get('last_name');
		$objeto->email 				= Input::get('email');
		$objeto->mobile_phone		= Input::get('phone');
		$objeto->comment 			= Input::get('comment');
		$objeto->save();
		Session::flash('estado', 'success');
		Session::flash('message', 'User information updated');
		return Redirect::back();
	}

	public function delete(){

		$empresa=Empresa::where('id', Input::get('empresa_id') )->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}
		if ($empresa->estado == 2) {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops.. Business Disable');
			return Redirect::back();
		}
		$cliente=Cliente::where('id', Input::get('cliente_id') )->where('empresa_id','=',$empresa->id)->first();
		if(!isset($cliente)){
			return Redirect::route('empresa.show',$empresaId);
		}

		$feedbackclientes = Feedbackcliente::whereCliente_id( $cliente->id )->get();

		foreach ($feedbackclientes as $key => $feedbackcliente) {
			$feedb = Feedbackcliente::find($feedbackcliente->id);
			$feedb->delete();
		}

		$objeto = Cliente::find($cliente->id);
		$objeto->delete();
		Session::flash('estado', 'success');
		Session::flash('message', 'Cliente deleted');
		return Redirect::route('empresa.show',$empresa->id);
	}

	public function massive_store_csv()
	{
		$empresa=Empresa::where('id', Input::get('empresa_id') )->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}
		if ($empresa->estado == 2) {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops.. Business Disable');
			return Redirect::back();
		}
		if ( Input::hasFile('file_clients') ) {

			$algunoExiste = 'no';
			$file = Input::file('file_clients');
			Excel::load($file, function($reader) {

				// var_dump($reader->get());
				// die();
				foreach ($reader->get() as $cliente) {

					// $existeCliente = Cliente::whereEmpresa_id( Input::get('empresa_id') )->where('email','=', $cliente->email )->first();
					// if ( $existeCliente ) {
					// 	$algunoExiste = 'yes';
					// }


					$objeto = new Cliente();
					$objeto->first_name      	= $cliente->firstname;
					$objeto->last_name      	= $cliente->lastname;
					$objeto->full_name      	= $cliente->firstname.' '.$cliente->lastname;
					$objeto->email 				= $cliente->email;
					$objeto->mobile_phone		= $cliente->phone;
					$objeto->empresa_id 		= Input::get('empresa_id');
					$objeto->comment 			= $cliente->comment;
					$objeto->user_id 			= Auth::user()->id;
					$objeto->save();
				}
			});

			if ($algunoExiste == 'yes') {
				Session::flash('estado', 'info');
				Session::flash('message', 'Some user no added. Because they exist!');
			}
			else{
				Session::flash('estado', 'success');
				Session::flash('message', 'Massive Users added');
			}
			return Redirect::back();
		}

		Session::flash('estado', 'danger');
		Session::flash('message', 'Something is not working. Download the demo CSV.');
		return Redirect::back();		

	}

}