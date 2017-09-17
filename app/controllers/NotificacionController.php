<?php

class NotificacionController extends BaseController {

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

	public function main($notificacionId)
	{
		$notificacion = Notificacion::whereId($notificacionId)->first();
		if ( is_null($notificacion) ) {
			return Redirect::route('principal.panel');
		}
		if ( Auth::user()->id != $notificacion->user_id ) {
			return Redirect::route('principal.panel');
		}

		$notify = Notificacion::find($notificacionId);
        $notify->revisado     = 1;
        $notify->save();

		return Redirect::to($notificacion->link);
	}

}
