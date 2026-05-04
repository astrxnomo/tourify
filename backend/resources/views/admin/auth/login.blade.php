<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tourify Admin - Iniciar Sesión</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        body { background: linear-gradient(135deg, #0d9d8e, #065f57); min-height: 100vh; display: flex; align-items: center; }
        .login-card { border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
        .btn-primary { background: #0d9d8e; border-color: #0d9d8e; }
        .btn-primary:hover { background: #0b8578; border-color: #0b8578; }
        .form-control:focus { border-color: #0d9d8e; box-shadow: 0 0 0 0.2rem rgba(13,157,142,0.25); }
    </style>
</head>
<body>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-5">
            <div class="card login-card p-4">
                <div class="text-center mb-4">
                    <i class="bi bi-compass text-success" style="font-size:3rem;color:#0d9d8e!important"></i>
                    <h3 class="fw-bold mt-2">Tourify Admin</h3>
                    <p class="text-muted">Panel de Administración</p>
                </div>

                @if($errors->any())
                    <div class="alert alert-danger">
                        @foreach($errors->all() as $error)
                            <div>{{ $error }}</div>
                        @endforeach
                    </div>
                @endif

                <form method="POST" action="{{ route('admin.login.post') }}">
                    @csrf
                    <div class="mb-3">
                        <label class="form-label fw-semibold">Correo electrónico</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                            <input type="email" name="email" class="form-control" value="{{ old('email') }}" required autofocus>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="form-label fw-semibold">Contraseña</label>
                        <div class="input-group">
                            <span class="input-group-text"><i class="bi bi-lock"></i></span>
                            <input type="password" name="password" class="form-control" required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 py-2 fw-semibold">
                        <i class="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
