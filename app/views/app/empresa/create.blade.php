@extends('app.layouts.master')

@section('content')
<div class="content">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-content">
						{{ Form::open(array('action' => 'EmpresaController@store', 'class' => '', 'files' => true)) }}
						<h4 class="card-title"><a href="{{route('principal.panel')}}" class="" style="font-size: 14px;">Business Dashboard</a> / Create Business</h4>
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div class="fileinput fileinput-new text-right" data-provides="fileinput" style="width: 100%;">
									<div class="text-right">
										<span class="btn btn-rose btn-file">
											<span class="fileinput-new">Add Logo</span>
											<span class="fileinput-exists">Change Logo</span>
											<input type="hidden"><input type="file" name="business_logo" required="true">
											<div class="ripple-container"></div>
										</span>
									</div>
									<div class="fileinput-preview"></div>
								</div>
								<div class="fileinput-new text-right">
                                	<img src="{{asset('static-app/img/business-default.png')}}" style="max-height: 140px;">
                                </div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Business Name</label>
									<input type="text" class="form-control" name="name" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Owner First Name</label>
									<input type="text" class="form-control" name="owner_firstname" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Owner Last Name</label>
									<input type="text" class="form-control" name="owner_lastname" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Owner Email</label>
									<input type="email" class="form-control" name="owner_email" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Country</label>
									<input type="text" class="form-control" name="country" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">State/Province</label>
									<input type="text" class="form-control" name="state_province" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">City</label>
									<input type="text" class="form-control" name="city" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Address</label>
									<input type="text" class="form-control" name="address" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Phone</label>
									<input type="tel" id="phone" class="form-control" name="phone" required="true">
									<input type="hidden" name="postal_code" id="dialCode">
									<input type="hidden" name="postal_iso2" id="postal_iso2">
									<input type="hidden" name="postal_name" id="postal_name">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Website</label>
									<input type="text" class="form-control" name="website" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty" style="margin-top: 0 !important;">
									<select name="type" class="selectpicker" data-style="btn-default btn-block" data-menu-style="dropdown-blue" required="true">
										<option value="">Type of Business</option>
										<option value="Agency">Agency</option>
										<option value="Development">Development</option>
										<option value="Education">Education</option>
										<option value="Entreteinment">Entreteinment</option>
										<option value="Hotel">Hotel</option>
										<option value="Manufacture">Manufacture</option>
										<option value="Restaurant">Restaurant</option>
										<option value="Retail">Retail</option>
										<option value="Other">Other</option>
									</select>
								</div>
							</div>
							@include('app.empresa.componente.redes',array('id' => "0"))
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
								<button type="submit" class="btn btn-fill btn-rose">Create Business</button>
							</div>
						</div>
						{{ Form::close() }}
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<br><br><br><br><br>
			</div>
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
	.fileinput-exists + .fileinput-new{
		display: none !important;
	}
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