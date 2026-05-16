# Tourify

Aplicación móvil multiplataforma para explorar ciudades, lugares de interés y eventos turísticos. Permite a los usuarios descubrir destinos, guardar favoritos, reseñar lugares, inscribirse a eventos y recibir notificaciones push.

## Stack

- **Frontend:** Expo · React Native · React Navigation
- **Backend:** Laravel 13 · Sanctum · MySQL

## Estructura

- `frontend/` — App cliente (Expo / React Native) — iOS, Android y Web
- `backend/` — API REST (Laravel 13)

## Puesta en marcha

**Backend**

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

**Frontend**

```bash
cd frontend
npm install
npm start
```

## Funcionalidades

- Autenticación con tokens (registro, login, recuperación)
- Exploración de ciudades, categorías, lugares y eventos
- Favoritos y reseñas (relaciones polimórficas)
- Inscripción a eventos
- Notificaciones push vía Expo Push Service
