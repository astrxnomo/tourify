@extends('admin.layout')
@section('title', 'Eventos')

@section('content')
<div class="card p-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-bold mb-0">Lista de Eventos</h5>
        <a href="{{ route('admin.events.create') }}" class="btn btn-primary">
            <i class="bi bi-plus-lg me-1"></i>Nuevo Evento
        </a>
    </div>
    <table class="table table-hover align-middle">
        <thead>
            <tr><th>#</th><th>Título</th><th>Ciudad</th><th>Lugar</th><th>Fecha</th><th>Acciones</th></tr>
        </thead>
        <tbody>
            @forelse($events as $event)
            <tr>
                <td>{{ $event->id }}</td>
                <td class="fw-semibold">{{ $event->title }}</td>
                <td>{{ $event->city->name }}</td>
                <td class="text-muted">{{ $event->place?->name ?? '—' }}</td>
                <td>{{ \Carbon\Carbon::parse($event->date)->format('d/m/Y H:i') }}</td>
                <td>
                    <a href="{{ route('admin.events.edit', $event) }}" class="btn btn-sm btn-outline-primary me-1">
                        <i class="bi bi-pencil"></i>
                    </a>
                    <form method="POST" action="{{ route('admin.events.destroy', $event) }}" class="d-inline"
                          onsubmit="return confirm('¿Eliminar este evento?')">
                        @csrf @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-trash"></i>
                        </button>
                    </form>
                </td>
            </tr>
            @empty
            <tr><td colspan="6" class="text-center text-muted py-4">No hay eventos registrados.</td></tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection
