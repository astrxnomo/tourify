<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Event::with(['images', 'city', 'place']);

        if ($request->filled('city_id')) {
            $query->where('city_id', $request->city_id);
        }

        if ($request->filled('upcoming') && $request->boolean('upcoming')) {
            $query->where('date', '>', now());
        }

        $events = $query->orderBy('date')->get();

        return response()->json($events);
    }

    public function show(Request $request, Event $event): JsonResponse
    {
        $event->load(['images', 'city', 'place', 'reviews.user']);
        $event->loadCount('registrations');

        $user = Auth::guard('sanctum')->user();
        $event->is_registered = $user
            ? $event->registrations()->where('user_id', $user->id)->exists()
            : false;

        return response()->json($event);
    }
}
