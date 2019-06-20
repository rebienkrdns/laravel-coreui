@extends('layouts.auth')

@section('content')
<div class="col-md-5">
    <div class="card py-3">
        <div class="card-body">
            <h3>@lang('Register')</h3>
            <p class="text-muted">@lang('Register a account.')</p>
            <register-component></register-component>
            <a href="{{ route('login') }}" class="btn btn-link px-0">
                @lang('Already account?')
            </a>
        </div>
    </div>
</div>
@endsection
