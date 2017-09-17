@extends('app.feedbackcliente.layout')


@section('content')
<div class="container-feedback">
	<div class="business-logo">
		<?php $empresa = Empresa::whereId( $feedbackcliente->empresa_id )->first(); ?>
	</div>
	<div class="business-rating">
		<div class="question">
			<h3>Thank You</h3>
		</div>
		<div class="question">
			<p>Thank you for your feedback.</p>
			<p>Sincerely,</p>
			<p>{{$empresa->name}}</p>
		</div>
		<div class="question">
			<p><a href="http://alwaysfivestars.com/">AlwaysFiveStars</a></p>
		</div>
	</div>
</div>
@stop

@section('js')

@stop