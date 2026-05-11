<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventRegistrationController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PlaceController;
use App\Http\Controllers\ReviewController;
use Illuminate\Support\Facades\Route;

// Auth
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/me', [AuthController::class, 'me']);
    });
});

// Public resources
Route::get('/cities', [CityController::class, 'index']);
Route::get('/cities/{city}', [CityController::class, 'show']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{category}', [CategoryController::class, 'show']);

Route::get('/places', [PlaceController::class, 'index']);
Route::get('/places/{place}', [PlaceController::class, 'show']);

Route::get('/events', [EventController::class, 'index']);
Route::get('/events/{event}', [EventController::class, 'show']);

// Protected resources
Route::middleware('auth:sanctum')->group(function () {
    // Push notifications token
    Route::post('/push-token', [NotificationController::class, 'savePushToken']);
    // Favorites
    Route::get('/favorites', [FavoriteController::class, 'index']);
    Route::post('/favorites', [FavoriteController::class, 'store']);
    Route::delete('/favorites/{favorite}', [FavoriteController::class, 'destroy']);
    Route::delete('/favorites', [FavoriteController::class, 'destroyByMorph']);

    // Reviews
    Route::post('/places/{place}/reviews', [ReviewController::class, 'storeForPlace']);
    Route::post('/events/{event}/reviews', [ReviewController::class, 'storeForEvent']);

    // Event registrations
    Route::get('/my/registrations', [EventRegistrationController::class, 'index']);
    Route::post('/events/{event}/register', [EventRegistrationController::class, 'store']);
    Route::delete('/events/{event}/register', [EventRegistrationController::class, 'destroy']);

    // Notifications
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::patch('/notifications/read-all', [NotificationController::class, 'markAllAsRead']);
    Route::patch('/notifications/{notification}/read', [NotificationController::class, 'markAsRead']);
});
