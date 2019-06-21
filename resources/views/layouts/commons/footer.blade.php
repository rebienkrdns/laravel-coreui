<footer class="app-footer">
    <div>
        <span>
            @lang('Copyright')
            <i class="fa fa-copyright"></i>
            {{ date('Y') }} {{ config('app.name') }}
        </span>
    </div>
    <div class="ml-auto">
        <span>@lang('labels.backend.copy_right.developed_by')</span>
        <a href="{{ config('app.author.web') }}">{{ config('app.author.name') }}</a>
    </div>
</footer>
