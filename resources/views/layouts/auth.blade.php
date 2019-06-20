<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name') }}</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @stack('css')
</head>
<body class="app flex-row align-items-center">
    <div class="container" id="app">
        <div class="row justify-content-center">
            @yield('content')
        </div>
    </div>
    @routes
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
