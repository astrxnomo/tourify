<?php

namespace App\Http\Controllers;

use App\Models\City;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $cities = City::with('images')
            ->orderBy('name')
            ->get()
            ->map(fn($city) => $this->format($city));

        return response()->json($cities);
    }

    public function show(City $city): JsonResponse
    {
        $city->load([
            'images',
            'places.images',
            'places.category',
            'places.reviews',
            'events.images',
            'events.place',
        ]);

        return response()->json([
            ...$city->toArray(),
            'places' => $city->places->map(fn($place) => [
                ...$place->toArray(),
                'average_rating' => $place->reviews->avg('rating'),
            ]),
        ]);
    }

    private function format(City $city): array
    {
        return $city->toArray();
    }
}
