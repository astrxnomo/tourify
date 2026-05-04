@extends('admin.layout')
@section('title', 'Ciudades')

@section('content')
<div class="card p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-bold mb-0">Lista de Ciudades</h5>
        <a href="{{ route('admin.cities.create') }}" class="btn btn-primary">
            <i class="bi bi-plus-lg me-1"></i>Nueva Ciudad
        </a>
    </div>
    <table class="table table-hover align-middle">
        <thead>
            <tr>
                <th>#</th><th>Nombre</th><th>País</th><th>Descripción</th><th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            @forelse($cities as $city)
            <tr>
                <td>{{ $city->id }}</td>
                <td class="fw-semibold">{{ $city->name }}</td>
                <td>{{ $city->country }}</td>
                <td class="text-muted">{{ Str::limit($city->description, 60) }}</td>
                <td>
                    <a href="{{ route('admin.cities.edit', $city) }}" class="btn btn-sm btn-outline-primary me-1">
                        <i class="bi bi-pencil"></i>
                    </a>
                    <form method="POST" action="{{ route('admin.cities.destroy', $city) }}" class="d-inline"
                          onsubmit="return confirm('¿Eliminar esta ciudad?')">
                        @csrf @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </form>
                </td>
            </tr>
            @empty
            <tr><td colspan="5" class="text-center text-muted py-4">No hay ciudades registradas.</td></tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection
