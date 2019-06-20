<?php

// Home
Breadcrumbs::for('home', function ($trail) {
    $trail->push(trans('Home'), route('home'));
});
