@extends('admin.layout')
@section('title', 'Editar Ciudad')

@section('content')
<div class="card p-4" style="max-width:600px">
    <h5 class="fw-bold mb-4">Editar Ciudad: {{ $city->name }}</h5>
    <form method="POST" action="{{ route('admin.cities.update', $city) }}" enctype="multipart/form-data">
        @csrf @method('PUT')
        <div class="mb-3">
            <label class="form-label fw-semibold">Nombre *</label>
            <input type="text" name="name" class="form-control" value="{{ old('name', $city->name) }}" required>
        </div>
        <div class="mb-3">
            <label class="form-label fw-semibold">País *</label>
            <input type="text" name="country" class="form-control" value="{{ old('country', $city->country) }}" required>
        </div>
        <div class="mb-3">
            <label class="form-label fw-semibold">Descripción</label>
            <textarea name="description" class="form-control" rows="3">{{ old('description', $city->description) }}</textarea>
        </div>
        <div class="mb-3">
            <label class="form-label fw-semibold">Imagen</label>
            @if($city->images->isNotEmpty())
                <div class="mb-2 d-flex align-items-center gap-3">
                    <img src="{{ $city->images->first()->url }}" alt="imagen actual"
                         class="rounded" style="height:80px;width:120px;object-fit:cover;">
                    <span class="text-muted small">Imagen actual — sube una nueva para reemplazarla</span>
                </div>
            @endif
            <input type="file" name="image" class="form-control" accept="image/*">
            <div class="form-text">JPG, PNG o WebP. Máx. 4 MB.</div>
        </div>
        <div class="d-flex gap-2">
            <button type="submit" class="btn btn-primary px-4">Actualizar</button>
            <a href="{{ route('admin.cities.index') }}" class="btn btn-outline-secondary px-4">Cancelar</a>
        </div>
    </form>
</div>
@endsection
