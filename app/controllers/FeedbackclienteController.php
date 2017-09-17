<?php

class FeedbackclienteController extends BaseController {

	public function form($codigo)
	{
		$feedbackcliente = Feedbackcliente::whereCode($codigo)->first();
		if ($feedbackcliente) {
			if ($feedbackcliente->status == 2) {
				return 'Pagina de la empresa';
			}
			return View::make('app.feedbackcliente.form',compact('feedbackcliente'));
		}
		return 'Nothing to do';
	}

	public function send()
	{
		if ( Purifier::clean( Input::get('feedbackcliente_id') ) == '' ) {
			return 'Nothing to do';
		}

		$feedbackcliente = Feedbackcliente::whereId( Purifier::clean( Input::get('feedbackcliente_id') ) )->first();
		if (!$feedbackcliente ) {
			return 'Nothing to do';
		}
		if ( $feedbackcliente->status == 2 ) {
			return 'Pagina de la empresa';
		}


		$ft = Feedbackcliente::find( Purifier::clean( Input::get('feedbackcliente_id') ) );
		$ft->rating 	= Purifier::clean(Input::get('rating'));
		if ( Purifier::clean(Input::get('feedback')) == '' ) {
			$ft->status = 1;
		}
		else{
			$ft->status = 2;
		}
		$ft->feedback 	= Purifier::clean(Input::get('feedback'));
		$ft->save();

		$cliente = Cliente::whereId($feedbackcliente->cliente_id)->first();
		$empresa = Empresa::whereId($feedbackcliente->empresa_id)->first();

		$cuerpo = '<strong>'.$cliente->first_name.' '.$cliente->last_name.'</strong> responded to your email';

		$id = DB::table('notificaciones')->insertGetId(
                [
                'tipo'       => 'respuesta',
                'cuerpo'    =>  $cuerpo,
                'cliente_id' =>  $cliente->id,
                'empresa_id' =>  $empresa->id,
                'user_id' 	 =>  $empresa->user_id,
                'created_at' =>  Carbon\Carbon::now(),
                'updated_at' =>  Carbon\Carbon::now()
                ]
            );

		$notify = Notificacion::find($id);
        $notify->link_redirect     = 'http://alwaysfivestars.com/dashboard/notificacion/'.$id;
        $notify->link              = 'http://alwaysfivestars.com/dashboard/business/'.$empresa->id.'/clientes/'.$cliente->id;
        $notify->save();


        use Twilio\Rest\Client;

		// Your Account SID and Auth Token from twilio.com/console
		$sid = 'ACaac79a97a44a342b555b179303054523';
		$token = '534cd4e9ae564d706cad917c7945b7a7';
		$client = new Client($sid, $token);

		// Use the client to do fun stuff like send text messages!
		$client->messages->create(
		    // the number you'd like to send the message to
		    '+51930924568',
		    array(
		        // A Twilio phone number you purchased at twilio.com/console
		        'from' => '+18036102531',
		        // the body of the text message you'd like to send
		        'body' => 'Hola acabas de recibir un feedback'
		    )
		);

		if ( Purifier::clean(Input::get('rating')) < 3 ) {
			return Redirect::route("feedbackcliente.thank.you","code=$feedbackcliente->code");
		}
		else{
			return Redirect::route("feedbackcliente.thanks","code=$feedbackcliente->code");
		}
	}


	public function send_feedback()
	{
		if ( Purifier::clean( Input::get('feedbackcliente_id') ) == '' ) {
			return 'Nothing to do';
		}

		$feedbackcliente = Feedbackcliente::whereId( Purifier::clean( Input::get('feedbackcliente_id') ) )->first();
		if (!$feedbackcliente ) {
			return 'Nothing to do';
		}
		
		$ft = Feedbackcliente::find( Purifier::clean( Input::get('feedbackcliente_id') ) );
		$ft->status = 2;
		$ft->non_positive_feedback 	= Purifier::clean(Input::get('non_positive_feedback'));
		$ft->save();

		return Redirect::route("feedbackcliente.thank.you.final","code=$feedbackcliente->code");
	}
	// alias "feedbackcliente.thanks"
	public function thanks(){
		if (Purifier::clean(Input::get('code'))) {
			$codigo = Purifier::clean(Input::get('code'));
			$feedbackcliente = Feedbackcliente::whereCode($codigo)->first();
			if ($feedbackcliente) {
				return View::make('app.feedbackcliente.thanks',compact('feedbackcliente'));
			}
			return 'redirect rigth now';
		}
		return 'no code';
	}
	// alias "feedbackcliente.thank.you"
	public function thankyou(){
		if (Purifier::clean(Input::get('code'))) {
			$codigo = Purifier::clean(Input::get('code'));
			$feedbackcliente = Feedbackcliente::whereCode($codigo)->first();
			if ($feedbackcliente) {
				return View::make('app.feedbackcliente.thankyou',compact('feedbackcliente'));
			}
			return 'redirect rigth now';
		}
		return 'no code';	
	}
	// alias "feedbackcliente.thank.you.final"
	public function thank_you_final(){
		if (Purifier::clean(Input::get('code'))) {
			$codigo = Purifier::clean(Input::get('code'));
			$feedbackcliente = Feedbackcliente::whereCode($codigo)->first();
			if ($feedbackcliente) {
				return View::make('app.feedbackcliente.thank_you_final',compact('feedbackcliente'));
			}
			return 'redirect rigth now';
		}
		return 'no code';	
	}

}
