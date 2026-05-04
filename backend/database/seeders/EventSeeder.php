<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    // place_id:  1=AndrésCarne  2=MuseoOro  3=CasaNariño  4=CentroHistórico
    //            5=PlayaLaguito  6=ElCeller  7=BazurtoClub  8=PlayaGrande
    //            9=CasaMariscos 10=CiudadPerdida 11=Comuna13 12=ParqueArví
    //           13=ParqueTayrona 14=ValeCocora 15=CaféJesús 16=MiradorAlto
    public function run(): void
    {
        $events = [
            [
                'city_id'  => 2,
                'place_id' => null,
                'title'       => 'Festival Internacional de Música del Caribe',
                'description' => 'El mayor festival de música tropical de Colombia reúne a más de 80 agrupaciones de vallenato, cumbia, champeta y jazz afrocaribeño en escenarios abiertos dentro y fuera de la ciudad amurallada. Tres días de conciertos gratuitos con artistas de Colombia, Cuba y Jamaica.',
                'date'        => '2026-01-23 18:00:00',
            ],
            [
                'city_id'  => 3,
                'place_id' => 8,
                'title'       => 'Concierto al Atardecer en Taganga',
                'description' => 'Festival de música electrónica y chillout a orillas del Caribe en la playa de Taganga. DJs nacionales e internacionales actúan desde las 5 pm mientras el sol se pone sobre la bahía. Incluye feria gastronómica con ceviche, langosta y cócteles de fruta tropical.',
                'date'        => '2026-05-20 17:00:00',
            ],
            [
                'city_id'  => 4,
                'place_id' => null,
                'title'       => 'Feria de las Flores de Medellín',
                'description' => 'El evento más importante del año en Medellín y uno de los festivales más coloridos de América Latina. Diez días de celebración con el Desfile de Silleteros —declarado Patrimonio Cultural Inmaterial—, exposiciones florales, corridos de Caballos, Chivas y conciertos nocturnos gratuitos.',
                'date'        => '2026-08-07 09:00:00',
            ],
            [
                'city_id'  => 1,
                'place_id' => null,
                'title'       => 'Maratón de Bogotá 42K',
                'description' => 'Una de las maratones más concurridas de América Latina con más de 45.000 participantes de 60 países. El recorrido de 42 km cruza los barrios históricos de La Candelaria, la Ciclovía de la Séptima y el Parque Simón Bolívar. Categorías de 5K, 10K, 21K y 42K para todos los niveles.',
                'date'        => '2026-07-26 05:30:00',
            ],
            [
                'city_id'  => 6,
                'place_id' => 14,
                'title'       => 'Festival del Café Colombiano',
                'description' => 'Celebración de la cultura cafetera en el corazón del Eje Cafetero: cataciones de café de especialidad, recorridos por fincas centenarias, talleres de barismo y el concurso del mejor café del Quindío. Música carrilera en vivo y gastronomía típica del Eje completan el ambiente.',
                'date'        => '2026-12-05 09:00:00',
            ],
            [
                'city_id'  => 3,
                'place_id' => 10,
                'title'       => 'Expedición a Ciudad Perdida',
                'description' => 'Trek guiado de 4 días por la Sierra Nevada de Santa Marta hasta las terrazas sagradas de Teyuna (Ciudad Perdida). Cruce de ríos, estadías en campamentos de selva y visita a las comunidades Kogi y Wiwa. Cupo máximo de 15 personas por expedición. Todo el equipo incluido.',
                'date'        => '2026-09-15 06:00:00',
            ],
            [
                'city_id'  => 2,
                'place_id' => 7,
                'title'       => 'Noche Caribeña en la Ciudad Amurallada',
                'description' => 'La noche más tropical de Cartagena: champeta, salsa y mapalé en las calles del Centro Histórico con más de 20 bares participantes. Recorrido nocturno por la muralla, show de danza folclórica y la gran fiesta de cierre en el Bazurto Social Club hasta el amanecer.',
                'date'        => '2026-06-21 20:00:00',
            ],
            [
                'city_id'  => 1,
                'place_id' => 1,
                'title'       => 'Tour Gastronómico Nocturno por Bogotá',
                'description' => 'Recorrido culinario por los mejores restaurantes de la capital colombiana: de la fritanga y las empanadas de La Candelaria a la cocina de autor de Zona Rosa y el Parque de la 93. Cierra con una experiencia en Andrés Carne de Res, el restaurante más icónico de Colombia.',
                'date'        => '2026-03-14 19:00:00',
            ],
            [
                'city_id'  => 5,
                'place_id' => 13,
                'title'       => 'Amanecer en Cabo San Juan del Guía',
                'description' => 'Experiencia de glamping dentro del Parque Tayrona con acceso exclusivo a Cabo San Juan antes de la apertura al público. Caminata nocturna guiada por la selva, observación de estrellas desde las hamacas sobre el mar y desayuno con fruta tropical al amanecer. Cupos muy limitados.',
                'date'        => '2026-10-03 04:30:00',
            ],
            [
                'city_id'  => 2,
                'place_id' => null,
                'title'       => 'Festival Vallenato de la Leyenda',
                'description' => 'Homenaje al vallenato, Patrimonio Cultural Inmaterial de la Humanidad, con los mejores acordeoneros del país compitiendo en las categorías Junior, Profesional y Rey. Cinco noches de conciertos gratuitos en la Plaza de la Paz de Cartagena con artistas invitados internacionales.',
                'date'        => '2026-04-18 16:00:00',
            ],
        ];

        foreach ($events as $event) {
            Event::create(array_merge($event, ['created_at' => now(), 'updated_at' => now()]));
        }
    }
}
