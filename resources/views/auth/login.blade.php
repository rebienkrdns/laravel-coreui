@extends('layouts.auth')

@section('content')
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <strong>@lang('labels.frontend.auth.login_box_title')</strong>
            </div>
            <div class="card-body">
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
                               placeholder="@lang('validation.attributes.frontend.email')"
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
                               placeholder="@lang('validation.attributes.frontend.password')">
                        @error('password')
                        <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <button class="btn btn-primary btn-block px-4 btn-square" type="submit">
                        @lang('labels.frontend.auth.login_button')
                    </button>
                </form>

                @if(Route::has('password.request'))
                    <a href="{{ route('password.request') }}" class="btn btn-link px-0">
                        @lang('labels.frontend.passwords.forgot_password')
                    </a>
                @endif

                @if (Route::has('register'))
                    <a href="{{ route('register') }}" class="btn btn-link px-0 float-right">
                        @lang('labels.frontend.auth.create_account')
                    </a>
                @endif

            </div>
        </div>
    </div>
@endsection
