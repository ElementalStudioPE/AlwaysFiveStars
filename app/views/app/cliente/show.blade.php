@extends('app.layouts.master')

@section('content')
<div class="content">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header card-header-icon" data-background-color="rose">
						<i class="material-icons">business</i>
					</div>
					<div class="card-content">
						{{ Form::open(array('action' => array('ClienteController@update',$empresa->id,$cliente->id), 'class' => '')) }}
						<h4 class="card-title"><a href="{{route('principal.panel')}}" class="" style="font-size: 14px;">Business Dashboard</a> / <a href="{{route('empresa.show',$empresa->id)}}" class="" style="font-size: 14px;">{{$empresa->name}}</a> / Client</h4>
						<div class="row">
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$first_name = '';
								if ($cliente->first_name != '') {
									$first_name = $cliente->first_name;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">First Name</label>
									<input type="text" class="form-control" name="first_name" required="true" value="{{$first_name}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$last_name = '';
								if ($cliente->last_name != '') {
									$last_name = $cliente->last_name;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Last Name</label>
									<input type="text" class="form-control" name="last_name" required="true" value="{{$last_name}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$email = '';
								if ($cliente->email != '') {
									$email = $cliente->email;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Email</label>
									<input type="email" class="form-control" name="email" required="true" value="{{$email}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$mobile_phone = '';
								if ($cliente->mobile_phone != '') {
									$mobile_phone = $cliente->mobile_phone;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Phone</label>
									<input type="text" class="form-control" name="phone" value="{{$mobile_phone}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$comment = '';
								if ($cliente->comment != '') {
									$comment = $cliente->comment;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<textarea class="form-control" name="comment" placeholder="Note about the client" rows="4">{{$comment}}</textarea>
								</div>
							</div>
							<input type="hidden" name="empresa_id" value="{{$cliente->id}}">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
								<button type="submit" class="btn btn-fill btn-rose">Update info</button>
							</div>
						</div>
						{{ Form::close() }}
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<br>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-content">
						<h4 class="card-title">Reviews</h4>
						<div class="row" style="margin: 0 !important;">
						<?php $feedbackclientes = Feedbackcliente::whereCliente_id($cliente->id)->orderBy('created_at','desc')->get(); ?>
						@foreach($feedbackclientes as $feedbackcliente)
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="border: 1px solid #dedede;padding: 15px 15px 5px 15px !important;margin-top: 10px;">
								<div class="rate_client">
									@if($feedbackcliente->rating == '1')
									<i class="material-icons active">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i>
									@elseif($feedbackcliente->rating == '2')
									<i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i>
									@elseif($feedbackcliente->rating == '3')
									<i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i>	
									@elseif($feedbackcliente->rating == '4')
									<i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons">star_rate</i>
									@elseif($feedbackcliente->rating == '5')
									<i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i> <i class="material-icons active">star_rate</i>
									@else
									<i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i>
									@endif
								</div>
								<div class="form-group" style="margin-top: 5px !important;">
									<strong>Feedback</strong><br>
									{{$feedbackcliente->feedback}}
								</div>
								<div class="form-group" style="margin-top: 0 !important;">
									<strong>Recommendation (Low Review)</strong><br>
									{{$feedbackcliente->non_positive_feedback}}
								</div>
								<div class="form-group text-right" style="margin-top: 0 !important;">
									{{$feedbackcliente->updated_at}}
								</div>
							</div>
							@endforeach
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<br><br>
			</div>
		    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<div>
					<a href="#" class="btn btn-danger" data-toggle="modal" data-target="#businessClient">Delete Client</a>
				</div>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<br><br><br><br><br>
			</div>
		</div>

	</div>
</div>
@stop

@section('modal')



<div class="modal fade" id="businessClient" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
	<div class="modal-dialog" role="document" style="max-width: 550px !important;width: 100% !important;">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Do you want to delete this business?</h4>
			</div>
			{{ Form::open(array('action' => 'ClienteController@delete', 'class' => 'form-inline')) }}
									<input type="hidden" name="empresa_id" value="{{$empresa->id}}">
									<input type="hidden" name="cliente_id" value="{{$cliente->id}}">
									<br>
									<button class="btn btn-danger" style="margin-left: 10px;">Delete Client</button>
									{{ Form::close() }}
		</div>
	</div>
</div>



@stop

@section('css')
<style type="text/css">
	.table > thead > tr > th {
		border-bottom-width: 1px;
		font-size: 1.15em;
		font-weight: 500;
	}
</style>
@stop

@section('js')
<script type="text/javascript">
	@if( Session::has('message') )
	$(document).ready(function(e){
		$.notify({
			icon: "notifications",
			message: "{{Session::get('message')}}"

		},{
			type: "{{Session::get('estado')}}",
			timer: 1000,
			placement: {
				from: 'top',
				align: 'right'
			}
		});
	});
	@endif
</script>
@stop