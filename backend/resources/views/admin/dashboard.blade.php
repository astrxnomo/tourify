@extends('admin.layout')
@section('title', 'Dashboard')

@section('content')
<div class="row g-4 mb-4">
    <div class="col-md-3">
        <div class="card p-4 text-center">
            <i class="bi bi-building text-primary fs-2"></i>
            <h2 class="fw-bold mt-2">{{ $stats['cities'] }}</h2>
            <p class="text-muted mb-0">Ciudades</p>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card p-4 text-center">
            <i class="bi bi-tag text-success fs-2"></i>
            <h2 class="fw-bold mt-2">{{ $stats['categories'] }}</h2>
            <p class="text-muted mb-0">Categorías</p>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card p-4 text-center">
            <i class="bi bi-geo-alt text-warning fs-2"></i>
            <h2 class="fw-bold mt-2">{{ $stats['places'] }}</h2>
            <p class="text-muted mb-0">Lugares</p>
        </div>
    </div>
    <div class="col-md-3">
        <div class="card p-4 text-center">
            <i class="bi bi-calendar-event text-danger fs-2"></i>
            <h2 class="fw-bold mt-2">{{ $stats['events'] }}</h2>
            <p class="text-muted mb-0">Eventos</p>
        </div>
    </div>
</div>

<div class="row g-4">
    <div class="col-md-6">
        <div class="card p-4">
            <h5 class="fw-bold mb-3"><i class="bi bi-clock-history me-2 text-primary"></i>Últimos Lugares</h5>
            <table class="table table-sm">
                <thead><tr><th>Nombre</th><th>Ciudad</th></tr></thead>
                <tbody>
                    @foreach($recentPlaces as $place)
                    <tr>
                        <td>{{ $place->name }}</td>
                        <td>{{ $place->city->name }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <div class="col-md-6">
        <div class="card p-4">
            <h5 class="fw-bold mb-3"><i class="bi bi-calendar-check me-2 text-danger"></i>Próximos Eventos</h5>
            <table class="table table-sm">
                <thead><tr><th>Título</th><th>Fecha</th></tr></thead>
                <tbody>
                    @foreach($upcomingEvents as $event)
                    <tr>
                        <td>{{ $event->title }}</td>
                        <td>{{ \Carbon\Carbon::parse($event->date)->format('d/m/Y') }}</td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
@endsection
