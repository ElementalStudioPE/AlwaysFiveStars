
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>AlwaysFiveStars</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <!--  Social tags      -->
    <meta name="keywords" content="">
    <meta name="description" content="">
    <!-- Schema.org markup for Google+ -->
    <meta itemprop="name" content="">
    <meta itemprop="description" content="">
    <meta itemprop="image" content="">
    <!-- Twitter Card data -->
    <meta name="twitter:card" content="">
    <meta name="twitter:site" content="">
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:creator" content="">
    <meta name="twitter:image" content="">
    <!-- Open Graph data -->
    <meta property="fb:app_id" content="">
    <meta property="og:title" content="" />
    <meta property="og:type" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="" />
    <meta property="og:site_name" content="" />
    <!-- Bootstrap core CSS     -->
    <link href="{{asset('static-app/css/bootstrap.min.css')}}" rel="stylesheet" />
    <!--  Material Dashboard CSS    -->
    <link href="{{asset('static-app/css/material-dashboard.css')}}" rel="stylesheet" />
    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="{{asset('static-app/css/demo.css')}}" rel="stylesheet" />
    <!--     Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" />
    <meta name="google-site-verification" content="Wq40G50llhJ7wSXAVoaDvMriHRDcJa-8PvyvIFBd1X0" />
    <style type="text/css">
        .or-be-classical::before{
            content: "";
            position: absolute;
            bottom: 9px;
            border: 1px solid #d0d0d0;
            width: 80%;
            left: 10%;
        }
        .or-be-classical span{
            background: white;
            z-index: 9;
            position: relative;
            padding: 5px 10px;
        }
        .full-page:before {
            background-color: rgb(71, 71, 71) !important;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-primary navbar-transparent navbar-absolute">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="{{route('principal.inicio')}}" style="padding-top: 0;">
                    <img src="{{asset('static-app/logo-always-five-starts-.png')}}" class="img-responsive" style="max-height: 120px;margin-top: -15px;">
                </a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="">
                        <a href="{{route('principal.inicio')}}">
                            <i class="material-icons">home</i> Inicio
                        </a>
                    </li>
                    <li class="">
                        <a href="{{route('session.ingresar')}}">
                            <i class="material-icons">fingerprint</i> Login
                        </a>
                    </li>
                    <li class="">
                        <a href="{{route('session.registrar')}}">
                            <i class="material-icons">fingerprint</i> Register
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="wrapper wrapper-full-page">
        <div class="full-page login-page" filter-color="black">
            <div class="content">
                <div class="container">
                    @if( Session::has('message') )
                    <div class="row">
                        <div class="col-md-12">
                            <div class="btn btn-{{Session::get('estado')}}" style="width: 100%;text-align: left;">
                                {{Session::get('message')}}
                            </div>
                        </div>
                    </div>
                    @endif
                    @yield('content')
                </div>
            </div>
            <footer class="footer">
                <div class="container">
                    <nav class="pull-left">
                        <ul>

                        </ul>
                    </nav>
                    <p class="copyright pull-right">
                        &copy; 2017 <a href="#">AlwaysFiveStars</a>
                    </p>
                </div>
            </footer>
        </div>
    </div>
</body>
<!--   Core JS Files   -->
<script src="{{asset('static-app/js/jquery-3.1.1.min.js')}}" type="text/javascript"></script>
<script src="{{asset('static-app/js/jquery-ui.min.js')}}" type="text/javascript"></script>
<script src="{{asset('static-app/js/bootstrap.min.js')}}" type="text/javascript"></script>
<script src="{{asset('static-app/js/material.min.js')}}" type="text/javascript"></script>
<script src="{{asset('static-app/js/perfect-scrollbar.jquery.min.js')}}" type="text/javascript"></script>
<!-- Forms Validations Plugin -->
<script src="{{asset('static-app/js/jquery.validate.min.js')}}"></script>
<!--  Plugin for Date Time Picker and Full Calendar Plugin-->
<script src="{{asset('static-app/js/moment.min.js')}}"></script>
<!--  Charts Plugin -->
<script src="{{asset('static-app/js/chartist.min.js')}}"></script>
<!--  Plugin for the Wizard -->
<script src="{{asset('static-app/js/jquery.bootstrap-wizard.js')}}"></script>
<!--  Notifications Plugin    -->
<script src="{{asset('static-app/js/bootstrap-notify.js')}}"></script>
<!--   Sharrre Library    -->
<script src="{{asset('static-app/js/jquery.sharrre.js')}}"></script>
<!-- DateTimePicker Plugin -->
<script src="{{asset('static-app/js/bootstrap-datetimepicker.js')}}"></script>
<!-- Vector Map plugin -->
<script src="{{asset('static-app/js/jquery-jvectormap.js')}}"></script>
<!-- Sliders Plugin -->
<script src="{{asset('static-app/js/nouislider.min.js')}}"></script>
<!-- Select Plugin -->
<script src="{{asset('static-app/js/jquery.select-bootstrap.js')}}"></script>
<!--  DataTables.net Plugin    -->
<script src="{{asset('static-app/js/jquery.datatables.js')}}"></script>
<!-- Sweet Alert 2 plugin -->
<script src="{{asset('static-app/js/sweetalert2.js')}}"></script>

<script src="{{asset('static-app/js/jasny-bootstrap.min.js')}}"></script>
<!--  Full Calendar Plugin    -->
<!-- TagsInput Plugin -->
<script src="{{asset('static-app/js/jquery.tagsinput.js')}}"></script>
<!-- Material Dashboard javascript methods -->
<script src="{{asset('static-app/js/material-dashboard.js')}}"></script>
<!-- Material Dashboard DEMO methods, don't include it in your project! -->
<script src="{{asset('static-app/js/demo.js')}}"></script>
<script type="text/javascript">
    $().ready(function() {
        demo.checkFullPageBackgroundImage();

        setTimeout(function() {
            $('.card').removeClass('card-hidden');
        }, 700)
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

</html>