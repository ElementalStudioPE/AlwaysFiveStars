@extends('app.layouts-session.master')

@section('content')
<div class="row">
    <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
        {{ Form::open(array('action'=>'SessionController@register', 'class' => '')) }}
        <div class="card card-login card-hidden">
            <br><br>
            <div class="social-login text-center">
                <a href="{{route('session.ingresar.fb')}}" class="btn btn-facebook" style="min-width: 230px;">
                    <i class="fa fa-facebook-square"></i> Connect With Facebook
                </a>
            </div>
            <div class="social-login text-center">
                <a href="{{route('session.ingresar.go')}}" class="btn btn-google" style="min-width: 230px;">
                    <i class="fa fa-google-plus"></i> Connect With Google
                </a>
            </div> 
            <br><br>
            <div style="position: relative;">
                <p class="text-center or-be-classical"><span>Or Be Clasical</span></p>
            </div>
            <div class="card-content">
                <br>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">person</i>
                    </span>
                    <div class="form-group label-floating">
                        <label class="control-label">Name</label>
                        <input name="name" type="text" class="form-control" required="true">
                    </div>
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">email</i>
                    </span>
                    <div class="form-group label-floating">
                        <label class="control-label">Email address</label>
                        <input name="email" type="email" class="form-control" required="true">
                    </div>
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="material-icons">lock_outline</i>
                    </span>
                    <div class="form-group label-floating">
                        <label class="control-label">Password</label>
                        <input name="password" type="password" class="form-control" required="true">
                    </div>
                </div>
            </div>
            <div class="footer text-center">
                <button type="submit" class="btn btn-rose btn-primary" style="width: 100%;max-width: 300px;">Connect With Email</button>
            </div>
        </div>
        {{ Form::close() }}
    </div>
</div>
@stop