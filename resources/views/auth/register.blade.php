@extends('layouts.auth')

@section('content')
<div class="col-md-5">
    <div class="card">
        <div class="card-body">
            <h3>@lang('coreui.auth.register_panel_title')</h3>
            <p class="text-muted">@lang('coreui.auth.register_panel_description')</p>
            <form action="{{ route('register') }}" method="post">

                @csrf

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="icon-user"></i>
                        </span>
                    </div>
                    <input name="name"
                           type="text"
                           class="form-control @error('name') is-invalid @enderror"
                           placeholder="@lang('coreui.auth.name_input')"
                           value="{{ old('name') }}">
                    @error('name')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="icon-envelope"></i>
                        </span>
                    </div>
                    <input name="email"
                           type="text"
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
                    <input name="password"
                           type="password"
                           class="form-control @error('password') is-invalid @enderror"
                           placeholder="@lang('coreui.auth.password_input')">
                    @error('password')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="icon-lock"></i>
                        </span>
                    </div>
                    <input name="password_confirmation"
                           type="password"
                           class="form-control @error('password_confirmation') is-invalid @enderror"
                           placeholder="@lang('coreui.auth.password_confirmation_input')">
                    @error('password_confirmation')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <button class="btn btn-primary btn-block px-4 btn-square" type="submit">
                    @lang('coreui.auth.register_button')
                </button>

            </form>
            <a href="{{ route('login') }}" class="btn btn-link px-0">
                @lang('coreui.auth.login_link')
            </a>
        </div>
    </div>
</div>
@endsection
