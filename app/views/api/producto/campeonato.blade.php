<?php $producto = Producto::whereId($productoId)->first(); ?>
<div class="row" style="margin:0 !important;">
	<div class="col-md-6 col-sm-6 col-xs-12">
		<div class="title">
			<h3 class="text-center">SOBRE EL CAMPEONATO</h3>
		</div>
		<div class="">
		    <table class="table table-bordered">
				<thead> 
					<tr> 
						<th class="text-center">EQUIPOS</th>
					</tr>
				</thead> 
				<tbody> 
					<tr> 
						<th scope="row" class="text-center">
							{{-- HTML::image('static/img/copa_campeones_2016_equipos.png', 'Copa de campeones', array('class' => '', 'style' => 'width:100%;max-width:400px;')) --}}
							POR DEFINIR
						</th>
					</tr>
				</tbody>
			</table>
			<table class="table table-bordered">
				<tbody> 
					<tr> 
						<th scope="row" style="vertical-align: middle;">
							LUGAR
						</th>
						<td>
							<div class="">
								<div class="mapa">
									<p>POR DEFINIR</p>
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62429.26999394206!2d-77.08020499382256!3d-12.05525807439626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8db1e539667%3A0x4f45538aa07bda29!2sLima!5e0!3m2!1ses-419!2spe!4v1453219963409" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
								</div>
							</div>
						</td>
					</tr>
					<tr> 
						<th scope="row" style="vertical-align: middle;">
							BASES
						</th>
						<td>
							<a href="#" class="btn btn-deafult pdf">
								<i class="fa fa-file-pdf-o"></i> Ver archivo											
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			
		</div>
	</div>
	<div class="col-md-6 col-sm-6 col-xs-12">
		<div class="title">
			<h3 class="text-left">NOMBRE POR DEFINIR</h3>
		</div>
		<div class="">
			<table class="table table-bordered">
				<tbody> 
					<tr> 
						<th scope="row" style="vertical-align: middle;">
							<a href="#">Fixture</a>
						</th>
					</tr>
					<tr> 
						<th scope="row" style="vertical-align: middle;">
							<a href="#">Resultados</a>
						</th>
					</tr>
					<tr> 
						<th scope="row" style="vertical-align: middle;">
							<a href="#">Tabla de puntaje</a>
						</th>
					</tr>
					<tr> 
						<th scope="row" style="vertical-align: middle;">
							<a href="#">Estadísticas</a>
						</th>
					</tr>
					<tr> 
						<th scope="row" style="vertical-align: middle;">
							<a href="#" id="dream_team">Equipo ideal</a><br>
							<div class="dream_team_dates " style="display:none;margin-left:10px;">
								<div class="margin-bottom-10">

								</div>
								<div class="margin-bottom-10">
									<a href="#">Fecha de grupos #1</a><br>
								</div>
								<div class="margin-bottom-10">
									<a href="#">Fecha de grupos #2</a><br>
								</div>
								<div class="margin-bottom-10">
									<a href="#">Fecha de grupos #3</a>
								</div>
								<div class="margin-bottom-10">
									<a href="#">Fecha de grupos #4</a>
								</div>
								<div class="margin-bottom-10">
									<a href="#">Fecha de grupos #5</a>
								</div>
								<div class="margin-bottom-10">
									<a href="#">Cuartos de final del campeonato</a>
								</div>
								<div class="margin-bottom-10">
									<a href="#">Semifinal del campeonato</a>
								</div>
								<div class="margin-bottom-10">
									<a href="#">Final del campeonato</a>
								</div>
							</div>
						</th>
					</tr>
				</tbody>
			</table>
			<table class="table table-bordered">
				<thead> 
					<tr> 
						<th class="text-center">PARTNERS</th>
					</tr>
				</thead> 
				<tbody> 
					<tr> 
						<th scope="row" class="text-center">
							@foreach(Partner::whereProducto_id($producto->id)->where('image','!=','')->get() as $partner)
							<div class="item_sponsor" >
								<a href="">
									{{ HTML::image('static/img/partners/'.$partner->image, 'Sponsor', array('class' => '', 'style' => '')) }}
								</a>												
							</div>
							@endforeach
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>