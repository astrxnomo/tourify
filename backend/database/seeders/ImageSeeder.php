<?php

namespace Database\Seeders;

use App\Models\Image;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    public function run(): void
    {
        $base = 'https://images.unsplash.com/photo-';
        $q    = '?auto=format&fit=crop&q=80&w=800';

        $images = [
            // ── Places ──────────────────────────────────────────────────────────────────
            // 1 – Andrés Carne de Res (restaurant / festive)
            ['imageable_id' => 1,  'imageable_type' => 'place', 'url' => $base . '1414235077428-338989a2e8c0' . $q],
            ['imageable_id' => 1,  'imageable_type' => 'place', 'url' => $base . '1555396273-367ea4eb4db5'    . $q],

            // 2 – Museo del Oro (pre-Columbian gold)
            ['imageable_id' => 2,  'imageable_type' => 'place', 'url' => $base . '1518998053901-5348d3961a04' . $q],
            ['imageable_id' => 2,  'imageable_type' => 'place', 'url' => $base . '1566126715-d1a2d7d39f55'    . $q],

            // 3 – Casa de Nariño (neoclassical government palace)
            ['imageable_id' => 3,  'imageable_type' => 'place', 'url' => $base . '1480714378408-67cf0d13bc1b' . $q],
            ['imageable_id' => 3,  'imageable_type' => 'place', 'url' => $base . '1587558736087-60b8e45d1b04' . $q],

            // 4 – Centro Histórico de Cartagena (colonial architecture)
            ['imageable_id' => 4,  'imageable_type' => 'place', 'url' => $base . '1599058917212-d750089bc07e' . $q],
            ['imageable_id' => 4,  'imageable_type' => 'place', 'url' => $base . '1535189043414-b732f91571b7' . $q],

            // 5 – Playa El Laguito (Caribbean beach)
            ['imageable_id' => 5,  'imageable_type' => 'place', 'url' => $base . '1507525428034-b723cf961d3e' . $q],
            ['imageable_id' => 5,  'imageable_type' => 'place', 'url' => $base . '1526772662643-f291e1f3b326' . $q],

            // 6 – El Celler (fine dining)
            ['imageable_id' => 6,  'imageable_type' => 'place', 'url' => $base . '1565299585323-38d6b0865b47' . $q],
            ['imageable_id' => 6,  'imageable_type' => 'place', 'url' => $base . '1559329007-40df8a9345d8'    . $q],

            // 7 – Bazurto Social Club (nightlife)
            ['imageable_id' => 7,  'imageable_type' => 'place', 'url' => $base . '1516450360452-9312f5e86fc7' . $q],
            ['imageable_id' => 7,  'imageable_type' => 'place', 'url' => $base . '1571266028243-f41d8c0bade6' . $q],

            // 8 – Playa Grande de Taganga (crystal-clear beach)
            ['imageable_id' => 8,  'imageable_type' => 'place', 'url' => $base . '1510414842594-a61c69b5ae57' . $q],
            ['imageable_id' => 8,  'imageable_type' => 'place', 'url' => $base . '1520116468816-95b69f65a604' . $q],

            // 9 – La Casa de los Mariscos (seafood)
            ['imageable_id' => 9,  'imageable_type' => 'place', 'url' => $base . '1544025162-d76538e9104e'    . $q],
            ['imageable_id' => 9,  'imageable_type' => 'place', 'url' => $base . '1414235077428-338989a2e8c0' . $q],

            // 10 – Ciudad Perdida (jungle trek / archaeological)
            ['imageable_id' => 10, 'imageable_type' => 'place', 'url' => $base . '1567610031966-12b69d21c177' . $q],
            ['imageable_id' => 10, 'imageable_type' => 'place', 'url' => $base . '1533174072545-7a4b6ad7a6c3' . $q],

            // 11 – Comuna 13 (urban art / murals)
            ['imageable_id' => 11, 'imageable_type' => 'place', 'url' => $base . '1568252542512-9fe8fe9c87bb' . $q],
            ['imageable_id' => 11, 'imageable_type' => 'place', 'url' => $base . '1500049053255-03f5dd566c7e' . $q],

            // 12 – Parque Arví (cloud forest)
            ['imageable_id' => 12, 'imageable_type' => 'place', 'url' => $base . '1441974231531-c6227db76b6e' . $q],
            ['imageable_id' => 12, 'imageable_type' => 'place', 'url' => $base . '1469474968028-56623f02e42e' . $q],

            // 13 – Parque Nacional Tayrona (jungle + sea)
            ['imageable_id' => 13, 'imageable_type' => 'place', 'url' => $base . '1476514525535-07fb3b4ae5f1' . $q],
            ['imageable_id' => 13, 'imageable_type' => 'place', 'url' => $base . '1451770634254-54c05e6a8f80' . $q],

            // 14 – Valle de Cocora (wax palms)
            ['imageable_id' => 14, 'imageable_type' => 'place', 'url' => $base . '1586348943529-beaae6c28db9' . $q],
            ['imageable_id' => 14, 'imageable_type' => 'place', 'url' => $base . '1440284316574-5f128c67cf55' . $q],

            // 15 – Café Jesús Martín (specialty coffee)
            ['imageable_id' => 15, 'imageable_type' => 'place', 'url' => $base . '1495467033336-2effd8753d51' . $q],
            ['imageable_id' => 15, 'imageable_type' => 'place', 'url' => $base . '1447933601428-65a28d8d97c8' . $q],

            // 16 – Mirador Alto de la Cruz (scenic viewpoint)
            ['imageable_id' => 16, 'imageable_type' => 'place', 'url' => $base . '1586348943529-beaae6c28db9' . $q],
            ['imageable_id' => 16, 'imageable_type' => 'place', 'url' => $base . '1469474968028-56623f02e42e' . $q],

            // ── Events ──────────────────────────────────────────────────────────────────
            // 1 – Festival Internacional de Música del Caribe
            ['imageable_id' => 1,  'imageable_type' => 'event', 'url' => $base . '1470229722913-7c0e2dbbafd3' . $q],
            ['imageable_id' => 1,  'imageable_type' => 'event', 'url' => $base . '1533174072545-7a4b6ad7a6c3' . $q],

            // 2 – Concierto al Atardecer en Taganga
            ['imageable_id' => 2,  'imageable_type' => 'event', 'url' => $base . '1504609813442-a8924e83f187' . $q],
            ['imageable_id' => 2,  'imageable_type' => 'event', 'url' => $base . '1516450360452-9312f5e86fc7' . $q],

            // 3 – Feria de las Flores de Medellín
            ['imageable_id' => 3,  'imageable_type' => 'event', 'url' => $base . '1490750967868-88df5691240b' . $q],
            ['imageable_id' => 3,  'imageable_type' => 'event', 'url' => $base . '1465146344425-f00d5f5c8f07' . $q],

            // 4 – Maratón de Bogotá 42K
            ['imageable_id' => 4,  'imageable_type' => 'event', 'url' => $base . '1461896836374-cf382b6dda37' . $q],
            ['imageable_id' => 4,  'imageable_type' => 'event', 'url' => $base . '1571731966634-8eb2f6b49e0e' . $q],

            // 5 – Festival del Café Colombiano
            ['imageable_id' => 5,  'imageable_type' => 'event', 'url' => $base . '1495467033336-2effd8753d51' . $q],
            ['imageable_id' => 5,  'imageable_type' => 'event', 'url' => $base . '1447933601428-65a28d8d97c8' . $q],

            // 6 – Expedición a Ciudad Perdida
            ['imageable_id' => 6,  'imageable_type' => 'event', 'url' => $base . '1567610031966-12b69d21c177' . $q],
            ['imageable_id' => 6,  'imageable_type' => 'event', 'url' => $base . '1441974231531-c6227db76b6e' . $q],

            // 7 – Noche Caribeña en la Ciudad Amurallada
            ['imageable_id' => 7,  'imageable_type' => 'event', 'url' => $base . '1571266028243-f41d8c0bade6' . $q],
            ['imageable_id' => 7,  'imageable_type' => 'event', 'url' => $base . '1599058917212-d750089bc07e' . $q],

            // 8 – Tour Gastronómico Nocturno por Bogotá
            ['imageable_id' => 8,  'imageable_type' => 'event', 'url' => $base . '1565299585323-38d6b0865b47' . $q],
            ['imageable_id' => 8,  'imageable_type' => 'event', 'url' => $base . '1414235077428-338989a2e8c0' . $q],

            // 9 – Amanecer en Cabo San Juan del Guía
            ['imageable_id' => 9,  'imageable_type' => 'event', 'url' => $base . '1476514525535-07fb3b4ae5f1' . $q],
            ['imageable_id' => 9,  'imageable_type' => 'event', 'url' => $base . '1507525428034-b723cf961d3e' . $q],

            // 10 – Festival Vallenato de la Leyenda
            ['imageable_id' => 10, 'imageable_type' => 'event', 'url' => $base . '1533174072545-7a4b6ad7a6c3' . $q],
            ['imageable_id' => 10, 'imageable_type' => 'event', 'url' => $base . '1504609813442-a8924e83f187' . $q],

            // ── Cities ──────────────────────────────────────────────────────────────────
            // 1 – Bogotá (urban + Andes skyline)
            ['imageable_id' => 1, 'imageable_type' => 'city', 'url' => $base . '1480714378408-67cf0d13bc1b' . $q],
            ['imageable_id' => 1, 'imageable_type' => 'city', 'url' => $base . '1534430480872-3498386e7856' . $q],

            // 2 – Cartagena (colored colonial buildings)
            ['imageable_id' => 2, 'imageable_type' => 'city', 'url' => $base . '1599058917212-d750089bc07e' . $q],
            ['imageable_id' => 2, 'imageable_type' => 'city', 'url' => $base . '1535189043414-b732f91571b7' . $q],

            // 3 – Santa Marta (Caribbean + Sierra Nevada)
            ['imageable_id' => 3, 'imageable_type' => 'city', 'url' => $base . '1507525428034-b723cf961d3e' . $q],
            ['imageable_id' => 3, 'imageable_type' => 'city', 'url' => $base . '1519046904654-dd20e527d2a6' . $q],

            // 4 – Medellín (urban transformation + cable car)
            ['imageable_id' => 4, 'imageable_type' => 'city', 'url' => $base . '1568252542512-9fe8fe9c87bb' . $q],
            ['imageable_id' => 4, 'imageable_type' => 'city', 'url' => $base . '1500049053255-03f5dd566c7e' . $q],

            // 5 – Tayrona (tropical rainforest + sea)
            ['imageable_id' => 5, 'imageable_type' => 'city', 'url' => $base . '1441974231531-c6227db76b6e' . $q],
            ['imageable_id' => 5, 'imageable_type' => 'city', 'url' => $base . '1451770634254-54c05e6a8f80' . $q],

            // 6 – Salento (coffee + wax palms)
            ['imageable_id' => 6, 'imageable_type' => 'city', 'url' => $base . '1495467033336-2effd8753d51' . $q],
            ['imageable_id' => 6, 'imageable_type' => 'city', 'url' => $base . '1586348943529-beaae6c28db9' . $q],
        ];

        foreach ($images as $image) {
            Image::create(array_merge($image, ['created_at' => now(), 'updated_at' => now()]));
        }
    }
}
