@extends('app.layouts-session.master')

@section('content')
<div class="row">
    <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
        <div class="card card-login card-hidden">
            <br><br>
            <div class="card-content text-center" style="position: relative;">
                <h3>Verify your account</h3>
            </div>
            <div class="card-content text-center">
                <br>
                @if(Auth::check())
                <p>We sended a email confirmation to <strong>{{Auth::user()->email}}</strong> </p>
                @else
                <p>Check your email</p>
                @endif
            </div>
            <br><br>
        </div>
    </div>
</div>
@stop