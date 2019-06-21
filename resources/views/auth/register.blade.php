@extends('layouts.auth')

@section('content')
<div class="col-md-5">
    <div class="card">
        <div class="card-header">
            <strong>@lang('labels.frontend.auth.register_box_title')</strong>
        </div>
        <div class="card-body">
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
                           placeholder="@lang('validation.attributes.frontend.name')"
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
                    @lang('labels.frontend.auth.register_button')
                </button>

            </form>
            <a href="{{ route('login') }}" class="btn btn-link px-0">
                @lang('labels.frontend.auth.back_to_login')
            </a>
        </div>
    </div>
</div>
@endsection
