<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tourify Admin - @yield('title', 'Panel')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        body { background-color: #f0f4f8; }
        .sidebar { min-height: 100vh; background: #0d9d8e; }
        .sidebar .nav-link { color: rgba(255,255,255,0.8); }
        .sidebar .nav-link:hover, .sidebar .nav-link.active { color: #fff; background: rgba(255,255,255,0.15); border-radius: 8px; }
        .sidebar-brand { color: #fff; font-size: 1.4rem; font-weight: 700; }
        .main-content { min-height: 100vh; }
        .card { border: none; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); }
        .btn-primary { background: #0d9d8e; border-color: #0d9d8e; }
        .btn-primary:hover { background: #0b8578; border-color: #0b8578; }
        .table th { background: #f8fafc; font-weight: 600; color: #555; }
    </style>
</head>
<body>
<div class="container-fluid p-0">
    <div class="row g-0">
        <div class="col-md-2 sidebar p-3">
            <div class="sidebar-brand mb-4 ps-2">
                <i class="bi bi-compass"></i> Tourify
            </div>
            <nav class="nav flex-column gap-1">
                <a class="nav-link @if(request()->routeIs('admin.dashboard')) active @endif" href="{{ route('admin.dashboard') }}">
                    <i class="bi bi-speedometer2 me-2"></i>Dashboard
                </a>
                <a class="nav-link @if(request()->routeIs('admin.cities.*')) active @endif" href="{{ route('admin.cities.index') }}">
                    <i class="bi bi-building me-2"></i>Ciudades
                </a>
                <a class="nav-link @if(request()->routeIs('admin.categories.*')) active @endif" href="{{ route('admin.categories.index') }}">
                    <i class="bi bi-tag me-2"></i>Categorías
                </a>
                <a class="nav-link @if(request()->routeIs('admin.places.*')) active @endif" href="{{ route('admin.places.index') }}">
                    <i class="bi bi-geo-alt me-2"></i>Lugares
                </a>
                <a class="nav-link @if(request()->routeIs('admin.events.*')) active @endif" href="{{ route('admin.events.index') }}">
                    <i class="bi bi-calendar-event me-2"></i>Eventos
                </a>
                <hr style="border-color:rgba(255,255,255,0.3)">
                <form method="POST" action="{{ route('admin.logout') }}">
                    @csrf
                    <button type="submit" class="nav-link border-0 bg-transparent w-100 text-start">
                        <i class="bi bi-box-arrow-left me-2"></i>Cerrar Sesión
                    </button>
                </form>
            </nav>
        </div>

        <div class="col-md-10 main-content p-4">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold mb-0">@yield('title', 'Dashboard')</h4>
                <span class="text-muted">Bienvenido, {{ auth()->user()->name }}</span>
            </div>

            @if(session('success'))
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {{ session('success') }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            @endif

            @if($errors->any())
                <div class="alert alert-danger alert-dismissible fade show">
                    <ul class="mb-0">
                        @foreach($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            @endif

            @yield('content')
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
