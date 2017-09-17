
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
                <a class="navbar-brand" href="{{route('principal.inicio')}}">AlwaysFiveStars</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="">
                        <a href="{{route('session.ingresar')}}">
                            <i class="material-icons">fingerprint</i> Ingresar
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="wrapper wrapper-full-page">
        <div class="full-page pricing-page" data-image="http://i-cdn.phonearena.com/images/reviews/187602-image/Apple-iPad-Pro-Review-007.jpg">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-offset-3 text-center">
                            <h2 class="title">Pick the best plan for you</h2>
<!--                             <h5 class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h5> -->
                        </div>
                    </div>
                    <div class="row" style="background: rgba(0, 0, 0, 0.54);margin-top: 100px;">
                        <div class="col-md-3">
                            <div class="card card-pricing card-plain">
                                <div class="card-content">
                                    <h6 class="category">Trial</h6>
                                    <div class="icon">
                                        <i class="material-icons">weekend</i>
                                    </div>
                                    <h3 class="card-title">FREE</h3>
                                    <p class="card-description">
                                        Only for 7 days
                                    </p>
                                    <a href="#pablo" class="btn btn-white btn-round">Choose Plan</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card card-pricing card-plain">
                                <div class="card-content">
                                    <h6 class="category">Small Company</h6>
                                    <div class="icon icon-rose">
                                        <i class="material-icons">home</i>
                                    </div>
                                    <h3 class="card-title">$9</h3>
                                    <p class="card-description">
                                        This is good if your company size is between 2 and 10 customers.
                                    </p>
                                    <a href="#pablo" class="btn btn-white btn-round">Choose Plan</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card card-pricing card-raised">
                                <div class="card-content">
                                    <h6 class="category">Medium Company</h6>
                                    <div class="icon">
                                        <i class="material-icons">business</i>
                                    </div>
                                    <h3 class="card-title">$29</h3>
                                    <p class="card-description">
                                        This is good if your company size is between 11 and 99 customers.
                                    </p>
                                    <a href="#pablo" class="btn btn-rose btn-round">Choose Plan</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card card-pricing card-plain">
                                <div class="card-content">
                                    <h6 class="category">Enterprise</h6>
                                    <div class="icon">
                                        <i class="material-icons">account_balance</i>
                                    </div>
                                    <h3 class="card-title">$59</h3>
                                    <p class="card-description">
                                        This is good if your company size is 99+ customers.
                                    </p>
                                    <a href="#pablo" class="btn btn-white btn-round">Choose Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
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
<!--  Google Maps Plugin    -->
<script src="https://maps.googleapis.com/maps/api/js"></script>
<!-- Select Plugin -->
<script src="{{asset('static-app/js/jquery.select-bootstrap.js')}}"></script>
<!--  DataTables.net Plugin    -->
<script src="{{asset('static-app/js/jquery.datatables.js')}}"></script>
<!-- Sweet Alert 2 plugin -->
<script src="{{asset('static-app/js/sweetalert2.js')}}"></script>
<!--    Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
<script src="{{asset('static-app/js/jasny-bootstrap.min.js')}}"></script>
<!--  Full Calendar Plugin    -->
<script src="{{asset('static-app/js/fullcalendar.min.js')}}"></script>
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
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    });
</script>

</html>