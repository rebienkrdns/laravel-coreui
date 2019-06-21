@extends('layouts.auth')

@section('content')
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h3>@lang('coreui.auth.password_email_panel_title')</h3>
                <p class="text-muted">@lang('coreui.auth.password_email_panel_description')</p>
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
                               placeholder="@lang('coreui.auth.email_input')">
                        @error('email')
                        <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>

                    <button class="btn btn-primary btn-block px-4 btn-square" type="submit">
                        @lang('coreui.auth.send_link_by_email')
                    </button>

                </form>
                <a href="{{ route('login') }}" class="btn btn-link px-0">
                    @lang('coreui.auth.back_login_link')
                </a>
            </div>
        </div>
    </div>
@endsection
