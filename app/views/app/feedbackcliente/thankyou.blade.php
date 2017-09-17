@extends('app.feedbackcliente.layout')


@section('content')
<div class="container-feedback">
	<div class="business-logo">
		<?php $empresa = Empresa::whereId( $feedbackcliente->empresa_id )->first(); ?>
	</div>
	<div class="business-rating">
		<div class="question">
			<h3>Thank You</h3>
			<br>
		</div>
		<div class="question">
			<br>
			<p>Thank you for your feedback.</p>
			<br>
			<p>Whenever we see feedback that is not outstanding, we like to follow up to see what we could have done better.</p>
			<br>
			<p>We will contact you to address the situation in any way we can.</p>
			<br>
			<p>Once again, thank you for taking the time to let us know how you feel, and I hope we can address this for you.</p>
			<br>
			<p>Sincerely,</p>
			<p>{{$empresa->name}}</p>
		</div>
		<div class="question">
		    <br>
			<h4>What could we have done to make your experience better?</h4>
		</div>
		{{ Form::open(array('action' => 'FeedbackclienteController@send_feedback', 'class' => 'form-review' )) }}
		<input type="hidden" name="feedbackcliente_id" value="{{$feedbackcliente->id}}">
		<div class="message-feedback">
			<textarea cols="3" placeholder="Write comments here..." name="non_positive_feedback"></textarea>
		</div>
		<div class="business-review">
			<button type="submit" class="send-review">Send Recommendation</button>
		</div>
		{{ Form::close() }}
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