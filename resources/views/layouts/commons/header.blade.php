<header class="app-header navbar">
    <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="{{ route('home') }}">
        <img class="navbar-brand-full" src="{{ asset('images/brand/logo.svg') }}" width="89" height="25" alt="CoreUI Logo">
        <img class="navbar-brand-minimized" src="{{ asset('images/brand/sygnet.svg') }}" width="30" height="30" alt="CoreUI Logo">
    </a>
    <button class="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
        <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="nav navbar-nav d-md-down-none">
        @include('layouts.partials._lang_dropdown')
    </ul>
    <ul class="nav navbar-nav ml-auto">
        @include('layouts.partials._user_dropdown')
    </ul>
</header>
