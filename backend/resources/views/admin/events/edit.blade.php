@extends('admin.layout')
@section('title', 'Editar Evento')

@section('content')
<div class="card p-4" style="max-width:700px">
    <h5 class="fw-bold mb-4">Editar Evento: {{ $event->title }}</h5>
    <form method="POST" action="{{ route('admin.events.update', $event) }}" enctype="multipart/form-data">
        @csrf @method('PUT')
        <div class="row g-3">
            <div class="col-12">
                <label class="form-label fw-semibold">Título *</label>
                <input type="text" name="title" class="form-control" value="{{ old('title', $event->title) }}" required>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Ciudad *</label>
                <select name="city_id" class="form-select" required>
                    @foreach($cities as $city)
                        <option value="{{ $city->id }}" {{ old('city_id', $event->city_id) == $city->id ? 'selected' : '' }}>{{ $city->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Lugar (opcional)</label>
                <select name="place_id" class="form-select">
                    <option value="">Sin lugar específico</option>
                    @foreach($places as $place)
                        <option value="{{ $place->id }}" {{ old('place_id', $event->place_id) == $place->id ? 'selected' : '' }}>{{ $place->name }}</option>
                    @endforeach
                </select>
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Fecha y hora *</label>
                <input type="datetime-local" name="date" class="form-control"
                    value="{{ old('date', \Carbon\Carbon::parse($event->date)->format('Y-m-d\TH:i')) }}" required>
            </div>
            <div class="col-12">
                <label class="form-label fw-semibold">Descripción</label>
                <textarea name="description" class="form-control" rows="3">{{ old('description', $event->description) }}</textarea>
            </div>
            <div class="col-12">
                <label class="form-label fw-semibold">Imagen</label>
                @if($event->images->isNotEmpty())
                    <div class="mb-2 d-flex align-items-center gap-3">
                        <img src="{{ $event->images->first()->url }}" alt="imagen actual"
                             class="rounded" style="height:80px;width:120px;object-fit:cover;">
                        <span class="text-muted small">Imagen actual — sube una nueva para reemplazarla</span>
                    </div>
                @endif
                <input type="file" name="image" class="form-control" accept="image/*">
                <div class="form-text">JPG, PNG o WebP. Máx. 4 MB.</div>
            </div>
        </div>
        <div class="d-flex gap-2 mt-4">
            <button type="submit" class="btn btn-primary px-4">Actualizar</button>
            <a href="{{ route('admin.events.index') }}" class="btn btn-outline-secondary px-4">Cancelar</a>
        </div>
    </form>
</div>
@endsection
