@extends('app.layouts.master')

@section('content')
<div class="content">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-content">
						{{ Form::open(array( 'action' => array('EmpresaController@update',$empresa->id), 'class' => '', 'files' => true)) }}
						<h4 class="card-title"><a href="{{route('principal.panel')}}" class="" style="font-size: 14px;">Business Dashboard</a> / <a href="{{route('empresa.show',$empresa->id)}}" class="" style="font-size: 14px;">{{$empresa->name}}</a> / Edit</h4>
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<?php
								($empresa->logo != '') ? $estadoLogo = 'fileinput-exists' : $estadoLogo = 'fileinput-new';
								?>
								@if($empresa->logo !='')
								<div class="fileinput-new text-right">
									<img src="{{asset('uploads/business-logo/min200/'.$empresa->logo)}}" alt="{{$empresa->logo}}">
								</div>
								@else
								<div class="fileinput-new text-right">
									<img src="{{asset('static-app/img/business-default.png')}}" style="max-height: 140px;">
								</div>
								@endif
								<div class="fileinput {{$estadoLogo}} text-right" data-provides="fileinput" style="width: 100%;">
									<div class="fileinput-preview"></div>
									<div class="text-right">
										<span class="btn btn-primary btn-file btn-sm">
											<span class="fileinput-new">Add Logo</span>
											<span class="fileinput-exists">Change Logo</span>
											<input type="hidden"><input type="file" name="business_logo" accept="image/*">
											<div class="ripple-container"></div>
										</span>
										<!-- <a href="#" class="btn btn-danger fileinput-exists" data-dismiss="fileinput"><i class="fa fa-times"></i> Remove</a> -->
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$name = '';
								if ($empresa->name != '') {
									$name = $empresa->name;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Business Name</label>
									<input type="text" class="form-control" name="name" required="true" value="{{$name}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$owner_firstname = '';
								if ($empresa->owner_firstname != '') {
									$owner_firstname = $empresa->owner_firstname;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Owner First Name</label>
									<input type="text" class="form-control" name="owner_firstname" required="true" value="{{$owner_firstname}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$owner_lastname = '';
								if ($empresa->owner_lastname != '') {
									$owner_lastname = $empresa->owner_lastname;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Owner Last Name</label>
									<input type="text" class="form-control" name="owner_lastname" required="true" value="{{$owner_lastname}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$owner_email = '';
								if ($empresa->owner_email != '') {
									$owner_email = $empresa->owner_email;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Owner Email</label>
									<input type="email" class="form-control" name="owner_email" required="true" value="{{$owner_email}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$country = '';
								if ($empresa->country != '') {
									$country = $empresa->country;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Country</label>
									<input type="text" class="form-control" name="country" required="true" value="{{$country}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$state_province = '';
								if ($empresa->state_province != '') {
									$state_province = $empresa->state_province;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">State/Province</label>
									<input type="text" class="form-control" name="state_province" required="true" value="{{$state_province}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$city = '';
								if ($empresa->city != '') {
									$city = $empresa->city;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">City</label>
									<input type="text" class="form-control" name="city" required="true" value="{{$city}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$address = '';
								if ($empresa->address != '') {
									$address = $empresa->address;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Address</label>
									<input type="text" class="form-control" name="address" required="true" value="{{$address}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$phone = '';
								if ($empresa->phone != '') {
									$phone = $empresa->phone;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<?php 
								$postal_code = '';
								$postal_iso2 = '';
								$postal_name = '';
								if ($empresa->postal_code != '') {
									$postal_code = $empresa->postal_code;
								}
								if ($empresa->postal_iso2 != '') {
									$postal_iso2 = $empresa->postal_iso2;
								}
								if ($empresa->postal_name != '') {
									$postal_name = $empresa->postal_name;
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Phone</label>
									<input type="tel" id="phone" class="form-control" name="phone" required="true" value="{{$phone}}">
									<input type="hidden" name="postal_code" id="dialCode" value="{{$postal_code}}">
									<input type="hidden" name="postal_iso2" id="postal_iso2" value="{{$postal_iso2}}">
									<input type="hidden" name="postal_name" id="postal_name" value="{{$postal_name}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$website = '';
								if ($empresa->website != '') {
									$website = $empresa->website;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}">
									<label class="control-label">Website</label>
									<input type="text" class="form-control" name="website" required="true" value="{{$website}}">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<?php 
								$isEmpty = '';
								$type = '';
								if ($empresa->type != '') {
									$type = $empresa->type;
								} else {
									$isEmpty = 'is-empty';
								}
								?>
								<div class="form-group label-floating {{$isEmpty}}" style="margin-top: 0 !important;">
									<select name="type" class="selectpicker" data-style="btn-default btn-block" data-menu-style="dropdown-blue" required="true">
										@if( $type == 'Agency' )
										<option value="">Type of Business</option>
										<option value="Agency" selected="true">Agency</option>
										<option value="Education">Education</option>
										<option value="Development">Development</option>
										<option value="Other">Other</option>
										@elseif( $empresa->type == 'Education' )
										<option value="">Type of Business</option>
										<option value="Agency">Agency</option>
										<option value="Education" selected="true">Education</option>
										<option value="Development">Development</option>
										<option value="Other">Other</option>
										@elseif( $empresa->type == 'Development' )
										<option value="">Type of Business</option>
										<option value="Agency">Agency</option>
										<option value="Education">Education</option>
										<option value="Development" selected="true">Development</option>
										<option value="Other">Other</option>
										@else
										<option value="">Type of Business</option>
										<option value="Agency">Agency</option>
										<option value="Education">Education</option>
										<option value="Development" selected="true">Development</option>
										<option value="Other">Other</option>
										@endif
									</select>
								</div>
							</div>
							@include('app.empresa.componente.redes',array('id' => "$empresa->id"))
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
								<button type="submit" class="btn btn-fill btn-primary">Update Business</button>
							</div>
						</div>
						{{ Form::close() }}
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
					<a href="#" class="btn btn-danger" data-toggle="modal" data-target="#businessDelete">Delete Business</a>
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



<div class="modal fade" id="businessDelete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
	<div class="modal-dialog" role="document" style="max-width: 550px !important;width: 100% !important;">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Do you want to delete this business?</h4>
			</div>
			{{ Form::open(array('action' => 'EmpresaController@delete_btn', 'class' => 'form-inline')) }}
			<input type="hidden" name="empresa_id" value="{{$empresa->id}}">
			<br>
			<button class="btn btn-danger" style="margin-left: 10px;">Delete Business</button>
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
	/*.intl-tel-input {
		display: block !important;
	}*/
</style>
<link rel="stylesheet" type="text/css" href="{{asset('static-app/css/intlTelInput.css')}}">
@stop

@section('js')
<script type="text/javascript" src="{{asset('static-app/js/intlTelInput.js')}}"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$("#phone").intlTelInput({
			utilsScript: "{{asset('static-app/js/intlTelInput_utils.js')}}",
		});
		@if($empresa->postal_iso2 != '')
		$("#phone").intlTelInput("setCountry", "{{$empresa->postal_iso2}}");
		@endif
		$("#phone").on("countrychange", function (e, countryData) {
			console.log( countryData.dialCode );
			console.log( countryData.iso2 );
			console.log( countryData.name );
			$("#dialCode").val(countryData.dialCode);
			$("#postal_iso2").val(countryData.iso2);
			$("#postal_name").val(countryData.name);
		});
	});
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