@extends('layouts.auth')

@section('content')
    <div class="col-md-4">
        <div class="card py-3">
            <div class="card-body">
                <h3>@lang('coreui.auth.login_panel_title')</h3>
                <p class="text-muted">@lang('coreui.auth.login_panel_description')</p>
                <login-component></login-component>
                <div class="row">
                    <div class="col-6">
                        <a href="{{ route('password.request') }}" class="btn btn-link px-0">
                            @lang('coreui.auth.forgot_password_link')
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="{{ route('register') }}" class="btn btn-link px-0">
                            @lang('coreui.auth.register_link')
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
