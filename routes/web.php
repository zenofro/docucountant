<?php

use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| GUEST
|--------------------------------------------------------------------------
|
| These routes are public for everyone one the web.
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

/*
|--------------------------------------------------------------------------
| ADMIN
|--------------------------------------------------------------------------
|
| These routes are only for users that are admin
|
*/

/*
|--------------------------------------------------------------------------
| SUPER ADMIN
|--------------------------------------------------------------------------
|
| These routes are only for users that are super-admin (only one super-admin per application recommended)
|
*/

Route::middleware([])->prefix('admin')->name('admin.')->group(function (){
    Route::resource('users', UserController::class);
});
