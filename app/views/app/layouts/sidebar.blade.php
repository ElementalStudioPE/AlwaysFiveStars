<div class="sidebar" data-active-color="rose" data-image="" style="color: #a3a3a0;">
    <div class="logo">
        <a href="{{route('principal.panel')}}" class="simple-text">
            <img src="{{asset('static-app/logo-always-five-starts-.png')}}" class="img-responsive">
        </a>
    </div>
    <div class="logo logo-mini">
        <a href="{{route('principal.panel')}}" class="simple-text">
            AFS
        </a>
    </div>
    <div class="sidebar-wrapper">
        <div class="user">
            <div class="info">
                <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                    {{Auth::user()->nombre}}
                </a>
            </div>
        </div>
        <ul class="nav">
            <li class="active">
                <a href="{{route('principal.panel')}}">
                    <i class="material-icons">home</i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li>
                <a data-toggle="collapse" href="#business">
                    <i class="material-icons">business</i>
                    <p>Business
                        <b class="caret"></b>
                    </p>
                </a>
                <div class="collapse" id="business">
                    <ul class="nav">
                        @foreach( Empresa::whereUser_id(Auth::user()->id)->get() as $empresa )
                        <li>
                            <a href="{{route('empresa.show',$empresa->id)}}">{{$empresa->name}}</a>
                        </li>
                        @endforeach
                        <li>
                            <a href="{{route('empresa.create')}}">Agregar Empresa</a>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <a href="{{route('principal.clientes')}}">
                    <i class="material-icons">group</i>
                    <p>Clients</p>
                </a>
            </li>
            @if(Auth::user()->is_admin == 1)
            <li>
                <a href="{{route('principal.users')}}">
                    <i class="material-icons">group</i>
                    <p>Users</p>
                </a>
            </li>
            <li>
                <a href="{{route('principal.templates')}}">
                    <i class="material-icons">mail</i>
                    <p>Template</p>
                </a>
            </li>            
            @endif
        </ul>
    </div>
</div>