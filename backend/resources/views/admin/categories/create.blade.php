@extends('admin.layout')
@section('title', 'Nueva Categoría')

@section('content')
<div class="card p-4" style="max-width:600px">
    <h5 class="fw-bold mb-4">Crear Categoría</h5>
    <form method="POST" action="{{ route('admin.categories.store') }}">
        @csrf
        <div class="mb-3">
            <label class="form-label fw-semibold">Nombre *</label>
            <input type="text" name="name" class="form-control" value="{{ old('name') }}" required>
        </div>
        <div class="mb-3">
            <label class="form-label fw-semibold">Descripción</label>
            <textarea name="description" class="form-control" rows="3">{{ old('description') }}</textarea>
        </div>
        <div class="d-flex gap-2">
            <button type="submit" class="btn btn-primary px-4">Guardar</button>
            <a href="{{ route('admin.categories.index') }}" class="btn btn-outline-secondary px-4">Cancelar</a>
        </div>
    </form>
</div>
@endsection
