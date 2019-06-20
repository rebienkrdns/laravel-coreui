@extends('layouts.app')

@section('page_title', trans('Home'))

@section('breadcrumbs')
{{ Breadcrumbs::render('home') }}
@endsection

@section('content')
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">@lang('Home')</div>

            <div class="card-body">
                @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
                @endif

                @lang('You are logged in!')
            </div>
        </div>
    </div>
</div>
@endsection

@push('css')

@endpush

@push('js')

@endpush
