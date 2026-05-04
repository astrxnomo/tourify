<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\City;
use App\Models\Event;
use App\Models\Place;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'cities'     => City::count(),
            'categories' => Category::count(),
            'places'     => Place::count(),
            'events'     => Event::count(),
        ];

        $recentPlaces   = Place::with('city')->latest()->take(5)->get();
        $upcomingEvents = Event::where('date', '>=', now())->orderBy('date')->take(5)->get();

        return view('admin.dashboard', compact('stats', 'recentPlaces', 'upcomingEvents'));
    }
}
