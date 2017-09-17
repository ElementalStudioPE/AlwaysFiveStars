@extends('app.feedbackcliente.layout')


@section('content')
<div class="container-feedback">
	<div class="business-logo">
		<?php
		$empresa = Empresa::whereId( $feedbackcliente->empresa_id )->first();
		?>
		@if( $empresa )
		<img src='{{asset("uploads/business-logo/min500/$empresa->logo")}}' style="max-height: 140px;">
		@else
		<img src="https://unity3d.com/profiles/unity3d/themes/unity/images/company/brand/logos/primary/unity-logo.png" style="max-height: 140px;">
		@endif
	</div>
	<div class="business-rating">
		<div class="question">
			@if($empresa)
			<h2 style="text-align: center;">{{$empresa->name}}</h2>
			@else
			<h2 style="text-align: center;">Empresa nombre</h2>
			@endif

			<br>
		</div>
		<div class="question">
			<h3>Follow us in</h3>
			<br>
		</div>
		<div class="social">
			<div class="social-login text-center">
				@foreach( Empresared::whereEmpresa_id($empresa->id)->get() as $empresared )
				<?php $red = Red::whereId($empresared->red_id)->first() ?>
				<a href="{{$empresared->link}}" style="position: relative; cursor:pointer; display: inline-block; text-decoration: none; background-color: {{$red->color}}; border-radius: 2px; white-space: nowrap; width: 100%; max-width: 350px; color: #ffffff; font-size: 16px; border-radius: 5px; padding: 11px 0; margin: 8px 0; text-align: left;" target="_blank">
					&nbsp;&nbsp;&nbsp;
					<img alt="" style="vertical-align: middle; position: relative; max-height: 27px;" src='{{asset("static-app/img/redes/$red->icon")}}'>
					&nbsp;&nbsp;&nbsp;
					<span style="position: absolute; left: 70px;    line-height: 30px;">Review us on {{$red->nombre}}</span>
					&nbsp;
				</a>
				@endforeach
			</div>
		</div>
		<div class="question">
			<br>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
	</div>
	@stop

	@section('css')
<style type="text/css">
	p {
	    margin: 0 !important;
	}
</style>
@stop