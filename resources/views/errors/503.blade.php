@extends('layouts.error')

@section('page_title', trans('http.503.title'))

@section('content')
    <div class="clearfix">
        <h1 class="float-left display-3 mr-4">503</h1>
        <h4 class="pt-3">@lang('http.503.title')</h4>
        <p class="text-muted">@lang('http.503.description')</p>
    </div>
@endsection

@push('js')

@endpush

@push('css')

@endpush
