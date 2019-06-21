@extends('layouts.error')

@section('page_title', 'Internal server error')

@section('content')
    <div class="clearfix">
        <h1 class="float-left display-3 mr-4">403</h1>
        <h4 class="pt-3">@lang('http.403.title')</h4>
        <p class="text-muted">@lang('http.403.description')</p>
    </div>
@endsection

@push('js')

@endpush

@push('css')

@endpush
