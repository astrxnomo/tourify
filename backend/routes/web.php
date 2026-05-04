<?php

use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminCityController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminEventController;
use App\Http\Controllers\Admin\AdminPlaceController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('admin.login');
});

Route::get('/admin', function () {
    return redirect()->route('admin.login');
});

// Admin Auth (public)
Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AdminAuthController::class, 'login'])->name('login.post');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');
});

// Admin Panel (protected)
Route::prefix('admin')->name('admin.')->middleware(['web', 'auth', 'is_admin'])->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

    Route::resource('cities', AdminCityController::class);
    Route::resource('categories', AdminCategoryController::class);
    Route::resource('places', AdminPlaceController::class);
    Route::resource('events', AdminEventController::class);
});
