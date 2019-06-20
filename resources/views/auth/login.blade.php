@extends('layouts.auth')

@section('content')
    <div class="col-md-4">
        <div class="card py-3">
            <div class="card-body">
                <h3>@lang('Login')</h3>
                <p class="text-muted">@lang('Sign In to your account.')</p>
                <login-component></login-component>
                <div class="row">
                    <div class="col-6">
                        <a href="{{ route('password.request') }}" class="btn btn-link px-0">
                            @lang('Forgot password?')
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="{{ route('register') }}" class="btn btn-link px-0">
                            @lang('You need a account?')
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
