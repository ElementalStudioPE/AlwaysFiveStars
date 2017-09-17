<?php

class SessionController extends BaseController {

    public function ingresar()
    {
        return View::make('app.ingresar');
    }

    public function registrar()
    {
        return View::make('app.registrar');
    }

    public function cancelled()
    {
        return View::make('app.cancelled');
    }

    public function cambiar_contrasena($codigo_password)
    {
        if ( $codigo_password == '' ) {
            return Redirect::route('principal.inicio');
        }
        $usuario = User::whereCodigo_password($codigo_password)->first();
        if(!$usuario){  
            return Redirect::route('principal.inicio');
        }
        return View::make('principal.cambiar_contrasena',compact('usuario'));
    }

    public function olvide_contrasenapost()
    {
        if( Purifier::clean(Input::get('password')) == '' ){
            return Redirect::back()->with('errorMsg','Ingresa una contraseña válida');
        }

        $usuario = User::whereCodigo_password( Purifier::clean(Input::get('codigo_password')) )->first();
        # verifica que el usuario exista
        if ( !$usuario ) {
            return Redirect::route('principal.inicio');
        }

        $user = User::find($usuario->id);
        $user->codigo_password = '';
        $user->password = Hash::make(Purifier::clean(Input::get('password')));
        $user->save();

        Auth::login($usuario);

        return Redirect::route('session.login.flg');

    }

    public function olvide_contrasena()
    {
        # Validamos los campos obligatorios
        if( Purifier::clean(Input::get('email')) == '' ){
            return 'error-email';
        }

        # Validamos que no exista un usuario con el mismo correo
        $userExiste = User::whereEmail( Purifier::clean(Input::get('email')) )->first();
        if (!$userExiste) {
            return 'error-email-no-existe';
        }

        $codigo_password = uniqid().rand(66666, 666666666);

        $usuario = User::find( $userExiste->id );
        $usuario->codigo_password   = $codigo_password;
        $usuario->save();

        Mail::send('emails.recuperar-clave', array( 'codigo_password'=>$codigo_password), function($message)
        {
          $message->from('info@assistsalud.com', 'Contraseña - Assist Salud');
          $message->to(Purifier::clean(Input::get('email')));
          $message->subject('Restablecer contraseña de Assist Salud');
      });

        return 'exito';

        # Envio de correo de registro

        return Redirect::route('activacion.espera');
    }

    public function login()
    {
        if (Auth::attempt(array('email' => Purifier::clean(Input::get('email')),'password' => Purifier::clean(Input::get('password')) ),true)){
            return Redirect::route('principal.panel');
        }else{
            Session::flash('estado', 'danger');
            Session::flash('message', '¡Invalid credentials!');
            return Redirect::back();
        }

    }

    public function waiting($codigo = null)
    {

        if (Auth::check() && Auth::user()->estado == '2') {
            return Redirect::route('account.cancelled');
        }
        
        if ( Auth::check() and is_null($codigo) ) {
            if ( Auth::user()->estado == 0 ) {
                return Redirect::route('principal.panel');
            }
            return View::make('app.espera');
        }

        $usuario = User::whereCodigo_verificacion($codigo)->first();

        if (!isset($usuario)) {
            if ( Auth::check() ) {
                return View::make('session.waiting');
            }
            else{
                return Redirect::route('session.ingresar');
            }
        }

        Auth::login($usuario);
        $user = User::find( $usuario->id );
        $user->estado = 0;
        $user->save();
        return Redirect::route('principal.panel');

    }

    public function nuevo_estado(){
        if (Auth::check()) {
            if (Auth::user()->is_admin == 1) {
                $user = User::whereId( Purifier::clean(Input::get('user_id')) )->first();
                if ($user) {
                    $userEdit = User::find($user->id);
                    $userEdit->estado = Purifier::clean(Input::get('nuevo_estado'));
                    $userEdit->save();
                }
                return '404';
                // return Redirect::back();
            }
            return '404';
            // return Redirect::route('principal.panel');
        }
        return '404';
        // return Redirect::route('session.ingresar');
    }

    public function register()
    {

        # Validamos los campos obligatorios
        if( Purifier::clean(Input::get('name')) == '' ){
            Session::flash('estado', 'danger');
            Session::flash('message', '¡The name is required!');
            return Redirect::back();
        }
        if( Purifier::clean(Input::get('email')) == '' ){
            Session::flash('estado', 'danger');
            Session::flash('message', '¡The email is required!');
            return Redirect::back();
        }
        if( Purifier::clean(Input::get('password')) == '' ){
            Session::flash('estado', 'danger');
            Session::flash('message', '¡The password is required!');
            return Redirect::back();
        }

        # Validamos que no exista un usuario con el mismo correo
        $correoValido = User::whereEmail(Purifier::clean(Input::get('email')))->first();
        if ($correoValido) {
            Session::flash('estado', 'danger');
            Session::flash('message', '¡There is an account with the same email!');
            return Redirect::back();
        }

        $codigo_verificacion = uniqid().rand(66666, 666666666);

        $count = User::count() +1 ;

        if ( strlen($count) == '1' ) {
            $previo = '00000';
        }
        elseif ( strlen($count) == '2' ) {
            $previo = '0000';
        }
        elseif ( strlen($count) == '3' ) {
            $previo = '000';
        }
        elseif ( strlen($count) == '4' ) {
            $previo = '00';
        }
        else{
            $previo = '0';
        }

        $username = date("Y").$previo.$count.rand(111, 999).time();

        $user = new User();
        $user->username             = $username;
        $user->nombre_completo      = Purifier::clean(Input::get('name'));
        $user->nombre               = Purifier::clean(Input::get('name'));
        $user->email                = Purifier::clean(Input::get('email'));
        $user->password             = Hash::make( Purifier::clean(Input::get('password')) );
        $user->codigo_verificacion  = $codigo_verificacion;
        $user->estado               = 5;
        $user->save();

        // El usuario se está creando
        $activo = 0;

        $email = Purifier::clean(Input::get('email'));

        // Hacer esto hasta que el usuario haya sido creado y pueda ser editado
        while ( $activo == 0 ) {
            $usuario = User::whereEmail( $email )->first();
            if ( $usuario ) {
                $uLogin = User::find($usuario->id);
                Auth::login($uLogin);
                $activo = 1;
            }
        }

        // Mail::send('emails.registro', array( 'codigo_verificacion'=>$codigo_verificacion), function($message) use ($email)
        // {
        //     $message->from('sergiosaavedra@tudemia.com', 'Account activation - AlwaysFiveStars');
        //     $message->to($email);
        //     $message->subject('New Account AlwaysFiveStars');
        // });

        // Mail::send('emails.registro_admin', array( 'codigo_verificacion'=>$codigo_verificacion), function($message) use ($email)
        // {
        //     $message->from('sergiosaavedra@tudemia.com', 'Account register - AlwaysFiveStars');
        //     $message->to('sergiosaavedratorres@gmail.com');
        //     $message->subject('New Account AlwaysFiveStars');
        // });

        Session::flash('estado', 'success');
        Session::flash('message', '¡Verify your account!');
        return Redirect::route('session.waiting');
    }


    public function ingresarGoogle() {

        $code = Input::get( 'code' );
        $googleService = OAuth::consumer( 'Google' );

        if ( !empty( $code ) ) {

            $token = $googleService->requestAccessToken( $code );
            $me = json_decode( $googleService->request( 'https://www.googleapis.com/oauth2/v1/userinfo' ), true );

            if ( array_key_exists('email', $me) ) {
                $user = User::whereEmail( $me['email'] )->first();
            }
            elseif ( array_key_exists('link', $me) ) {
                $user = User::whereGo_link_social( $me['link'] )->first();
            }
            elseif( array_key_exists('id', $me) ){
                $user = User::whereGo_uid( $me['id'] )->first();
            }

            if (empty($user)) {

                if (Auth::check()) {
                    return 'Ya estas logueado';
                }
                else{

                    $username = $this->uniqUsername();

                    $user = new User;
                    if (array_key_exists('name', $me)) {
                        $user->nombre_completo    = $me['name'];
                    }
                    if (array_key_exists('given_name', $me)) {
                        $user->nombre             = $me['given_name'];
                    }
                    if (array_key_exists('family_name', $me)) {
                        $user->apellido           = $me['family_name'];
                    }
                    $user->username         = $username;

                    if (array_key_exists('email', $me)) {
                        $user->email      = $me['email'];
                    }
                    if (array_key_exists('id', $me)) {
                        $user->go_uid     = $me['id'];
                    }
                    if (array_key_exists('picture', $me)) {
                        $user->go_photo   = $me['picture'];
                    }
                    if (array_key_exists('link', $me)) {
                        $user->go_link    = $me['link'];
                    }
                    $user->save();

                     Mail::send('emails.registro_admin', array( 'codigo_verificacion'=>$codigo_verificacion), function($message) use ($email)
                        {
                            $message->from('sergiosaavedra@tudemia.com', 'Account register - AlwaysFiveStars');
                            $message->to('sergiosaavedratorres@gmail.com');
                            $message->subject('New Account AlwaysFiveStars');
                        });
                }
            }



            $uLogin = User::find($user->id);
            Auth::login($uLogin);
            return Redirect::route('principal.panel');

        }

        else {
            $url = $googleService->getAuthorizationUri();
            return Redirect::to( (string)$url );
        }
    }

    public function ingresarFacebook(){

        $code = Input::get( 'code' );
        $OAuth = new OAuth();
        $OAuth::setHttpClient('CurlClient');
        $fb = $OAuth::consumer( 'Facebook' , Purifier::clean(Input::get('redirectUri')));

        if ( !empty( $code ) ) {
            
            $token = $fb->requestAccessToken( $code );
            $me = json_decode( $fb->request( '/me?fields=id,name,email' ), true );

            $user = User::whereFb_uid($me['id'])->first();
            if (empty($user)) {

                if (Auth::check()) {
                    $usuario = User::whereId(Auth::user()->id)->first();

                    $this->procesarImagen($me['id'],Auth::user()->username);

                    $usuario->fb_uid        = $me['id'];
                    $usuario->photo         = Auth::user()->username.'.png';
                    $usuario->fb_link       = 'https://www.facebook.com/app_scoped_user_id/'.$me['id'];
                    $usuario->save();

                }
                else{

                    $username = $this->uniqUsername();

                    $user = new User;
                    $user->nombre_completo  = $me['name'];
                    $user->nombre           = $me['name'];
                    $user->username         = $username;

                    $this->procesarImagen($me['id'],$username);

                    if (array_key_exists('email', $me)) {
                        $user->email        = $me['email'];
                    }

                    $user->fb_uid           = $me['id'];
                    $user->photo            = $username.'.png';
                    $user->fb_link          = 'https://www.facebook.com/app_scoped_user_id/'.$me['id'];
                    $user->save();

                    Mail::send('emails.registro_admin', array( 'codigo_verificacion'=>$codigo_verificacion), function($message) use ($email)
                        {
                            $message->from('sergiosaavedra@tudemia.com', 'Account register - AlwaysFiveStars');
                            $message->to('sergiosaavedratorres@gmail.com');
                            $message->subject('New Account AlwaysFiveStars');
                        });


                }
            }


            $user = User::whereFb_uid($me['id'])->first();

            if ( $user->id == 1 ) {
                Session::put('admin-session', 'Sergio Saavedra');
            }

            Auth::login($user);
            return Redirect::route('principal.panel');
            // return Redirect::to( (string) Session::get('previus_url'));

        }
        else {
            $url = $fb->getAuthorizationUri();
            return Redirect::to( (string)$url );
        }
    }

    private function procesarImagen($facebookId,$username)
    {
        $response = file_get_contents('http://graph.facebook.com/'.$facebookId.'/picture?redirect=0&height=200&type=normal&width=200');
        $array = json_decode($response, true);
        $destinationPath = 'uploads/user/photo';
        Image::make($array['data']['url'])->resize(200, null, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$username.'.png');
    }

    private function uniqUsername()
    {
        $IsUsernameUnico='0';
        while ($IsUsernameUnico =='0')
        {
            $username = strtolower(str_random(5).date('now').str_random(5));
            $ExisteUsuario = DB::table('users')->where('username','=',$username)->first();
            if (empty($ExisteUsuario)) {
                $IsUsernameUnico = '1';
            }
        }
        return $username;
    }

    public function logout()
    {
        if( Auth::check() )
        {
            Auth::logout();
            return Redirect::route('principal.inicio');
        }
        else{
            # En caso el usuario no este logueado se envia al ...
            return Redirect::route('session.ingresar');
        }
    }

}
