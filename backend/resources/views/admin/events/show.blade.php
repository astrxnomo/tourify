@extends('admin.layout')
@section('title', 'Inscritos: ' . $event->title)

@section('content')
<div class="d-flex justify-content-between align-items-center mb-3">
    <a href="{{ route('admin.events.index') }}" class="btn btn-sm btn-outline-secondary">
        <i class="bi bi-arrow-left me-1"></i>Volver a eventos
    </a>
</div>

<div class="card p-4 mb-4">
    <div class="row">
        <div class="col-md-8">
            <h4 class="fw-bold mb-2">{{ $event->title }}</h4>
            <p class="text-muted mb-2">
                <i class="bi bi-geo-alt me-1"></i>{{ $event->city->name }}
                @if($event->place)
                    <span class="ms-2"><i class="bi bi-pin-map me-1"></i>{{ $event->place->name }}</span>
                @endif
            </p>
            <p class="text-muted mb-0">
                <i class="bi bi-calendar-event me-1"></i>
                {{ \Carbon\Carbon::parse($event->date)->format('d/m/Y H:i') }}
            </p>
        </div>
        <div class="col-md-4 text-md-end">
            <div class="display-6 fw-bold text-primary">{{ $event->registrations->count() }}</div>
            <small class="text-muted">Personas inscritas</small>
        </div>
    </div>
</div>

<div class="card p-4">
    <h5 class="fw-bold mb-3">Lista de inscritos</h5>
    <table class="table table-hover align-middle">
        <thead>
            <tr><th>#</th><th>Nombre</th><th>Correo</th><th>Fecha de inscripción</th></tr>
        </thead>
        <tbody>
            @forelse($event->registrations as $registration)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td class="fw-semibold">{{ $registration->user->name }}</td>
                <td class="text-muted">{{ $registration->user->email }}</td>
                <td>{{ $registration->created_at->format('d/m/Y H:i') }}</td>
            </tr>
            @empty
            <tr><td colspan="4" class="text-center text-muted py-4">Aún no hay inscritos para este evento.</td></tr>
            @endforelse
        </tbody>
    </table>
</div>
@endsection
