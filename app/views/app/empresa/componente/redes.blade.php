<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
	<div class="form-group label-floating" style="margin-top: 0 !important;">
		<h4 style="margin-top: 25px !important;margin-bottom: 0px !important;"><strong>Get reviews in social</strong></h4>
	</div>
</div>
<?php $empresa = Empresa::whereId($id)->first(); ?>
@if( $empresa )
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="padding-left: 85px;">
	@foreach( Red::all() as $red )
	<?php 
	$isEmpty = '';
	$link = '';
	$empresaRed = Empresared::whereEmpresa_id($empresa->id)->where('red_id','=',$red->id)->first();
	if ($empresaRed) {
		$link = $empresaRed->link;
	} else {
		$isEmpty = 'is-empty';
	}
	?>
	<div class="form-group label-floating {{$isEmpty}} form-redes">
		<img src="{{asset('static-app/img/redes/'.$red->icon)}}">
		<label class="control-label">{{$red->nombre}} URL</label>
		<input type="text" class="form-control" name="red{{$red->id}}" value="{{$link}}">
	</div>
	@endforeach
</div>
@else
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="padding-left: 85px;">
	@foreach( Red::all() as $red )
	<div class="form-group label-floating is-empty form-redes">
		<img src="{{asset('static-app/img/redes/'.$red->icon)}}">
		<label class="control-label">{{$red->nombre}} URL</label>
		<input type="text" class="form-control" name="red{{$red->id}}" value="">
	</div>
	@endforeach
</div>
@endif