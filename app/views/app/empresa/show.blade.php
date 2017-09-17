@extends('app.layouts.master')

@section('content')
<div class="content" style="padding-top: 0 !important;">
	<div class="container-fluid">
		<h3><a href="{{route('empresa.edit',$empresa->id)}}"><strong>{{$empresa->name}}</strong></a> <a href="{{route('empresa.edit',$empresa->id)}}" type="button" class="btn btn-success btn-simple btn-xs"><i class="material-icons">edit</i> Edit</a></h3>
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header-icon">
						@if($empresa->logo !='')
						<div class="text-left">
							<img src="{{asset('uploads/business-logo/min200/'.$empresa->logo)}}" alt="{{$empresa->logo}}" style="max-width: 60px;margin-bottom: 0px;margin-left: 20px;margin-top: -20px;">
						</div>
						@else
						<div class="text-left">
							<img src="https://placeholdit.imgix.net/~text?w=150&h=100" alt="{{$empresa->logo}}" style="max-width: 60px;margin-bottom: 0px;margin-left: 20px;margin-top: -20px;">
						</div>
						@endif
					</div>
					<div class="card-content">
						<div class="row">
							<div class="col-md-12">
								<div class="table-responsive">
									<table class="table">
										<thead class="">
											<tr>
												<!-- <th><a href="{{ route('empresa.show', array($empresa->id) ) }}">All Customers</a></th>
												<th><a href="{{ route('empresa.show', array($empresa->id,'q=send') ) }}">Feedback Requests Sent</a></th>
												<th><a href="{{ route('empresa.show', array($empresa->id,'q=received') ) }}">Feedback Received</a></th>
												<th><a href="{{ route('empresa.show', array($empresa->id,'q=positive') ) }}">Positive Reviews</a></th>
												<th><a href="{{ route('empresa.show', array($empresa->id,'q=non-positive') ) }}">Non-Positive Reviews</a></th>
												<th><a href="{{ route('empresa.show', array($empresa->id,'q=total-reviews') ) }}">Total Online Reviews</a></th> -->
												<th>All Customers</th>
												<th>Feedback Requests Sent</th>
												<th>Feedback Received</th>
												<th>Positive Reviews</th>
												<th>Non-Positive Reviews</th>
												<th>Total Online Reviews</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<?php $totalCliente = Cliente::whereEmpresa_id($empresa->id)->count(); ?>
												<?php $feedbackclienteSend = Feedbackcliente::whereEmpresa_id($empresa->id)->count(); ?>
												<?php $feedbackclienteReviews = Feedbackcliente::whereEmpresa_id($empresa->id)->whereIn('status', array(1, 2))->count(); ?>
												<?php $feedbackclienteReceived = Feedbackcliente::whereEmpresa_id($empresa->id)->where('status','=','2')->count(); ?>
												<?php $feedbackclienteReceivedNonPositive = Feedbackcliente::whereEmpresa_id($empresa->id)->whereIn('status', array(1, 2))->where('rating','<','3')->count(); ?>
												<?php $feedbackclienteReceivedPositive = Feedbackcliente::whereEmpresa_id($empresa->id)->whereIn('status', array(1, 2))->where('rating','>','2')->count(); ?>
												<td>{{$totalCliente}}</td>
												<td>{{$feedbackclienteSend}}</td>
												<td>{{$feedbackclienteReceived}}</td>
												<td>{{$feedbackclienteReceivedPositive}}</td>
												<td>{{$feedbackclienteReceivedNonPositive}}</td>
												<td>{{$feedbackclienteReviews}}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-content">
						<h4 class="card-title">
							<a href="{{route('principal.panel')}}" class="" style="font-size: 14px;">Business Dashboard</a> / {{$empresa->name}}
						</h4>
						<div class="row">
							<div class="col-md-12">
								<div class="table-responsive">
									<table class="table">
										<thead class="">
											<tr>
												<th>Fullname</th>
												<th>Email</th>
												<th class="tr-rate_client text-center">Reviews</th>
												<th>Feedback</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											@foreach( $clientes as $cliente )
											<tr>
												<td><a href="{{route('clientes.show', array($empresa->id,$cliente->id))}}"><i class="material-icons">search</i> {{$cliente->full_name}}</a></td>
												<?php $cantidad = Feedbackcliente::whereCliente_id($cliente->id)->orderby('created_at','desc')->count(); ?>
												<td>
													{{$cliente->email}}
													@if($cantidad > 1)
													<span style="color: #efb00d;font-weight: bold;">({{$cantidad}})</span>
													@endif
												</td>
												<td class="rate_client">
												    <?php $feedbackcliente = Feedbackcliente::whereCliente_id($cliente->id)->orderby('created_at','desc')->first(); ?>
												    @if($feedbackcliente)
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
													@else
													<i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i> <i class="material-icons">star_rate</i>
													@endif
													
												</td>
												@if($feedbackcliente)
												<td>
													<strong>Feedback </strong> <br>
													{{$feedbackcliente->feedback}}
													@if($feedbackcliente->non_positive_feedback != '')
													<strong>Recommendation </strong> <br>
													{{$feedbackcliente->non_positive_feedback}}
													@endif
												</td>
												@else
												<td>no feedback</td>
												@endif
												<td>
													@if($feedbackcliente)
														@if($feedbackcliente->status == '0')
														    <p class="text-normal">
														    	<strong>
																<a href="#" class="text-normal" data-toggle="modal" data-target="#sendMail{{$cliente->id}}"><i class="material-icons">add_circle_outline</i></a> Feedback Sended
															</strong>
														    </p>
															
														@elseif($feedbackcliente->status == '0')
														@else
														<p>
															<strong>
																<a href="#" class="" data-toggle="modal" data-target="#sendMail{{$cliente->id}}"><i class="material-icons">add_circle_outline</i></a> Feedback received
															</strong>
															</p>
														@endif
													@else
													<p class="text-default text-success">
															<strong>
																<a href="#" class="text-success" data-toggle="modal" data-target="#sendMail{{$cliente->id}}"><i class="material-icons">add_circle_outline</i></a> Send Feedback Request
															</strong>
													</p>
													@endif
												</td>
											</tr>
											@endforeach
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 text-right">
				<br>
				<a href="{{route('clientes.create',$empresa->id)}}" class="btn btn-primary btn-rose"><i class="material-icons">add_circle_outline</i> Add One Client</a>
				<a href="#" class="btn btn-white btn-upload-csv"><i class="material-icons">add_circle_outline</i> Add Massive Clients (XLSX)</a>
			</div>
			<div class="col-md-12">
				<div id="csv-content" style="display: none;">
					<div class="card">
						<div class="card-content">
							<h4 class="card-title">
								<a href="{{asset('demo.xlsx')}}" class="" style="font-size: 14px;color: #efb00d;">Download XLSX Example here</a>
							</h4>
							<div class="row">
								<div class="col-md-12">
									<h3>Upload Massive Clients</h3>
									<br>
									{{ Form::open(array('action' => 'ClienteController@massive_store_csv', 'class' => 'form-inline', 'files' => true)) }}
									<input type="hidden" name="empresa_id" value="{{$empresa->id}}">
									<input type="file" name="file_clients" required="true" class="">
									<br>
									<button class="btn btn-primary btn-rose">Upload File</button>
									{{ Form::close() }}
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

<?php
$empresatemplate = Empresatemplate::whereEmpresa_id($empresa->id)->first();
if ($empresatemplate) {
	$subject = $empresatemplate->tema;
	$message = $empresatemplate->mensaje;
}
else{
	$template = Template::whereStatus(1)->where('code','=','main-feedback')->orderBy('created_at','desc')->first();
	$subject = $template->tema;
	$message = $template->mensaje;
}
?>

@foreach( Cliente::whereEmpresa_id($empresa->id)->get() as $cliente )
<?php
$feedbackcliente = Feedbackcliente::whereCliente_id($cliente->id)->where('empresa_id',$empresa->id)->first();
if ($feedbackcliente) {
	$subject = $feedbackcliente->tema;
	$message = $feedbackcliente->mensaje;
}
?>
<div class="modal fade" id="sendMail{{$cliente->id}}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
	<div class="modal-dialog" role="document" style="max-width: 450px !important;width: 100% !important;">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Send Feedback Request</h4>
			</div>
			{{ Form::open(array('action' => 'EmpresaController@send_feedback_cliente', 'class' => 'modal-cliente')) }}
			<input type="hidden" name="empresa_id" value="{{$empresa->id}}">
			<input type="hidden" name="cliente_id" value="{{$cliente->id}}">
			<div class="modal-body">
				<div class="form-inline">
					<div class="form-group" style="width: 100% !important;">
						<input type="hidden" class="cliente_id" value="{{$cliente->id}}">
						<div>
							<label>To:</label>
						</div>
						<input class="form-control" value="{{$cliente->full_name}}<{{$cliente->email}}>" readonly style="width: 100% !important;">
					</div>
					<div class="form-group" style="width: 100% !important;">
						<div>
							<label>Subject:</label>
						</div>
						<input class="form-control tema" name="subject" value="{{$subject}}" type="text" style="width: 100% !important;">
					</div>
					<div class="form-group" style="width: 100% !important;">
							<div>
								<label>Help Shortcodes:</label>
							</div>
							<p><a href="#" class="show-more">Show More</a></p>
							<div class="Shortcodes" style="display: none;">
								<div class="row">
									<div class="col-xs-6">
										<strong>[customer-first-name]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[customer-last-name]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[customer-full-name]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[customer-email]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[customer-mobile-phone]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[customer-comment]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-name]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-logo]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-owner-first-name]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-owner-last-name]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-owner-email]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-country]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-state-province]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-city]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-address]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-postal-code]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-phone]</strong>
									</div>
									<div class="col-xs-6">
										<strong>[business-website]</strong>
									</div>
								</div>
							</div>
						</div>
					<div class="form-group" style="width: 100% !important;">
						<div>
							<label>Message:</label>
						</div>
						<textarea class="form-control mensaje" name="message" style="width: 100%;min-height: 190px;">{{$message}}</textarea>
					</div>
					<div class="save_email_template form-group" style="width: 100% !important;">
						<div class="save_email_template checkbox" style="margin-bottom: 0px !important;margin-top: 0px !important;">
							<label>
								<input tabindex="1" type="checkbox" name="save_email_template" value="yes"> <i class="material-icons" style="vertical-align: middle;">save</i> <span style="vertical-align: middle;">Update the business email template</span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
			    <span class="gif-loading" style="display: none;">
			    	<img src="{{asset('static-app/img/loading_ajax.gif')}}" style="max-width: 40px;">
			    </span>
				<button type="button" class="btn btn-default btn-simple close-modal" data-dismiss="modal">Close</button>
				<button type="submit" class="btn btn-primary send-request">Send Request</button>
			</div>
			{{ Form::close() }}
		</div>
	</div>
</div>
@endforeach

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
<script type="text/javascript">
	$(document).ready(function(){
		jQuery(".modal-cliente").submit(function(e) {
			var self = this;
			e.preventDefault();
			$(this).children('.modal-footer').children('.gif-loading').show();
			$(this).children('.modal-footer').children('.close-modal').hide();
			$(this).children('.modal-footer').children('.send-request').prop('disabled', true);
		    self.submit();
		    return false;
		 });
		$('.show-more').click(function(){
			$(this).parent().siblings('.Shortcodes').show();
			$(this).hide();
		});
	});
</script>
@stop