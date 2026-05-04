@extends('admin.layout')
@section('title', 'Nuevo Lugar')

@section('content')
<div class="card p-4" style="max-width:700px">
    <h5 class="fw-bold mb-4">Crear Lugar</h5>
    <form method="POST" action="{{ route('admin.places.store') }}" enctype="multipart/form-data">
        @csrf
        <div class="row g-3">
            <div class="col-md-6">
                <label class="form-label fw-semibold">Nombre *</label>
                <input type="text" name="name" class="form-control" value="{{ old('name') }}" required>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Ciudad *</label>
                <select name="city_id" class="form-select" required>
                    <option value="">Seleccionar...</option>
                    @foreach($cities as $city)
                        <option value="{{ $city->id }}" {{ old('city_id') == $city->id ? 'selected' : '' }}>{{ $city->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Categoría *</label>
                <select name="category_id" class="form-select" required>
                    <option value="">Seleccionar...</option>
                    @foreach($categories as $category)
                        <option value="{{ $category->id }}" {{ old('category_id') == $category->id ? 'selected' : '' }}>{{ $category->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Dirección</label>
                <input type="text" name="address" class="form-control" value="{{ old('address') }}">
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Latitud</label>
                <input type="number" step="any" name="latitude" class="form-control" value="{{ old('latitude') }}">
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Longitud</label>
                <input type="number" step="any" name="longitude" class="form-control" value="{{ old('longitude') }}">
            </div>
            <div class="col-12">
                <label class="form-label fw-semibold">Descripción</label>
                <textarea name="description" class="form-control" rows="3">{{ old('description') }}</textarea>
            </div>
            <div class="col-12">
                <label class="form-label fw-semibold">Imagen</label>
                <input type="file" name="image" class="form-control" accept="image/*">
                <div class="form-text">JPG, PNG o WebP. Máx. 4 MB.</div>
            </div>
        </div>
        <div class="d-flex gap-2 mt-4">
            <button type="submit" class="btn btn-primary px-4">Guardar</button>
            <a href="{{ route('admin.places.index') }}" class="btn btn-outline-secondary px-4">Cancelar</a>
        </div>
    </form>
</div>
@endsection
