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
						{{ Form::open(array('action' => 'ClienteController@store', 'class' => '')) }}
						<h4 class="card-title"><a href="{{route('principal.panel')}}" class="" style="font-size: 14px;">Business Dashboard</a> / <a href="{{route('empresa.show',$empresa->id)}}" class="" style="font-size: 14px;">{{$empresa->name}}</a> / Create Client</h4>
						<div class="row">
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">First Name</label>
									<input type="text" class="form-control" name="first_name" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Last Name</label>
									<input type="text" class="form-control" name="last_name" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Email</label>
									<input type="email" class="form-control" name="email" required="true">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<label class="control-label">Phone</label>
									<input type="text" class="form-control" name="phone">
								</div>
							</div>
							<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
								<div class="form-group label-floating is-empty">
									<textarea class="form-control" name="comment" placeholder="Note about the client" rows="4"></textarea>
								</div>
							</div>
							<input type="hidden" name="empresa_id" value="{{$empresa->id}}">
							<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
								<button type="submit" class="btn btn-fill btn-rose">Create Client</button>
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