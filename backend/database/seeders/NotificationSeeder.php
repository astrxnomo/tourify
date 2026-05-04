<?php

namespace Database\Seeders;

use App\Models\Notification;
use Illuminate\Database\Seeder;

class NotificationSeeder extends Seeder
{
    // user_id:  2=Juan  3=María  4=Carlos  5=Ana
    public function run(): void
    {
        $notifications = [
            // ── Juan García (user 2) ─────────────────────────────────────────────────────
            [
                'user_id'         => 2,
                'notifiable_id'   => null,
                'notifiable_type' => null,
                'title'           => '¡Bienvenido a Tourify!',
                'message'         => 'Hola Juan, ya puedes explorar los mejores destinos de Colombia. Guarda tus lugares favoritos y no te pierdas los próximos eventos.',
                'is_read'         => true,
            ],
            [
                'user_id'         => 2,
                'notifiable_id'   => 1,
                'notifiable_type' => 'event',
                'title'           => 'Festival de Música del Caribe',
                'message'         => 'El Festival Internacional de Música del Caribe en Cartagena empieza en 5 días. ¡Quedan pocas entradas para las zonas VIP!',
                'is_read'         => false,
            ],
            [
                'user_id'         => 2,
                'notifiable_id'   => 4,
                'notifiable_type' => 'place',
                'title'           => 'Centro Histórico de Cartagena',
                'message'         => 'La temporada de ballenas jorobadas en el Caribe colombiano comenzó. Desde Cartagena salen excursiones diarias al avistamiento.',
                'is_read'         => false,
            ],
            [
                'user_id'         => 2,
                'notifiable_id'   => 3,
                'notifiable_type' => 'event',
                'title'           => 'Feria de las Flores – Registro abierto',
                'message'         => 'Ya puedes inscribirte para el Desfile de Silleteros en la Feria de las Flores de Medellín. Los cupos se agotan rápidamente cada año.',
                'is_read'         => false,
            ],
            [
                'user_id'         => 2,
                'notifiable_id'   => 10,
                'notifiable_type' => 'place',
                'title'           => 'Ciudad Perdida – Cupos disponibles',
                'message'         => 'Se liberaron cupos para el trek a Ciudad Perdida en septiembre. Solo quedan 8 lugares para la expedición de 4 días por la Sierra Nevada.',
                'is_read'         => false,
            ],
            [
                'user_id'         => 2,
                'notifiable_id'   => 2,
                'notifiable_type' => 'city',
                'title'           => 'Oferta en Cartagena',
                'message'         => 'Hasta un 30% de descuento en hoteles boutique del casco amurallado para reservas en temporada baja. Descúbrelos en la sección de Cartagena.',
                'is_read'         => true,
            ],
            // ── María López (user 3) ─────────────────────────────────────────────────────
            [
                'user_id'         => 3,
                'notifiable_id'   => null,
                'notifiable_type' => null,
                'title'           => '¡Bienvenida a Tourify!',
                'message'         => 'Hola María, tu cuenta ya está activa. Comienza explorando los destinos más populares de Colombia y guarda los lugares que quieras visitar.',
                'is_read'         => true,
            ],
            [
                'user_id'         => 3,
                'notifiable_id'   => 14,
                'notifiable_type' => 'place',
                'title'           => 'Valle de Cocora – Temporada de niebla',
                'message'         => 'Junio es el mejor mes para visitar el Valle de Cocora: las palmas de cera emergen entre la niebla matutina y hay menos visitantes que en temporada alta.',
                'is_read'         => false,
            ],
            // ── Carlos Rodríguez (user 4) ────────────────────────────────────────────────
            [
                'user_id'         => 4,
                'notifiable_id'   => 5,
                'notifiable_type' => 'event',
                'title'           => 'Festival del Café Colombiano',
                'message'         => 'El Festival del Café en Salento abre inscripciones para los talleres de barismo y catación de diciembre. Plazas limitadas a 20 personas por sesión.',
                'is_read'         => false,
            ],
            [
                'user_id'         => 4,
                'notifiable_id'   => 4,
                'notifiable_type' => 'city',
                'title'           => 'Medellín – Top destino 2026',
                'message'         => 'Medellín fue elegida por Lonely Planet como uno de los 10 mejores destinos del mundo para 2026. Descubre la Comuna 13, el Parque Arví y su vibrante gastronomía.',
                'is_read'         => false,
            ],
            // ── Ana Martínez (user 5) ────────────────────────────────────────────────────
            [
                'user_id'         => 5,
                'notifiable_id'   => 9,
                'notifiable_type' => 'event',
                'title'           => 'Amanecer en Cabo San Juan',
                'message'         => 'El evento de glamping en Cabo San Juan del Guía dentro del Parque Tayrona tiene sus últimos 3 cupos disponibles para octubre. ¡No te quedes sin el tuyo!',
                'is_read'         => false,
            ],
            [
                'user_id'         => 5,
                'notifiable_id'   => 13,
                'notifiable_type' => 'place',
                'title'           => 'Parque Tayrona – Cierre temporal',
                'message'         => 'El Parque Nacional Tayrona cerrará del 1 al 15 de febrero para labores de mantenimiento y recuperación del ecosistema. Planifica tu visita fuera de esas fechas.',
                'is_read'         => true,
            ],
        ];

        foreach ($notifications as $notification) {
            Notification::create(array_merge($notification, ['created_at' => now(), 'updated_at' => now()]));
        }
    }
}
