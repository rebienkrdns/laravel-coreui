<li class="nav-item dropdown px-3">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="icon-globe"></i>
        @lang('Language')
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <div class="dropdown-header text-center">
            <strong>@lang('Choose language')</strong>
        </div>
        <a class="dropdown-item" href="{{ route('switchLocale', 'es') }}">
            <i class="flag-icon flag-icon-es"></i>
            @lang('Espanish')
        </a>
        <a class="dropdown-item" href="{{ route('switchLocale', 'en') }}">
            <i class="flag-icon flag-icon-us"></i>
            @lang('English')
        </a>
        <a class="dropdown-item" href="{{ route('switchLocale', 'pt-BR') }}">
            <i class="flag-icon flag-icon-br"></i>
            @lang('Portuguese')
        </a>
    </div>
</li>
