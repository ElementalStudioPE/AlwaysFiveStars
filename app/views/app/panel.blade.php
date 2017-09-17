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
						<h4 class="card-title">Business Dashboard</h4>
						<div class="row">
							<div class="col-md-12">
								<div class="table-responsive">
									<div class="row action-business">
										<div class="col-xs-12">
											<button class="btn btn-sm btn-white" data-toggle="modal" data-target="#disableBusiness">Disable</button> 
										    @if( Empresa::whereUser_id(Auth::user()->id)->where('estado','=','2')->count() > 0 )
										    <button class="btn btn-sm btn-white" data-toggle="modal" data-target="#enableBusiness">Enable</button> 
										    @endif
											<button class="btn btn-sm btn-danger" data-toggle="modal" data-target="#deleteBusiness">Delete</button>
										</div>
									</div>
									<table class="table">
										<thead class="text-rose">
											<tr>
												<th></th>
												<th>Business<br>Name</th>
												<th># Feedback<br>Request Sent</th>
												<th># Feedback<br>Request Rec'd</th>
												<th>Positive<br>Feedback</th>
												<th>Non-Positive<br>Feedback</th>
												<th>Total Online<br>Reviews</th>
												<th>Edit<br>Business</th>
											</tr>
										</thead>
										<tbody>
											@foreach( $empresas as $empresa )
											<?php $feedbackclienteSend = Feedbackcliente::whereEmpresa_id($empresa->id)->count(); ?>
											<?php $feedbackclienteReviews = Feedbackcliente::whereEmpresa_id($empresa->id)->whereIn('status', array(1, 2))->count(); ?>
											<?php $feedbackclienteReceived = Feedbackcliente::whereEmpresa_id($empresa->id)->where('status','=','2')->count(); ?>
											<?php $feedbackclienteReceivedNonPositive = Feedbackcliente::whereEmpresa_id($empresa->id)->whereIn('status', array(1, 2))->where('rating','<','3')->count(); ?>
											<?php $feedbackclienteReceivedPositive = Feedbackcliente::whereEmpresa_id($empresa->id)->whereIn('status', array(1, 2))->where('rating','>','2')->count(); ?>
											<tr>
												<td>
													<div class="checkbox">
														<label>
															<input type="checkbox" name="checkbox{{$empresa->id}}" class="checkbox_empresa" value="{{$empresa->id}}">
														</label>
													</div>
												</td>
												<td><a href="{{route('empresa.show',$empresa->id)}}">
												@if($empresa->estado == 2)
												<button class="btn btn-warning btn-xs">Disable</button>
												@endif
												<i class="material-icons">search</i> {{$empresa->name}}</a>
												</td>
												<td>{{$feedbackclienteSend}}</td>
												<td>{{$feedbackclienteReceived}}</td>
												<td>{{$feedbackclienteReceivedPositive}}</td>
												<td>{{$feedbackclienteReceivedNonPositive}}</td>
												<td>{{$feedbackclienteReviews}}</td>
												<td>
													<a href="{{route('empresa.edit',$empresa->id)}}" type="button" class="btn btn-success btn-simple btn-xs" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit" aria-describedby="tooltip871083">
														<i class="material-icons">edit</i>
													</a>
												</td>
											</tr>
											@endforeach
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<input type="hidden" id="empresaArray" value="">
						<div class="row">
							<div class="col-md-12 text-right">
								<br><br>
								<a href="{{route('empresa.create')}}" class="btn btn-primary btn-rose"><i class="material-icons">add_circle_outline</i> Add Business</a>
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

<div class="modal fade" id="disableBusiness" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
	<div class="modal-dialog" role="document" style="max-width: 450px !important;width: 100% !important;">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Do you want to <strong>DISABLE</strong> selected business?</h4>
				<br><br>
			</div>
			<div class="modal-footer">
			    <span class="gif-loading" style="display: none;">
			    	<img src="{{asset('static-app/img/loading_ajax.gif')}}" style="max-width: 40px;">
			    </span>
				<button type="button" class="btn btn-default btn-simple close-modal" data-dismiss="modal">Close</button>
				<button type="submit" class="btn btn-warning Disable-Business">Disable Business</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="deleteBusiness" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
	<div class="modal-dialog" role="document" style="max-width: 450px !important;width: 100% !important;">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Do you want to <strong>DELETE</strong> selected business?</h4>
				<br><br>
			</div>
			<div class="modal-footer">
			    <span class="gif-loading" style="display: none;">
			    	<img src="{{asset('static-app/img/loading_ajax.gif')}}" style="max-width: 40px;">
			    </span>
				<button type="button" class="btn btn-default btn-simple close-modal" data-dismiss="modal">Close</button>
				<button type="submit" class="btn btn-danger Delete-Business">Delete Business</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="enableBusiness" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
	<div class="modal-dialog" role="document" style="max-width: 450px !important;width: 100% !important;">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Do you want to <strong>ENABLE</strong> selected business?</h4>
				<br><br>
			</div>
			<div class="modal-footer">
			    <span class="gif-loading" style="display: none;">
			    	<img src="{{asset('static-app/img/loading_ajax.gif')}}" style="max-width: 40px;">
			    </span>
				<button type="button" class="btn btn-default btn-simple close-modal" data-dismiss="modal">Close</button>
				<button type="submit" class="btn btn-success Enable-Business">Enable Business</button>
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
	.action-business{
		margin: 0 !important;
		background: #e5e5e5;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;
		display: none;
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
	$(document).ready(function(){
		$('.checkbox_empresa').click(function(){
			var empresaArray = [];
			$(".checkbox_empresa").each(function(){
			    if( $(this).is(':checked') ) {
			    	empresaArray.push(  $(this).val()  );
			 	}
			});
			console.log(empresaArray);
			if (empresaArray.length > 0) {
				$('.action-business').show();
				$('#empresaArray').val(empresaArray);
				// alert( $('#empresaArray').val() );
			}
			else{
				$('.action-business').hide();
				$('#empresaArray').val('');
			}
		});
		// DISABLE
		$('.Disable-Business').click(function(){
				// Inicio del Ajax
				empresaArray = $('#empresaArray').val();
				ruta = "{{route('empresa.disable')}}"
				$.ajax({
			        type: 'POST',
			        headers: {'X-CSRF-Token': $('meta[name="_token"]').attr('content')},
			        url: ruta,
			        data: {business: empresaArray },
			        complete: function(data) {
			          console.log('complete');
			        },
			        success: function (data) {
			        	console.log('data '+data);
			            $.notify({
							icon: "notifications",
							message: "Great... Wait page reload"

						},{
							type: "success",
							timer: 1000,
							placement: {
								from: 'top',
								align: 'right'
							}
						});

					    setTimeout(function () { 
					      location.reload();
					    }, 1800);

			        },
			        error: function(errors) {
			          $.notify({
							icon: "notifications",
							message: "Oops... Something was wrong!"

						},{
							type: "danger",
							timer: 1000,
							placement: {
								from: 'top',
								align: 'right'
							}
						});
			        }
			    });
			    // Fin del Ajax
		});
		// ENABLE
		$('.Enable-Business').click(function(){
				// Inicio del Ajax
				empresaArray = $('#empresaArray').val();
				ruta = "{{route('empresa.enable')}}"
				$.ajax({
			        type: 'POST',
			        headers: {'X-CSRF-Token': $('meta[name="_token"]').attr('content')},
			        url: ruta,
			        data: {business: empresaArray },
			        complete: function(data) {
			          console.log('complete');
			        },
			        success: function (data) {
			        	console.log('data '+data);
			            $.notify({
							icon: "notifications",
							message: "Great... Wait page reload"

						},{
							type: "success",
							timer: 1000,
							placement: {
								from: 'top',
								align: 'right'
							}
						});

					    setTimeout(function () { 
					      location.reload();
					    }, 1800);

			        },
			        error: function(errors) {
			          $.notify({
							icon: "notifications",
							message: "Oops... Something was wrong!"

						},{
							type: "danger",
							timer: 1000,
							placement: {
								from: 'top',
								align: 'right'
							}
						});
			        }
			    });
			    // Fin del Ajax
		});
		// DELETE
		$('.Delete-Business').click(function(){
				// Inicio del Ajax
				empresaArray = $('#empresaArray').val();
				ruta = "{{route('empresa.delete')}}"
				$.ajax({
			        type: 'POST',
			        headers: {'X-CSRF-Token': $('meta[name="_token"]').attr('content')},
			        url: ruta,
			        data: {business: empresaArray },
			        complete: function(data) {
			          console.log('complete');
			        },
			        success: function (data) {
			        	console.log('data '+data);
			            $.notify({
							icon: "notifications",
							message: "Great... Wait page reload"

						},{
							type: "success",
							timer: 1000,
							placement: {
								from: 'top',
								align: 'right'
							}
						});

					    setTimeout(function () { 
					      location.reload();
					    }, 1800);

			        },
			        error: function(errors) {
			          $.notify({
							icon: "notifications",
							message: "Oops... Something was wrong!"

						},{
							type: "danger",
							timer: 1000,
							placement: {
								from: 'top',
								align: 'right'
							}
						});
			        }
			    });
			    // Fin del Ajax
		});
	});
</script>
@stop