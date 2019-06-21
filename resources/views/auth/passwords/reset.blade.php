@extends('layouts.auth')

@section('content')
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <strong>@lang('labels.frontend.passwords.reset_password_box_title')</strong>
            </div>
            <div class="card-body">
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
                               placeholder="@lang('validation.attributes.frontend.email')"
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
                               placeholder="@lang('validation.attributes.frontend.password')">
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
                               placeholder="@lang('validation.attributes.frontend.password_confirmation')">
                        @error('password_confirmation')
                        <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <button class="btn btn-primary btn-block px-4 btn-square" type="submit">
                        @lang('labels.frontend.passwords.send_password_reset_link_button')
                    </button>

                </form>
            </div>
        </div>
    </div>
@endsection
