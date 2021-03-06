<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\App\DashboardController;
use App\Http\Controllers\App\MediaController;
use App\Http\Controllers\App\PageController;
use App\Http\Controllers\App\ProjectController;
use App\Http\Controllers\App\SearchController;
use App\Http\Controllers\App\SectionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| GUEST
|--------------------------------------------------------------------------
|
| These routes are public for everyone on the web.
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
| These routes are only for logged in users
|
*/

Route::middleware(['auth'])->prefix('app')->name('app.')->group(function (){
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::post('search', SearchController::class)->name('search');

    Route::resource('projects', ProjectController::class);

    Route::post('projects/{project}/sections/order', [SectionController::class, 'order'])->name('projects.sections.order');
    Route::resource('projects.sections', SectionController::class)->shallow();

    Route::post('sections/{section}/pages/order', [PageController::class, 'order'])->name('sections.pages.order');
    Route::post('pages/transfer', [PageController::class, 'transfer'])->name('pages.transfer');
    Route::resource('projects.pages', PageController::class)->except(['index']);

    // project media
    Route::delete('projects/{project}/media', [MediaController::class, 'destroy'])->name('projects.media.destroy');
    Route::resource('projects.media', MediaController::class)->only(['index', 'store']);
});


/*
|--------------------------------------------------------------------------
| ADMIN
|--------------------------------------------------------------------------
|
| These routes are only for users that are admin (only one admin per application recommended)
|
*/

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function (){
    Route::get('users/{id}/impersonate', [UserController::class, 'impersonate'])->name('users.impersonate');
    Route::resource('users', UserController::class);
});
