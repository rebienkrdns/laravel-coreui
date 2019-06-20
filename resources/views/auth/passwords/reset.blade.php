@extends('layouts.auth')

@section('content')
<div class="col-md-4">
    <div class="card py-3">
        <div class="card-body">
            <h3>@lang('Reset password')</h3>
            <p class="text-muted">@lang('Make sure you put a secure password and write it down in a safe place.')</p>
            <password-reset-component token="{{ $token }}" email="{{ $email }}"></password-reset-component>
        </div>
    </div>
</div>
@endsection
