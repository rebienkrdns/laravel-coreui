@extends('layouts.auth')

@section('content')
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h3>@lang('coreui.auth.password_reset_panel_title')</h3>
                <p class="text-muted">@lang('coreui.auth.password_reset_panel_description')</p>
                <form action="{{ route('password.update') }}" method="post">

                    @csrf

                    <input type="hidden" value="{{ $token }}" name="token">

                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

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
                               value="{{ $email, old('email') }}">
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
                        @lang('coreui.auth.password_reset_button')
                    </button>

                </form>
            </div>
        </div>
    </div>
@endsection
