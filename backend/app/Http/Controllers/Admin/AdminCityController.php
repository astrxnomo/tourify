<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminCityController extends Controller
{
    public function index()
    {
        $cities = City::orderBy('name')->get();
        return view('admin.cities.index', compact('cities'));
    }

    public function create()
    {
        return view('admin.cities.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'country'     => 'required|string|max:255',
            'image'       => 'nullable|image|max:4096',
        ]);

        $city = City::create(collect($data)->except('image')->toArray());

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images/cities', 'public');
            $city->images()->create(['url' => Storage::url($path)]);
        }

        return redirect()->route('admin.cities.index')->with('success', 'Ciudad creada exitosamente.');
    }

    public function edit(City $city)
    {
        $city->load('images');
        return view('admin.cities.edit', compact('city'));
    }

    public function update(Request $request, City $city)
    {
        $data = $request->validate([
            'name'        => 'required|string|max:255',
            'description' => 'nullable|string',
            'country'     => 'required|string|max:255',
            'image'       => 'nullable|image|max:4096',
        ]);

        $city->update(collect($data)->except('image')->toArray());

        if ($request->hasFile('image')) {
            foreach ($city->images as $img) {
                $localPath = str_replace('/storage/', '', $img->url);
                if (Storage::disk('public')->exists($localPath)) {
                    Storage::disk('public')->delete($localPath);
                }
            }
            $city->images()->delete();
            $path = $request->file('image')->store('images/cities', 'public');
            $city->images()->create(['url' => Storage::url($path)]);
        }

        return redirect()->route('admin.cities.index')->with('success', 'Ciudad actualizada exitosamente.');
    }

    public function destroy(City $city)
    {
        foreach ($city->images as $img) {
            $localPath = str_replace('/storage/', '', $img->url);
            if (Storage::disk('public')->exists($localPath)) {
                Storage::disk('public')->delete($localPath);
            }
        }
        $city->delete();
        return redirect()->route('admin.cities.index')->with('success', 'Ciudad eliminada exitosamente.');
    }
}
