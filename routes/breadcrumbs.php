<?php

// Home
Breadcrumbs::for('home', function ($trail) {
    $trail->push(trans('navs.general.home'), route('home'));
});
