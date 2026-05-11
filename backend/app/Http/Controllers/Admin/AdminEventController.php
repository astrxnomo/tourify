<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Event;
use App\Models\Place;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminEventController extends Controller
{
    public function index()
    {
        $events = Event::with(['city', 'place'])
            ->withCount('registrations')
            ->orderByDesc('date')
            ->get();
        return view('admin.events.index', compact('events'));
    }

    public function show(Event $event)
    {
        $event->load(['city', 'place', 'registrations.user']);
        return view('admin.events.show', compact('event'));
    }

    public function create()
    {
        $cities = City::orderBy('name')->get();
        $places = Place::orderBy('name')->get();
        return view('admin.events.create', compact('cities', 'places'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'city_id'     => 'required|exists:cities,id',
            'place_id'    => 'nullable|exists:places,id',
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'date'        => 'required|date',
            'image'       => 'nullable|image|max:4096',
        ]);

        $event = Event::create(collect($data)->except('image')->toArray());

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/events', 'public');
            $event->images()->create(['url' => Storage::url($path)]);
        }

        return redirect()->route('admin.events.index')->with('success', 'Evento creado exitosamente.');
    }

    public function edit(Event $event)
    {
        $cities = City::orderBy('name')->get();
        $places = Place::orderBy('name')->get();
        $event->load('images');
        return view('admin.events.edit', compact('event', 'cities', 'places'));
    }

    public function update(Request $request, Event $event)
    {
        $data = $request->validate([
            'city_id'     => 'required|exists:cities,id',
            'place_id'    => 'nullable|exists:places,id',
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'date'        => 'required|date',
            'image'       => 'nullable|image|max:4096',
        ]);

        $event->update(collect($data)->except('image')->toArray());

        if ($request->hasFile('image')) {
            foreach ($event->images as $img) {
                $localPath = str_replace('/storage/', '', $img->url);
                if (Storage::disk('public')->exists($localPath)) {
                    Storage::disk('public')->delete($localPath);
                }
            }
            $event->images()->delete();
            $path = $request->file('image')->store('images/events', 'public');
            $event->images()->create(['url' => Storage::url($path)]);
        }

        return redirect()->route('admin.events.index')->with('success', 'Evento actualizado exitosamente.');
    }

    public function destroy(Event $event)
    {
        foreach ($event->images as $img) {
            $localPath = str_replace('/storage/', '', $img->url);
            if (Storage::disk('public')->exists($localPath)) {
                Storage::disk('public')->delete($localPath);
            }
        }
        $event->delete();
        return redirect()->route('admin.events.index')->with('success', 'Evento eliminado exitosamente.');
    }
}
