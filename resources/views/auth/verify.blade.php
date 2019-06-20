@extends('layouts.auth')

@section('content')
<div class="col-md-5">
    <div class="card py-3">
        <div class="card-body">
            <h3>@lang('Verify Your Email Address')</h3>
            <p class="text-muted">
                @lang('Before proceeding, please check your email for a verification link.') 
                @lang('If you did not receive the email,')
                <a href="{{ route('verification.resend') }}">
                @lang('click here to request another.')
            </p>
        </div>
    </div>
</div>
@endsection
