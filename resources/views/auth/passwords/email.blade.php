@extends('layouts.auth')

@section('content')
<div class="col-md-4">
    <div class="card py-3">
        <div class="card-body">
            <h3>@lang('Reset password')</h3>
            <p class="text-muted">@lang('An email will be sent with the link to reset your password.')</p>
            <password-email-component></password-email-component>
            <a href="{{ route('login') }}" class="btn btn-link px-0">
                @lang('Back to login')
            </a>
        </div>
    </div>
</div>
@endsection
