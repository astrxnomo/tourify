# Tourify

Cross-platform mobile app to explore cities, points of interest and tourist events. Users can discover destinations, save favorites, review places, register for events and receive push notifications.

## Stack

- **Frontend:** Expo · React Native · React Navigation
- **Backend:** Laravel 13 · Sanctum · MySQL

## Structure

- `frontend/` — Client app (Expo / React Native) — iOS, Android and Web
- `backend/` — REST API (Laravel 13)

## Getting started

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

## Features

- Token-based authentication (register, login, password recovery)
- Browse cities, categories, places and events
- Favorites and reviews (polymorphic relationships)
- Event registration
- Push notifications via Expo Push Service
