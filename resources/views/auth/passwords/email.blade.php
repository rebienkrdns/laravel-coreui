@extends('layouts.auth')

@section('content')
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <strong>@lang('labels.frontend.passwords.reset_password_box_title')</strong>
            </div>
            <div class="card-body">
                <form action="{{ route('password.email') }}" method="post">

                    @csrf

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
                               placeholder="@lang('validation.attributes.frontend.email')">
                        @error('email')
                        <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <button class="btn btn-primary btn-block px-4 btn-square" type="submit">
                        @lang('labels.frontend.passwords.send_password_reset_link_button')
                    </button>

                </form>
                <a href="{{ route('login') }}" class="btn btn-link px-0">
                    @lang('labels.frontend.auth.back_to_login')
                </a>
            </div>
        </div>
    </div>
@endsection
