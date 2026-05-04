<?php

namespace App\Http\Controllers;

use App\Models\Place;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlaceController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Place::with(['images', 'city', 'category'])
            ->withAvg('reviews', 'rating');

        if ($request->filled('city_id')) {
            $query->where('city_id', $request->city_id);
        }

        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->filled('search')) {
            $term = $request->search;
            $query->where(function ($q) use ($term) {
                $q->where('name', 'like', "%{$term}%")
                  ->orWhere('address', 'like', "%{$term}%")
                  ->orWhereHas('city', fn($q) => $q->where('name', 'like', "%{$term}%"));
            });
        }

        $places = $query->orderByDesc('reviews_avg_rating')->get()
            ->map(fn($place) => [
                ...$place->toArray(),
                'average_rating' => round($place->reviews_avg_rating ?? 0, 1),
            ]);

        return response()->json($places);
    }

    public function show(Place $place): JsonResponse
    {
        $place->load(['images', 'city', 'category', 'reviews.user']);
        $averageRating = $place->reviews->avg('rating');

        return response()->json([
            ...$place->toArray(),
            'average_rating' => round($averageRating ?? 0, 1),
        ]);
    }
}
