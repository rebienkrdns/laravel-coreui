<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function switchLocale($locale)
    {
        session()->put('language', $locale);
        return redirect()->back();
    }
}
