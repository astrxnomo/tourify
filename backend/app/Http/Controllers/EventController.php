<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

    public function show(Event $event): JsonResponse
    {
        $event->load(['images', 'city', 'place', 'reviews.user']);

        return response()->json($event);
    }
}
