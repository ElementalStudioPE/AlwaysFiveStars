<?php

class CuentaController extends BaseController {

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

	public function panel()
	{
        Session::put('item-sidebar','panel');
		return View::make('cuenta.panel');
	}

	public function datos()
	{
        Session::put('item-sidebar','datos');
		return View::make('cuenta.datos');
	}

    public function actualizar_datos()
    {
        $user = User::find(Auth::user()->id);
        $user->usuario_nombres = Purifier::clean( Input::get('usuario_nombres') );
        $user->usuario_apepat = Purifier::clean( Input::get('usuario_apepat') );
        $user->usuario_apemat = Purifier::clean( Input::get('usuario_apemat') );
        $user->c_tipo_documento = Purifier::clean( Input::get('c_tipo_documento') );
        $user->c_tipo_documento = Purifier::clean( Input::get('c_tipo_documento') );
        $user->c_numero_documento = Purifier::clean( Input::get('c_numero_documento') );
        $user->d_nacimiento = Purifier::clean( Input::get('d_nacimiento') );
        $user->c_sexo = Purifier::clean( Input::get('c_sexo') );
        $user->c_telefono_fijo = Purifier::clean( Input::get('c_telefono_fijo') );
        $user->c_telefono_movil = Purifier::clean( Input::get('c_telefono_movil') );
        $user->pais_cod = Purifier::clean( Input::get('pais_cod') );
        $user->ciudad_codigo = Purifier::clean( Input::get('ciudad_codigo') );
        $user->postal_codigo = Purifier::clean( Input::get('postal_codigo') );
        $user->c_direccion = Purifier::clean( Input::get('c_direccion') );
        $user->save();

        return Redirect::back();
    }

    public function beneficiarios()
    {
        Session::put('item-sidebar','beneficiarios');
        return View::make('cuenta.beneficiarios');
    }

    public function beneficiarios_agregar()
    {

        if (Afiliado::whereUsuario_codigo( Auth::user()->usuario_codigo )->count() >= Auth::user()->plan_suscripcion) {
            return Redirect::back();
        }

        $count = Afiliado::count() +1 ;

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

        $unico = 0;
        while ($unico == 0) {
            $codigo_unico_usuario = date("Y").$previo.$count.rand(111, 999);
            $codigo_unico_usuario = strtoupper($codigo_unico_usuario);
            $userinformationUnico = User::whereCodigo_unico_usuario($codigo_unico_usuario)->first();
            if(!isset($userinformationUnico)) {
                $unico = 1;
            }
        }

        $fecha_nacimiento = Purifier::clean(Input::get('year')).'-'.Purifier::clean(Input::get('month')).'-'.Purifier::clean(Input::get('day'));

        $afiliado = new Afiliado();
        $afiliado->usuario_codigo           = Auth::user()->usuario_codigo;
        $afiliado->afiliado_nombre          = Purifier::clean(Input::get('afiliado_nombres')).' '.Purifier::clean(Input::get('afiliado_apepat')).' '.Purifier::clean(Input::get('afiliado_apemat'));
        $afiliado->afiliado_nombres         = Purifier::clean(Input::get('afiliado_nombres')) ;
        $afiliado->afiliado_apepat          = Purifier::clean(Input::get('afiliado_apepat')) ;
        $afiliado->afiliado_apemat          = Purifier::clean(Input::get('afiliado_apemat')) ;
        $afiliado->codigo_unico_afiliado    = $codigo_unico_usuario;
        $afiliado->d_nacimiento             = $fecha_nacimiento;
        $afiliado->c_sexo                   = Purifier::clean( Input::get('c_sexo') );
        $afiliado->c_tipo_documento         = Purifier::clean(Input::get('c_tipo_documento')) ;
        $afiliado->c_numero_documento       = Purifier::clean(Input::get('c_numero_documento')) ;
        $afiliado->save();

        return Redirect::back();
    }

    public function tracking()
    {
        Session::put('item-sidebar','tracking');
        return View::make('cuenta.tracking');
    }

    public function pagarProcedimiento()
    {

        //Sanitize input data using PHP filter_var().
        $id_usuario = Auth::user()->id;
        $id_carta = Purifier::clean(Input::get('id_carta'));
        $c_numero_pedido = Purifier::clean(Input::get('c_numero_pedido'));
        $id_transaccion = Purifier::clean(Input::get('id_transaccion'));
        $c_ticket =  Purifier::clean(Input::get('c_ticket'));
        $d_fecha = Purifier::clean(Input::get('d_fecha'));
        $c_nombres = Purifier::clean(Input::get('titular_nombre')).' '.Purifier::clean(Input::get('titular_apellido'));
        $c_email = Purifier::clean(Input::get('c_email'));
        $marca_tarjeta = Purifier::clean(Input::get('c_banco_nombre'));
        
        DB::table('tb_pagos')->insert(
            array(
                'c_banco_nombre' => $marca_tarjeta,
                'usuario_codigo' => $id_usuario,
                'c_numero_pedido' => $c_numero_pedido,
                'id_transaccion' => $id_transaccion,
                'c_ticket' => $c_ticket,
                'd_fecha' => $d_fecha,
                'c_nombres' => $c_nombres,
                'c_email' => $c_email
                ));

        DB::table('vsalud_garantia')
            ->where('c_documento', $id_carta)
            ->where('usuario_codigo', $id_usuario)
            ->update(array('flg_pago' => 1));

        return json_encode(array('type'=>'exito', 'text' => ''));
    }

    public function pagos()
    {
        Session::put('item-sidebar','pagos');
        return View::make('cuenta.pagos');
    }

    public function ayuda()
    {
        Session::put('item-sidebar','ayuda');
        return View::make('cuenta.ayuda');
    }

}
