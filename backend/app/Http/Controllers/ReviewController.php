<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Place;
use App\Models\Review;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function storeForPlace(Request $request, Place $place): JsonResponse
    {
        return $this->store($request, $place, 'place');
    }

    public function storeForEvent(Request $request, Event $event): JsonResponse
    {
        return $this->store($request, $event, 'event');
    }

    private function store(Request $request, $reviewable, string $type): JsonResponse
    {
        $data = $request->validate([
            'rating'  => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        $review = Review::updateOrCreate(
            [
                'user_id'         => $request->user()->id,
                'reviewable_id'   => $reviewable->id,
                'reviewable_type' => $type,
            ],
            [
                'rating'  => $data['rating'],
                'comment' => $data['comment'] ?? null,
            ]
        );

        $review->load('user');

        return response()->json($review, 201);
    }
}
