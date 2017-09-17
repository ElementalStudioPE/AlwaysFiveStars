<?php

class EmpresaController extends BaseController {

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
		$objeto->codigo = $codigo;

		$logoNombre = '';
		if ( Input::hasFile('business_logo') ){

			$filenameNombreOriginal = Auth::user()->id.'-'.time().strtolower(str_random(10)).'.png';
			$original = Image::make( Input::file('business_logo') );
            $original->orientate();
            $original->save('uploads/business-logo/original/'.$filenameNombreOriginal);

			$count = Empresa::count() +1 ;
			$logoNombre = $count.strtolower(str_random(10)).'.png';

			Image::make( Input::file('business_logo') )
			->resize(100, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min100/'.$logoNombre);
			Image::make( Input::file('business_logo') )
			->resize(200, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min200/'.$logoNombre);
			Image::make( Input::file('business_logo') )
			->resize(300, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min300/'.$logoNombre);
			Image::make( Input::file('business_logo') )
			->resize(500, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min500/'.$logoNombre);
			Image::make( Input::file('business_logo') )
			->resize(900, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min900/'.$logoNombre);
		}

		$objeto->logo 				= $logoNombre;
		$objeto->owner_firstname 	= Purifier::clean( Input::get('owner_firstname') );
		$objeto->owner_lastname 	= Purifier::clean( Input::get('owner_lastname') );
		$objeto->owner_email 		= Purifier::clean( Input::get('owner_email') );
		$objeto->country 			= Purifier::clean( Input::get('country') );
		$objeto->state_province 	= Purifier::clean( Input::get('state_province') );
		$objeto->city 				= Purifier::clean( Input::get('city') );
		$objeto->address 			= Purifier::clean( Input::get('address') );
		$objeto->postal_code 		= Purifier::clean( Input::get('postal_code') );
		$objeto->postal_iso2 		= Purifier::clean( Input::get('postal_iso2') );
		$objeto->postal_name 		= Purifier::clean( Input::get('postal_name') );	
		$objeto->phone 				= Purifier::clean( Input::get('phone') );
		$objeto->website 			= Purifier::clean( Input::get('website') );
		$objeto->type 				= Purifier::clean( Input::get('type') );
		$objeto->user_id 			= Auth::user()->id;
		$objeto->save();

		$template = Template::whereStatus(1)->where('code','=','main-feedback')->orderBy('created_at','desc')->first();

		$k = 0;
		while ($k == 0) {
			$empresa =Empresa::whereCodigo($codigo)->first();
			if ($empresa) {
				$empresatemplate = new Empresatemplate();
				$empresatemplate->tema 			= $template->tema;
				$empresatemplate->mensaje 		= $template->mensaje;
				$empresatemplate->empresa_id	= $empresa->id;
				$empresatemplate->save();
				$k = 1;
			}
		}

		foreach ( Red::all() as $red ) {
			if ( Purifier::clean( Input::get('red'.$red->id) ) != '' ) {

				$miRed = new Empresared();
				$miRed->link       = Purifier::clean( Input::get('red'.$red->id) );
				$miRed->empresa_id = Purifier::clean( $empresa->id );
				$miRed->red_id     = $red->id;
				$miRed->save();

			}
		}

		Session::flash('estado', 'success');
		Session::flash('message', '¡Business Added!');
		return Redirect::route('principal.panel');

	}

	public function show($id){
		$empresa=Empresa::where('id',$id)->where('user_id','=',Auth::user()->id)->first();
		if ($empresa) {

			$q = Cliente::query();
			$q->where('empresa_id',$id);
			// if ( Purifier::clean( Input::has('q')) ) {

			// 	if ( Purifier::clean(Input::get('q')) == 'send'  ) {
			// 		$q->leftJoin('feedbackclientes','=','empresa_id',$id);
			// 	}

			// 	if ( Purifier::clean(Input::get('q')) == 'received'  ) {
			// 		$q->leftJoin('feedbackclientes','=','empresa_id',$id);
			// 	}

			// 	if ( Purifier::clean(Input::get('q')) == 'positive'  ) {
			// 		$q->leftJoin('feedbackclientes','=','empresa_id',$id);
			// 	}

			// 	if ( Purifier::clean(Input::get('q')) == 'non-positive'  ) {
			// 		$q->leftJoin('feedbackclientes','=','empresa_id',$id);
			// 	}

			// 	if ( Purifier::clean(Input::get('q')) == 'total-reviews'  ) {
			// 		$q->leftJoin('feedbackclientes','=','empresa_id',$id);
			// 	}

			// 	$clientes = $q->select('clientes.id','clientes.email','clientes.full_name')->get();;

			// }
			// else{
				$clientes = $q->get();
			// }
			

			return View::make('app.empresa.show',compact('empresa','clientes'));


		} else {
			return Redirect::route('principal.panel');
		}
	}

	public function edit($id){
		$empresa=Empresa::where('id',$id)->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}
		return View::make('app.empresa.edit',compact('empresa'));
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
		$objeto->seo = time().Str::slug( Purifier::clean( Input::get('name') ) );
		
		if ( Input::hasFile('business_logo') ){

			$filenameNombreOriginal = Auth::user()->id.'-'.time().strtolower(str_random(10)).'.png';
			$original = Image::make( Input::file('business_logo') );
            $original->orientate();
            $original->save('uploads/business-logo/original/'.$filenameNombreOriginal);

			$count = Empresa::count() +1 ;
			$logoNombre = $count.strtolower(str_random(10)).'.png';

			Image::make( Input::file('business_logo') )
			->resize(100, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min100/'.$logoNombre);
			Image::make( Input::file('business_logo') )
			->resize(200, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min200/'.$logoNombre);
			Image::make( Input::file('business_logo') )
			->resize(300, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min300/'.$logoNombre);
			Image::make( Input::file('business_logo') )
			->resize(500, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min500/'.$logoNombre);
			Image::make( Input::file('business_logo') )
			->resize(900, null, function ($constraint) { $constraint->aspectRatio(); })
			->save('uploads/business-logo/min900/'.$logoNombre);

			$objeto->logo = $logoNombre;
		}

		$objeto->owner_firstname = Purifier::clean( Input::get('owner_firstname') );
		$objeto->owner_lastname = Purifier::clean( Input::get('owner_lastname') );
		$objeto->owner_email = Purifier::clean( Input::get('owner_email') );
		$objeto->country = Purifier::clean( Input::get('country') );
		$objeto->state_province = Purifier::clean( Input::get('state_province') );
		$objeto->city = Purifier::clean( Input::get('city') );
		$objeto->address = Purifier::clean( Input::get('address') );
		$objeto->postal_code = Purifier::clean( Input::get('postal_code') );
		$objeto->postal_iso2 = Purifier::clean( Input::get('postal_iso2') );
		$objeto->postal_name = Purifier::clean( Input::get('postal_name') );
		$objeto->phone = Purifier::clean( Input::get('phone') );
		$objeto->website = Purifier::clean( Input::get('website') );
		$objeto->type = Purifier::clean( Input::get('type') );
		$objeto->save();

		foreach ( Red::all() as $red ) {
			if ( Purifier::clean( Input::get('red'.$red->id) ) != '' ) {
				$empresaRed = Empresared::whereEmpresa_id($empresa->id)->where('red_id','=',$red->id)->first();
				if ($empresaRed) {
					$miRed = Empresared::find($empresaRed->id);
					$miRed->link = Purifier::clean( Input::get('red'.$red->id) );
					$miRed->save();
				}
				else{
					$miRed = new Empresared();
					$miRed->link       = Purifier::clean( Input::get('red'.$red->id) );
					$miRed->empresa_id = Purifier::clean( $empresa->id );
					$miRed->red_id     = $red->id;
					$miRed->save();
				}
			}
			else{
				$empresaRed = Empresared::whereEmpresa_id($empresa->id)->where('red_id','=',$red->id)->first();
				if ($empresaRed) {
					$miRed = Empresared::find($empresaRed->id);
					$miRed->delete();
				}
			}
		}

		Session::flash('estado', 'success');
		Session::flash('message', 'Business information updated');
		return Redirect::route('empresa.show',$id);
		// return Redirect::back();

	}

	public function disable(){
		$empresas = Purifier::clean( Input::get('business') );
		$empresas = explode(",", $empresas);
		foreach($empresas as $empresaID) {
			$empresa = Empresa::whereId($empresaID)->where('user_id','=',Auth::user()->id)->first();
			if ($empresa) {
				$empresaUpdate = Empresa::find($empresaID);
				$empresaUpdate->estado = 2;
				$empresaUpdate->save();
				
			}
		}
		return 'exito';
	}

	public function enable(){
		$empresas = Purifier::clean( Input::get('business') );
		$empresas = explode(",", $empresas);
		foreach($empresas as $empresaID) {
			$empresa = Empresa::whereId($empresaID)->where('user_id','=',Auth::user()->id)->first();
			if ($empresa) {
				$empresaUpdate = Empresa::find($empresaID);
				$empresaUpdate->estado = 0;
				$empresaUpdate->save();
				
			}
		}
		return 'exito';
	}


	public function delete(){

		$empresas = Purifier::clean( Input::get('business') );
		$empresas = explode(",", $empresas);
		foreach($empresas as $empresaID) {
			$empresa = Empresa::whereId($empresaID)->where('user_id','=',Auth::user()->id)->first();
			if ($empresa) {
				$empresaUpdate = Empresa::find($empresaID);
				$empresaUpdate->delete();
				
			}
		}
		return 'exito';

		// $empresa=Empresa::where('id', Purifier::clean(Input::get('empresa_id')) )->where('user_id','=',Auth::user()->id)->first();
		// if(!isset($empresa)){
		// 	return Redirect::route('principal.panel');
		// }

		// $objeto=Empresa::find($id);
		// $objeto->delete();

		// Session::flash('estado', 'success');
		// Session::flash('message', 'Business deleted');
		// return Redirect::route('principal.panel');

	}

	public function delete_btn(){

		$empresa=Empresa::where('id', Purifier::clean(Input::get('empresa_id')) )->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			return Redirect::route('principal.panel');
		}

		$objeto=Empresa::find($id);
		$objeto->delete();

		Session::flash('estado', 'success');
		Session::flash('message', 'Business deleted');
		return Redirect::route('principal.panel');

	}

	public function send_feedback_cliente(){

		// Existen los valores necesarios para la solicitud
		if ( Purifier::clean(Input::get('empresa_id')) == '' or Purifier::clean(Input::get('cliente_id')) == '' or Purifier::clean(Input::get('subject')) == '' or Purifier::clean(Input::get('message')) == '' ) {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops something was wrong - Required');
			return Redirect::back();
		}
		// El cliente y la empresa son del usuario
		$empresa=Empresa::where('id', Purifier::clean(Input::get('empresa_id')) )->where('user_id','=',Auth::user()->id)->first();
		if(!isset($empresa)){
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops something was wrong - Business');
			return Redirect::back();
		}

		if ($empresa->estado == 2) {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops.. Business Disable');
			return Redirect::back();
		}

		$cliente=Cliente::where('id', Purifier::clean(Input::get('cliente_id')) )->where('empresa_id','=',$empresa->id)->first();
		if(!isset($cliente)){
			Session::flash('estado', 'danger');
			Session::flash('message', 'Oops something was wrong - Client');
			return Redirect::back();
		}
		if ($cliente->email == '') {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Invalid Email - Client');
			return Redirect::back();
		}
		if ($empresa->owner_email == '') {
			Session::flash('estado', 'danger');
			Session::flash('message', 'Invalid Email - Business');
			return Redirect::back();
		}
	
		if (Purifier::clean( Input::get('save_email_template') )) {
			$empresatemplate = Empresatemplate::whereEmpresa_id( Purifier::clean(Input::get('empresa_id')) )->first();
			if ($empresatemplate) {
				$eptemplate = Empresatemplate::find($empresatemplate->id);
				$eptemplate->tema  	  = Purifier::clean( Input::get('subject') );
	  			$eptemplate->mensaje  = Purifier::clean( Input::get('message') );
	  			$eptemplate->save();
			}
		}

		$code = uniqid().'-'.Auth::user()->id.'-'.rand(66666, 666666666);

		$feedbackcliente = new Feedbackcliente();
	  	$feedbackcliente->cliente_id  = Purifier::clean( Input::get('cliente_id') );
	  	$feedbackcliente->empresa_id  = Purifier::clean( Input::get('empresa_id') );
	  	$feedbackcliente->tema  	  = Purifier::clean( Input::get('subject') );
	  	$feedbackcliente->mensaje  	  = Purifier::clean( Input::get('message') );
	  	$feedbackcliente->code  	  = $code;
	  	$feedbackcliente->empresa_id  = Purifier::clean( Input::get('empresa_id') );
	  	$feedbackcliente->cliente_id  = Purifier::clean( Input::get('cliente_id') );
	  	$feedbackcliente->save();

	  	$mensaje = nl2br(Purifier::clean( Input::get('message') ));

		$mensaje = str_replace("[customer-first-name]",$cliente->first_name,$mensaje);
		$mensaje = str_replace("[customer-last-name]",$cliente->last_name,$mensaje);
		$mensaje = str_replace("[customer-full-name]",$cliente->full_name,$mensaje);
		$mensaje = str_replace("[customer-email]",$cliente->email,$mensaje);
		$mensaje = str_replace("[customer-mobile-phone]",$cliente->mobile_phone,$mensaje);
		$mensaje = str_replace("[customer-comment]",$cliente->comment,$mensaje);

		$mensaje = str_replace("[business-name]",$empresa->name,$mensaje);
		$mensaje = str_replace("[business-logo]",$empresa->logo,$mensaje);
		$mensaje = str_replace("[business-owner-first-name]",$empresa->owner_firstname,$mensaje);
		$mensaje = str_replace("[business-owner-last-name]",$empresa->owner_lastname,$mensaje);
		$mensaje = str_replace("[business-owner-email]",$empresa->owner_email,$mensaje);
		$mensaje = str_replace("[business-country]",$empresa->country,$mensaje);
		$mensaje = str_replace("[business-state-province]",$empresa->state_province,$mensaje);
		$mensaje = str_replace("[business-city]",$empresa->city,$mensaje);
		$mensaje = str_replace("[business-address]",$empresa->address,$mensaje);
		$mensaje = str_replace("[business-postal-code]",$empresa->postal_code,$mensaje);
		$mensaje = str_replace("[business-phone]",$empresa->phone,$mensaje);
		$mensaje = str_replace("[business-website]","<a href='$empresa->website' target='_blank'><font color='#454545'>$empresa->website</font></a>",$mensaje);
		//Falta cambiar esto
		$botonFeedback = '<a href="http://alwaysfivestars.com/feedback/business/'.$code.'" style="display:inline-block;text-decoration:none;background-color:#efb00d;text-transform:uppercase;white-space:nowrap;width:320px;color:#ffffff;font-size:16px;border-radius:5px;font-weight:bold;padding:6px 0;text-align:center" target="_blank">'.
                          '<img alt="" style="vertical-align:middle" height="20" src="http://alwaysfivestars.com/static-app/img/comment-icon.png">&nbsp;GIVE FEEDBACK&nbsp;'.
                         '</a>';
		$mensaje = str_replace("[button-feedback]",$botonFeedback,$mensaje);

		$emisorEmail 	= $cliente->email;
		$receptorEmail 	= $cliente->email;
		$receptorName 	= 'AlwaysFiveStars';
		$subjectFixed   = Purifier::clean( Input::get('subject') );

	    Mail::send('emails.empresa.get-feedback', array('mensaje'=>$mensaje,'empresaID'=>$empresa->id,'clienteID'=>$cliente->id), function($message) use ($receptorName, $receptorEmail, $subjectFixed)
	    {
	        $message->from('sergiosaavedra@tudemia.com', $receptorName);
	        $message->to($receptorEmail);
	        $message->subject($subjectFixed);
	    });

	    Session::flash('estado', 'success');
		Session::flash('message', 'Email Send With Success');
		return Redirect::back();
	}

}