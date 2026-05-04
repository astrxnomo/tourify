@extends('admin.layout')
@section('title', 'Nuevo Evento')

@section('content')
<div class="card p-4" style="max-width:700px">
    <h5 class="fw-bold mb-4">Crear Evento</h5>
    <form method="POST" action="{{ route('admin.events.store') }}" enctype="multipart/form-data">
        @csrf
        <div class="row g-3">
            <div class="col-12">
                <label class="form-label fw-semibold">Título *</label>
                <input type="text" name="title" class="form-control" value="{{ old('title') }}" required>
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
                <label class="form-label fw-semibold">Lugar (opcional)</label>
                <select name="place_id" class="form-select">
                    <option value="">Sin lugar específico</option>
                    @foreach($places as $place)
                        <option value="{{ $place->id }}" {{ old('place_id') == $place->id ? 'selected' : '' }}>{{ $place->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Fecha y hora *</label>
                <input type="datetime-local" name="date" class="form-control" value="{{ old('date') }}" required>
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
            <a href="{{ route('admin.events.index') }}" class="btn btn-outline-secondary px-4">Cancelar</a>
        </div>
    </form>
</div>
@endsection
