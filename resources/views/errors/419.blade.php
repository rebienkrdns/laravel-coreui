@extends('layouts.error')

@section('page_title', 'Internal server error')

@section('content')
    <div class="clearfix">
        <h1 class="float-left display-3 mr-4">419</h1>
        <h4 class="pt-3">Houston, we have a problem!</h4>
        <p class="text-muted">The page you are looking for is temporarily unavailable.</p>
    </div>
    <div class="input-prepend input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">
                <i class="fa fa-search"></i>
            </span>
        </div>
        <input class="form-control" id="prependedInput" size="16" type="text" placeholder="What are you looking for?">
        <span class="input-group-append">
            <button class="btn btn-info" type="button">Search</button>
        </span>
    </div>
@endsection

@push('js')

@endpush

@push('css')

@endpush
