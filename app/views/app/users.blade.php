@extends('app.layouts.master')

@section('content')
<div class="content" style="padding-top: 0 !important;">
	<div class="container-fluid">
		<h3><strong>Users</strong></h3>
		
		<div class="row">
			<div class="col-md-12">
				<div class="card">
					<div class="card-content">
						<h4 class="card-title">
							<a href="{{route('principal.panel')}}" class="" style="font-size: 14px;">Business Dashboard</a> / Users
						</h4>
						<div class="row">
							<div class="col-md-12">
								<div class="table-default">
									<table class="table">
										<thead class="">
											<tr>
												<th>Name</th>
												<th>Email</th>
												<th class="tr-rate_client text-center">Status</th>
												<th class="tr-rate_client text-center">New status</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											@foreach(User::all() as $user)
											<tr>
												{{ Form::open( array('action' => 'SessionController@nuevo_estado', 'class' => 'form-inline'  ) ) }}
												<td>{{$user->nombre_completo}}</td>
												<td>{{$user->email}}</td>
												<td>
													@if($user->estado == 0)
													<p style="color:green;font-weight: bold;">Account Verify</p>
													@elseif($user->estado == 5)
													<p style="color:orange;font-weight: bold;">Verify Pending</p>
													@else
													<p style="color:red;font-weight: bold;">Account Cancelled</p>
													@endif
												</td>
												<td class="estado">
													<div class="form-group" style="margin-top: 0 !important;">
														<select name="nuevo_estado" class="nuevo_estado form-control" required="true">
															<option value="">Choose New State</option>
															<option value="0">Verify</option>
															<option value="5">No Verify</option>
															<option value="2">Cancelled</option>
														</select>
													</div>
												</td>
												<td>
													<input type="hidden" name="user_id" class="user_id" value="{{$user->id}}">
													<button type="submit" class="btn btn-primary btn-update-info">Change Status</button>
												</td>
												{{ Form::close() }}
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
	});
</script>
<script type="text/javascript">
    $(document).on("click",".btn-update-info",function(e){
      e.preventDefault();
      var ruta = "{{route('nuevo.estado')}}";

      $(this).prop('disabled', true);

      $btn_submmit = $(this);

      user_id = $(this).siblings('.user_id').val();
      nuevo_estado    = $(this).parent().siblings('.estado').children('.form-group').children('.nuevo_estado').children('option:selected').val();

      // alert(user_id);

      $.ajax({
        type: 'POST',
        headers: {'X-CSRF-Token': $('meta[name="_token"]').attr('content')},
        url: ruta,
        data: {user_id: user_id, nuevo_estado:nuevo_estado },
        complete: function(data) {
          console.log('complete');
        },
        success: function (data) {
            $.notify({
				icon: "notifications",
				message: "Status Updated"

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
		    }, 2000);

        },
        error: function(errors) {
          $.notify({
				icon: "notifications",
				message: "Status No Updated"

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

    });
</script>
@stop
