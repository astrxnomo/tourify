<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;

class CategoryController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json(Category::orderBy('name')->get());
    }

    public function show(Category $category): JsonResponse
    {
        $category->load([
            'places.images',
            'places.city',
            'places.reviews',
        ]);

        return response()->json([
            ...$category->toArray(),
            'places' => $category->places->map(fn($place) => [
                ...$place->toArray(),
                'average_rating' => $place->reviews->avg('rating'),
            ]),
        ]);
    }
}
