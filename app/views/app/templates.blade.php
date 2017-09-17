@extends('app.layouts.master')

@section('content')
<div class="content" style="padding-top: 0 !important;">
	<div class="container-fluid">
		<h3><strong>Templates</strong></h3>
		
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-content">
						<h4 class="card-title">
							<a href="{{route('principal.panel')}}" class="" style="font-size: 14px;">Business Dashboard</a> / Templates
						</h4>
						<div class="row">
							<div class="col-md-12">
								<div class="table-default">
									<table class="table">
										<thead class="">
											<tr>
												<th>Name</th>
												<th>Subject</th>
												<th>Body</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											<?php $template = Template::whereId(1)->first(); ?>
											<tr>
												{{ Form::open( array('action' => 'TemplateController@update', 'class' => 'form-inline'  ) ) }}
												<td>{{$template->name}}</td>
												<td>
													<h5>You <strong>CAN'T</strong> use shortcode</h5>
													<textarea name="tema" style="max-height: 200px !important;">{{$template->tema}}</textarea>
												</td>
												<td>
													<h5>You <strong>CAN</strong> use shortcode</h5>
													<textarea name="mensaje">{{$template->mensaje}}</textarea>
												</td>
												<td>
													<input type="hidden" name="id" class="id" value="{{$template->id}}">
													<button type="submit" class="btn btn-primary btn-update-info">Update Email Template</button>
												</td>
												{{ Form::close() }}
											</tr>
										</tbody>
									</table>
								</div>
								<div>
									<div class="row" style="margin: 0 !important;">
									<div class="text-center">
										<br><br><br><br>
										<h4>ShortCodes</h4>
										<br>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[customer-first-name]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[customer-last-name]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[customer-full-name]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[customer-email]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[customer-mobile-phone]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[customer-comment]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-name]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-logo]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-owner-first-name]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-owner-last-name]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-owner-email]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-country]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-state-province]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-city]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-address]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-postal-code]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-phone]</strong>
									</div>
									<div class="col-md-3 col-sm-4 col-xs-6">
										<strong>[business-website]</strong>
									</div>
								</div>
								</div>
							</div>
						</div>
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

@section('modal')


@stop

@section('css')
<style type="text/css">
	.table > thead > tr > th {
		border-bottom-width: 1px;
		font-size: 1.15em;
		font-weight: 500;
	}
	.statistical .card-stats .card-header i {
		font-size: 22px;
		line-height: 22px;
		width: 18px;
		height: 10px;
		margin-top: 2px;
	}
	textarea{
		width: 100%;
	    min-height: 450px;
	    padding: 10px;
	    border: 2px #e8e8e8 solid !important;
	}
</style>
@stop

@section('js')
<script type="text/javascript">
	$(document).on('click','.btn-upload-csv', function(){
		$('#csv-content').slideToggle();
	});
</script>
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
