<?php

// URL::forceSchema('https');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::when('*', 'csrf', array('post','put','patch','delete'));

// Route::get('/', array('as' => 'principal.inicio','uses' => 'PrincipalController@inicio'));


Route::get('/', array('as' => 'principal.inicio','uses' => 'SessionController@ingresar'));
Route::get('/login', array('as' => 'session.ingresar','uses' => 'SessionController@ingresar'));
Route::get('/register', array('as' => 'session.registrar','uses' => 'SessionController@registrar'));
Route::get('/waiting', array('as' => 'session.waiting','uses' => 'SessionController@waiting'));


Route::get('/cambiar-contrasena/{codigopassword}', array('as' => 'session.cambiar.contrasena','uses' => 'SessionController@cambiar_contrasena'));
Route::post('/olvide-contrasena', array('as' => 'session.olvide.contrasena','uses' => 'SessionController@olvide_contrasena'));
Route::post('/olvide-contrasenapost', array('as' => 'session.olvide.contrasenapost','uses' => 'SessionController@olvide_contrasenapost'));


Route::get('/login/go', array('as' => 'session.ingresar.go','uses' => 'SessionController@ingresarGoogle'));
Route::get('/login/fb', array('as' => 'session.ingresar.fb','uses' => 'SessionController@ingresarFacebook'));
Route::post('/session/login', array('as' => 'session.login','uses' => 'SessionController@login'));
Route::post('/session/register', array('as' => 'session.register','uses' => 'SessionController@register'));
Route::get('/logout', array('as' => 'session.salir','uses' => 'SessionController@logout'));

Route::get('/session/login/flg', array('as' => 'session.login.flg','uses' => 'SessionController@login_flg'));

Route::post('/login/send', array('as' => 'ingresar.send','uses' => 'PrincipalController@login'));

Route::group(array('prefix' => 'feedback'), function()
{
  Route::get('/business/{feedbackcliente}', array('as' => 'feedbackcliente.form','uses' => 'FeedbackclienteController@form'));
  Route::post('/business-send', array('as' => 'feedbackcliente.send','uses' => 'FeedbackclienteController@send'));
  Route::get('/business-thanks', array('as' => 'feedbackcliente.thanks','uses' => 'FeedbackclienteController@thanks'));
  Route::get('/business-thank-you', array('as' => 'feedbackcliente.thank.you','uses' => 'FeedbackclienteController@thankyou'));
  Route::post('/business-thanks-non-positive', array('as' => 'feedbackcliente.thank.non.positive','uses' => 'FeedbackclienteController@send_feedback' ));
  Route::get('/thank-you', array('as' => 'feedbackcliente.thank.you.final' , 'uses' => 'FeedbackclienteController@thank_you_final' ));
});

Route::get('/account/cancelled', array('as' => 'account.cancelled','uses' => 'SessionController@cancelled'));
Route::get('/activacion/espera/{codigo?}', array('as' => 'activacion.espera','uses' => 'SessionController@waiting'));
Route::post('/nuevo-estado', array('as' => 'nuevo.estado','uses' => 'SessionController@nuevo_estado'));

// Route::post('/activacion/resend/email', array('as' => 'activacion.resend.email','uses' => 'ActivacionController@resend_email'));

// Route::get('/suscripcion/plan', array('as' => 'suscripcion.plan','uses' => 'SuscripcionController@plan'));
// Route::post('/suscripcion/plan/post', array('as' => 'suscripcion.plan.post','uses' => 'SuscripcionController@plan_post'));
// Route::post('/suscripcion/plan/codigo', array('as' => 'suscripcion.plan.codigo','uses' => 'SuscripcionController@plan_codigo'));
// Route::get('/suscripcion/datos', array('as' => 'suscripcion.datos','uses' => 'SuscripcionController@datos'));
// Route::post('/suscripcion/datos/post', array('as' => 'suscripcion.datos.post','uses' => 'SuscripcionController@datos_post'));
// Route::get('/suscripcion/pago', array('as' => 'suscripcion.pago','uses' => 'SuscripcionController@pago'));
// Route::post('/suscripcion/pago/post', array('as' => 'suscripcion.pago.post','uses' => 'SuscripcionController@pago_post'));

// Rutas del panel
// Route::get('/cuenta/panel', array('as' => 'cuenta.panel','uses' => 'CuentaController@panel'));

// Route::get('/cuenta/datos', array('as' => 'cuenta.datos','uses' => 'CuentaController@datos'));
// Route::post('/cuenta/datos/actualizar', array('as' => 'cuenta.datos.actualizar','uses' => 'CuentaController@actualizar_datos'));

// Route::get('/cuenta/beneficiarios', array('as' => 'cuenta.beneficiarios','uses' => 'CuentaController@beneficiarios'));
// Route::post('/cuenta/beneficiarios/agregar', array('as' => 'cuenta.beneficiarios.agregar','uses' => 'CuentaController@beneficiarios_agregar'));

// Route::get('/cuenta/tracking', array('as' => 'cuenta.tracking','uses' => 'CuentaController@tracking'));
// Route::post('/cuenta/tracking/pagar', array('as' => 'cuenta.tracking.pagar','uses' => 'CuentaController@pagarProcedimiento'));

// Route::get('/cuenta/pagos', array('as' => 'cuenta.pagos','uses' => 'CuentaController@pagos'));
// Route::get('/cuenta/ayuda', array('as' => 'cuenta.ayuda','uses' => 'CuentaController@ayuda'));



// Route::get('/panel', array('as' => 'panel.index','uses' => 'PanelController@index'));

// Rutas de la empresa

Route::group(array('prefix' => 'dashboard'), function()
{
  Route::get('/', array('as' => 'principal.panel','uses' => 'PrincipalController@panel'));
  Route::get('/clientes', array('as' => 'principal.clientes','uses' => 'PrincipalController@clientes'));
  Route::get('/users', array('as' => 'principal.users','uses' => 'PrincipalController@users'));
  Route::get('/templates', array('as' => 'principal.templates','uses' => 'PrincipalController@templates'));
  Route::post('/templates/update', array('as' => 'principal.templates.update','uses' => 'TemplateController@update'));
  

  Route::get('/notificacion/{id}', array('as' => 'notificacion.main','uses' => 'NotificacionController@main'));

  Route::get('business-create', array('as' => 'empresa.create','uses' => 'EmpresaController@create'));
  Route::post('business-store', array('as' => 'empresa.store','uses' => 'EmpresaController@store'));
  Route::post('business-disable', array('as' => 'empresa.disable','uses' => 'EmpresaController@disable'));
  Route::post('business-enable', array('as' => 'empresa.enable','uses' => 'EmpresaController@enable'));
  Route::post('business-delete', array('as' => 'empresa.delete','uses' => 'EmpresaController@delete'));
  Route::get('business/{empresa}', array('as' => 'empresa.show','uses' => 'EmpresaController@show'));
  Route::get('business/{empresa}/edit', array('as' => 'empresa.edit','uses' => 'EmpresaController@edit'));
  Route::post('business/{empresa}/update', array('as' => 'empresa.update','uses' => 'EmpresaController@update'));
  Route::post('business-delete-btn', array('as' => 'empresa.delete.btn','uses' => 'EmpresaController@delete_btn'));

  Route::get('business/{empresa}/constructor', array('as' => 'mailing.create','uses' => 'MailingController@create'));

  Route::post('business/{empresa}/template/crear', array('as' => 'empresa.templates.crear','uses' => 'EmpresaController@templates_crear'));
  Route::get('business/{empresa}/templates/{template}/edit', array('as' => 'empresa.templates.edit','uses' => 'EmpresaController@templates_edit'));
  Route::post('business/{empresa}/templates/{template}/update', array('as' => 'empresa.templates.update','uses' => 'EmpresaController@templates_update'));

  Route::post('/send-feedback-clients', array('as' => 'empresa.send.feedback.cliente','uses' => 'EmpresaController@send_feedback_cliente'));

  Route::get('business/{empresa}/cliente/crear', array('as' => 'clientes.create','uses' => 'ClienteController@create'));
  Route::post('business/{empresa}/cliente/store', array('as' => 'clientes.store','uses' => 'ClienteController@store'));
  Route::get('business/{empresa}/clientes/{cliente}', array('as' => 'clientes.show','uses' => 'ClienteController@show'));
  Route::get('business/{empresa}/clientes/{cliente}/edit', array('as' => 'clientes.edit','uses' => 'ClienteController@edit'));
  Route::post('business/{empresa}/clientes/{cliente}/update', array('as' => 'clientes.update','uses' => 'ClienteController@update'));
  Route::post('business-clientes-delete', array('as' => 'clientes.delete','uses' => 'ClienteController@delete'));

  Route::post('/massive-store-csv', array('as' => 'clientes.massive.store.csv','uses' => 'ClienteController@massive_store_csv'));

  
});



Route::get('/actu', function(){

  // $u = User::whereId(1)->first();
  $usuario = User::find(1);
  $usuario->username  = 'admin';
  $usuario->email     = 'admin@ess.pe';
  $usuario->password  = Hash::make('admin123');
  $usuario->save();

  return Redirect::back();

});

Route::get('/hola', function(){
  $codigo_verificacion = '213';
  return View::make('emails.registro', compact('codigo_verificacion'));

});

Route::post('enviar-email', array('as' => 'enviar.email', function()
{
    $usuario = new Feedbackuser();
  	$usuario->cliente_id  = Purifier::clean( Input::get('cliente_id') );
  	$usuario->empresa_id  = Purifier::clean( Input::get('empresa_id') );
  	$usuario->save();

    $usuario = new Notificacion();
    $usuario->cliente_id  = Purifier::clean( Input::get('cliente_id') );
    $usuario->empresa_id  = Purifier::clean( Input::get('empresa_id') );
    $usuario->save();

	return Redirect::back();
}));



// Route::get('/actu', function(){

//   // $u = User::whereId(1)->first();
//   $usuario = User::find(1);
//   $usuario->username  = 'admin';
//   $usuario->email     = 'admin@ess.pe';
//   $usuario->password  = Hash::make('admin123');
//   $usuario->save();

//   return 'usuario actualizado con éxito';

// });



Route::get('prueba-envio-email', array('as' => 'prueba.envio.email', function()
{
    $codigo_password = 'pruebaaa';
    Mail::send('emails.business.default', array( 'codigo_password'=>$codigo_password), function($message)
        {
          $message->from('sergiosaavedra@tudemia.com', 'Prueba Correo Alway Five Stars');
          $message->to('sergiosaavedratorres@gmail.com');
          $message->subject('Email de prueba desde Laravel AWS');
      });

    return 'Enviado';
}));


Route::get('email-default', array('as' => 'default.email', function()
{
    return View::make('emails.business.default');
}));

Route::get('email-alert-negative-feedback', array('as' => 'default.negative', function()
{
    return View::make('emails.business.alert-negative-feedback');
}));

Route::get('email-alert-positive-feedback', array('as' => 'default.positive', function()
{
    return View::make('emails.business.alert-positive-feedback');
}));

Route::get('email-response-bad-feedback', array('as' => 'default.response.bad.feedback',function()
{
    return View::make('emails.business.response-bad-feedback');
}));

Route::get('email-response-good-feedback', array('as' => 'default.response.good.feedback',function()
{
    return View::make('emails.business.response-good-feedback');
}));