@extends('app.feedbackcliente.layout')


@section('content')
<div class="container-feedback">
	{{ Form::open(array('action' => 'FeedbackclienteController@send', 'class' => 'form-review', )) }}
	<input type="hidden" name="feedbackcliente_id" value="{{$feedbackcliente->id}}">
	<div class="business-logo">
		 <?php
		    	$empresa = Empresa::whereId( $feedbackcliente->empresa_id )->first();
		    ?>
		    @if( $empresa )
			<img src='{{asset("uploads/business-logo/min500/$empresa->logo")}}' style="max-height: 140px;">
			@else
			<img src="{{asset('static-app/img/business-default.png')}}" style="max-height: 140px;">
			@endif
	</div>
	<div class="business-rating">
		<div class="question">
			<h4>How likely is it that you would reommended our company to a friend or colleague?</h4>
			<br>
		</div>
		<div class="rating">
			<ul>
				<li>
					<input type="radio" id="option1" name="rating" value="1">
					<label for="option1">1</label>
					<div class="check"></div>
				</li>
				<li>
					<input type="radio" id="option2" name="rating" value="2">
					<label for="option2">2</label>
					<div class="check"></div>
				</li>
				<li>
					<input type="radio" id="option3" name="rating" value="3">
					<label for="option3">3</label>
					<div class="check"></div>
				</li>
				<li>
					<input type="radio" id="option4" name="rating" value="4">
					<label for="option4">4</label>
					<div class="check"></div>
				</li>
				<li>
					<input type="radio" id="option5" name="rating" value="5">
					<label for="option5">5</label>
					<div class="check"></div>
				</li>
				<div class="caption" style="display: table;width: 100%;">
					<div class="uno">Not at all likely</div>
					<div class="dos">Neutral</div>
					<div class="tres">Very likely</div>
				</div>
			</ul>
		</div>
		<div class="question">
		    <br>
			<h4>How did you feel about your experience with us?</h4>
		</div>
		<div class="message-feedback">
			<textarea cols="3" placeholder="Write comments here..." name="feedback"></textarea>
		</div>
	</div>
	<div class="business-review">
		<button type="submit" class="send-review">Send Review</button>
	</div>
	{{ Form::close() }}
</div>
@stop

@section('js')
<script src="https://cdn.rawgit.com/alertifyjs/alertify.js/v1.0.10/dist/js/alertify.js"></script>
<script type="text/javascript">
	$(document).on("submit", ".form-review", function (event) {
		var self = this;
		event.preventDefault();
		event.stopImmediatePropagation();

		if ( !$("input[name='rating']:checked").val() ) {
			alertify.alert("Rate the business!");
			return false;
		}
		self.submit();
	});
</script>
@stop