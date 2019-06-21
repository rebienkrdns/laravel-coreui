@extends('layouts.auth')

@section('content')
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h3>@lang('coreui.auth.login_panel_title')</h3>
                <p class="text-muted">@lang('coreui.auth.login_panel_description')</p>

                <form action="{{ route('login') }}" method="post">

                    @csrf

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="icon-envelope"></i>
                        </span>
                        </div>
                        <input type="text"
                               name="email"
                               class="form-control @error('email') is-invalid @enderror"
                               placeholder="@lang('coreui.auth.email_input')"
                               value="{{ old('email') }}">
                        @error('email')
                        <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <div class="input-group mb-4">
                        <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="icon-lock"></i>
                        </span>
                        </div>
                        <input type="password"
                               name="password"
                               class="form-control @error('password') is-invalid @enderror"
                               placeholder="@lang('coreui.auth.password_input')">
                        @error('password')
                        <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <button class="btn btn-primary btn-block px-4 btn-square" type="submit">
                        @lang('coreui.auth.login_button')
                    </button>

                </form>
                <div class="row">
                    @if(Route::has('password.request'))
                        <div class="col-6">
                            <a href="{{ route('password.request') }}" class="btn btn-link px-0">
                                @lang('coreui.auth.forgot_password_link')
                            </a>
                        </div>
                    @endif
                    @if (Route::has('register'))
                        <div class="col-6">
                            <a href="{{ route('register') }}" class="btn btn-link px-0">
                                @lang('coreui.auth.register_link')
                            </a>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
