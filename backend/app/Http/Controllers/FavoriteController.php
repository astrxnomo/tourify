<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $favorites = $request->user()
            ->favorites()
            ->with('favorable')
            ->get()
            ->map(function ($fav) {
                $favorable = $fav->favorable;

                if ($favorable && method_exists($favorable, 'images')) {
                    $favorable->load('images');
                }

                return [
                    'id'             => $fav->id,
                    'favorable_type' => $fav->favorable_type,
                    'favorable_id'   => $fav->favorable_id,
                    'favorable'      => $favorable,
                    'created_at'     => $fav->created_at,
                ];
            });

        return response()->json($favorites);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'favorable_id'   => 'required|integer',
            'favorable_type' => 'required|in:place,event,city',
        ]);

        $favorite = $request->user()->favorites()->firstOrCreate([
            'favorable_id'   => $data['favorable_id'],
            'favorable_type' => $data['favorable_type'],
        ]);

        return response()->json($favorite, 201);
    }

    public function destroy(Request $request, Favorite $favorite): JsonResponse
    {
        if ($favorite->user_id !== $request->user()->id) {
            return response()->json(['message' => 'No autorizado.'], 403);
        }

        $favorite->delete();

        return response()->json(['message' => 'Favorito eliminado.']);
    }

    public function destroyByMorph(Request $request): JsonResponse
    {
        $data = $request->validate([
            'favorable_id'   => 'required|integer',
            'favorable_type' => 'required|in:place,event,city',
        ]);

        $request->user()->favorites()
            ->where('favorable_id', $data['favorable_id'])
            ->where('favorable_type', $data['favorable_type'])
            ->delete();

        return response()->json(['message' => 'Favorito eliminado.']);
    }
}
