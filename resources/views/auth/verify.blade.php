@extends('layouts.auth')

@section('content')
<div class="col-md-5">
    <div class="card">
        <div class="card-header">
            <strong>@lang('labels.frontend.auth.verify_box_title')</strong>
        </div>
        <div class="card-body">
            <p class="text-muted">
                @lang('labels.frontend.auth.verify_content')
                <a href="{{ route('verification.resend') }}">
                @lang('labels.frontend.auth.verify_resend')
                </a>
            </p>
        </div>
    </div>
</div>
@endsection
