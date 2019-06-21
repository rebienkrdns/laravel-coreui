<?php

// Home
Breadcrumbs::for('home', function ($trail) {
    $trail->push(trans('navs.breadcrumbs.home'), route('home'));
});
