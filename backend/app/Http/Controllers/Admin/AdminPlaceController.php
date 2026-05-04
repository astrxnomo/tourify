<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\City;
use App\Models\Place;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminPlaceController extends Controller
{
    public function index()
    {
        $places = Place::with(['city', 'category'])->orderBy('name')->get();
        return view('admin.places.index', compact('places'));
    }

    public function create()
    {
        $cities     = City::orderBy('name')->get();
        $categories = Category::orderBy('name')->get();
        return view('admin.places.create', compact('cities', 'categories'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'city_id'     => 'required|exists:cities,id',
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'address'     => 'nullable|string|max:255',
            'latitude'    => 'nullable|numeric',
            'longitude'   => 'nullable|numeric',
            'image'       => 'nullable|image|max:4096',
        ]);

        $place = Place::create(collect($data)->except('image')->toArray());

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/places', 'public');
            $place->images()->create(['url' => Storage::url($path)]);
        }

        return redirect()->route('admin.places.index')->with('success', 'Lugar creado exitosamente.');
    }

    public function edit(Place $place)
    {
        $cities     = City::orderBy('name')->get();
        $categories = Category::orderBy('name')->get();
        $place->load('images');
        return view('admin.places.edit', compact('place', 'cities', 'categories'));
    }

    public function update(Request $request, Place $place)
    {
        $data = $request->validate([
            'city_id'     => 'required|exists:cities,id',
            'category_id' => 'required|exists:categories,id',
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'address'     => 'nullable|string|max:255',
            'latitude'    => 'nullable|numeric',
            'longitude'   => 'nullable|numeric',
            'image'       => 'nullable|image|max:4096',
        ]);

        $place->update(collect($data)->except('image')->toArray());

        if ($request->hasFile('image')) {
            // Delete old image file if stored locally
            foreach ($place->images as $img) {
                $localPath = str_replace('/storage/', '', $img->url);
                if (Storage::disk('public')->exists($localPath)) {
                    Storage::disk('public')->delete($localPath);
                }
            }
            $place->images()->delete();
            $path = $request->file('image')->store('images/places', 'public');
            $place->images()->create(['url' => Storage::url($path)]);
        }

        return redirect()->route('admin.places.index')->with('success', 'Lugar actualizado exitosamente.');
    }

    public function destroy(Place $place)
    {
        foreach ($place->images as $img) {
            $localPath = str_replace('/storage/', '', $img->url);
            if (Storage::disk('public')->exists($localPath)) {
                Storage::disk('public')->delete($localPath);
            }
        }
        $place->delete();
        return redirect()->route('admin.places.index')->with('success', 'Lugar eliminado exitosamente.');
    }
}
