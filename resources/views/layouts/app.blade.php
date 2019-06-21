<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }} - @yield('page_title')</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @stack('css')
</head>
<body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
    @include('layouts.commons.header')
    <div class="app-body">
        @include('layouts.commons.sidebar')
        <main class="main" id="app">
            @yield('breadcrumbs')
            <div class="container">
                <div class="animated fadeIn">
                    @yield('content')
                </div>
            </div>
        </main>
    </div>
    @include('layouts.commons.footer')
    @routes
    <script src="{{ asset('js/app.js') }}"></script>
    @stack('js')
</body>
</html>
