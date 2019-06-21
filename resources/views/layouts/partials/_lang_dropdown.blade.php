<li class="nav-item dropdown px-3">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="icon-globe"></i>
        <span class="d-md-down-none">@lang('menus.language-picker.language') ({{ strtoupper(app()->getLocale()) }})</span>
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <div class="dropdown-header text-center">
            <strong>@lang('menus.language-picker.choose_language')</strong>
        </div>
        <a class="dropdown-item" href="{{ route('switchLocale', 'es') }}">
            <i class="flag-icon flag-icon-es"></i>
            @lang('menus.language-picker.langs.es')
        </a>
        <a class="dropdown-item" href="{{ route('switchLocale', 'en') }}">
            <i class="flag-icon flag-icon-us"></i>
            @lang('menus.language-picker.langs.en')
        </a>
        <a class="dropdown-item" href="{{ route('switchLocale', 'pt-BR') }}">
            <i class="flag-icon flag-icon-br"></i>
            @lang('menus.language-picker.langs.pt_BR')
        </a>
    </div>
</li>
