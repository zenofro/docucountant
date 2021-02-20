<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\App\DashboardController;
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
| USER
|--------------------------------------------------------------------------
|
| These routes are only for normal users
|
*/

Route::middleware(['auth'])->prefix('app')->name('app.')->group(function (){
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
});


/*
|--------------------------------------------------------------------------
| ADMIN
|--------------------------------------------------------------------------
|
| These routes are only for users that are super-admin (only one super-admin per application recommended)
|
*/

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function (){
    Route::resource('users', UserController::class);
});
