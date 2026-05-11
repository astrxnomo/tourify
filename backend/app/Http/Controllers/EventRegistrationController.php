<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\EventRegistration;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EventRegistrationController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $registrations = EventRegistration::with(['event.city', 'event.place', 'event.images'])
            ->where('user_id', $request->user()->id)
            ->get()
            ->sortBy(fn ($r) => optional($r->event)->date)
            ->values();

        return response()->json($registrations);
    }

    public function store(Request $request, Event $event): JsonResponse
    {
        $registration = EventRegistration::firstOrCreate([
            'user_id'  => $request->user()->id,
            'event_id' => $event->id,
        ]);

        return response()->json($registration->load('event'), 201);
    }

    public function destroy(Request $request, Event $event): JsonResponse
    {
        EventRegistration::where('user_id', $request->user()->id)
            ->where('event_id', $event->id)
            ->delete();

        return response()->json(['message' => 'Registro cancelado.']);
    }
}
