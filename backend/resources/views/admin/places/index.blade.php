@extends('admin.layout')
@section('title', 'Lugares')

@section('content')
<div class="card p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-bold mb-0">Lista de Lugares</h5>
        <a href="{{ route('admin.places.create') }}" class="btn btn-primary">
            <i class="bi bi-plus-lg me-1"></i>Nuevo Lugar
        </a>
    </div>
    <table class="table table-hover align-middle">
        <thead>
            <tr><th>#</th><th>Nombre</th><th>Ciudad</th><th>Categoría</th><th>Dirección</th><th>Acciones</th></tr>
        </thead>
        <tbody>
            @forelse($places as $place)
            <tr>
                <td>{{ $place->id }}</td>
                <td class="fw-semibold">{{ $place->name }}</td>
                <td>{{ $place->city->name }}</td>
                <td><span class="badge bg-success-subtle text-success">{{ $place->category->name }}</span></td>
                <td class="text-muted">{{ Str::limit($place->address, 40) }}</td>
                <td>
                    <a href="{{ route('admin.places.edit', $place) }}" class="btn btn-sm btn-outline-primary me-1">
                        <i class="bi bi-pencil"></i>
                    </a>
                    <form method="POST" action="{{ route('admin.places.destroy', $place) }}" class="d-inline"
                          onsubmit="return confirm('¿Eliminar este lugar?')">
                        @csrf @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </form>
                </td>
            </tr>
            @empty
            <tr><td colspan="6" class="text-center text-muted py-4">No hay lugares registrados.</td></tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection
