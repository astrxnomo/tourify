<?php

namespace Database\Seeders;

use App\Models\Place;
use Illuminate\Database\Seeder;

class PlaceSeeder extends Seeder
{
    // city_id:  1=Bogotá  2=Cartagena  3=SantaMarta  4=Medellín  5=Tayrona  6=Salento
    // cat_id:   1=Restaurantes  2=Playas  3=Museos  4=Parques  5=VidaNocturna  6=Monumentos
    public function run(): void
    {
        $places = [
            // ── Bogotá ──────────────────────────────────────────────────────────────────
            [
                'city_id' => 1, 'category_id' => 1,
                'name'        => 'Andrés Carne de Res',
                'description' => 'El restaurante más famoso de Colombia. Decoración delirante, música en vivo hasta el amanecer y una carta con más de 300 platos. Sus chorizos y la bandeja paisa son leyenda. Una experiencia que va mucho más allá de comer.',
                'address'     => 'Calle 3 # 11A-56, Chía, Cundinamarca',
                'latitude'    => 4.8660, 'longitude' => -74.0401,
            ],
            [
                'city_id' => 1, 'category_id' => 3,
                'name'        => 'Museo del Oro',
                'description' => 'Alberga la colección de orfebrería precolombina más grande del mundo: más de 55.000 piezas de oro y tumbaga de culturas Muisca, Zenú, Calima y Quimbaya. La Balsa Muisca, inspiración del mito de El Dorado, es su pieza más icónica.',
                'address'     => 'Carrera 6 # 15-88, La Candelaria, Bogotá',
                'latitude'    => 4.5993, 'longitude' => -74.0742,
            ],
            [
                'city_id' => 1, 'category_id' => 6,
                'name'        => 'Casa de Nariño',
                'description' => 'Palacio presidencial de Colombia con más de 200 años de historia. Sus jardines y patios de estilo neoclásico son accesibles en visitas guiadas gratuitas los fines de semana. El cambio de guardia es un espectáculo imperdible.',
                'address'     => 'Carrera 8 # 7-26, La Candelaria, Bogotá',
                'latitude'    => 4.5963, 'longitude' => -74.0758,
            ],
            // ── Cartagena ───────────────────────────────────────────────────────────────
            [
                'city_id' => 2, 'category_id' => 6,
                'name'        => 'Centro Histórico de Cartagena',
                'description' => 'Declarado Patrimonio de la Humanidad por la UNESCO en 1984. Calles empedradas, balcones de madera con flores, murallas coloniales del siglo XVI y plazas rebosantes de vida. El barrio Getsemaní, vecino al casco amurallado, es la nueva meca bohemia de Colombia.',
                'address'     => 'Ciudad Amurallada, Centro, Cartagena',
                'latitude'    => 10.4214, 'longitude' => -75.5498,
            ],
            [
                'city_id' => 2, 'category_id' => 2,
                'name'        => 'Playa El Laguito',
                'description' => 'La playa más tranquila y familiar de Cartagena, en el sector de El Laguito cerca de Bocagrande. Aguas calmadas color turquesa, arena fina y palmeras. Perfecta para el amanecer: casi no hay turistas a primera hora.',
                'address'     => 'Carrera 1, El Laguito, Cartagena',
                'latitude'    => 10.3883, 'longitude' => -75.5234,
            ],
            [
                'city_id' => 2, 'category_id' => 1,
                'name'        => 'El Celler de Don Jediondo',
                'description' => 'Restaurante boutique en el corazón del casco histórico con cocina fusión colombo-mediterránea. Bodega con más de 300 etiquetas, tartar de atún con ají amarillo y el mejor risotto de mar del Caribe colombiano. Reserva obligatoria.',
                'address'     => 'Calle del Colegio # 34-60, Centro Histórico, Cartagena',
                'latitude'    => 10.4261, 'longitude' => -75.5441,
            ],
            [
                'city_id' => 2, 'category_id' => 5,
                'name'        => 'Bazurto Social Club',
                'description' => 'El club más auténtico de Cartagena: cumbia, mapalé y champeta en una casona colonial restaurada dentro de la muralla. Reconocido por la BBC como uno de los 10 mejores bares de América Latina. La pista de baile se llena desde las 10 pm.',
                'address'     => 'Calle de la Factoria # 36-137, Ciudad Amurallada, Cartagena',
                'latitude'    => 10.4244, 'longitude' => -75.5486,
            ],
            // ── Santa Marta ─────────────────────────────────────────────────────────────
            [
                'city_id' => 3, 'category_id' => 2,
                'name'        => 'Playa Grande de Taganga',
                'description' => 'La playa más hermosa del pueblo pesquero de Taganga, solo accesible en lancha (10 minutos desde el muelle). Aguas cristalinas color esmeralda, fondo de coral para snorkel y chiringuitos con pescado frito y limonada de coco.',
                'address'     => 'Taganga, Santa Marta',
                'latitude'    => 11.2719, 'longitude' => -74.1956,
            ],
            [
                'city_id' => 3, 'category_id' => 1,
                'name'        => 'La Casa de los Mariscos',
                'description' => 'El restaurante de mariscos más antiguo de Santa Marta, fundado en 1978. Langosta a la mantequilla, ceviches de camarón y cazuela de mariscos cocinada a leña. Las mesas frente al malecón y la brisa del Caribe lo convierten en un plan imperdible al atardecer.',
                'address'     => 'Carrera 1 # 10-66, Rodadero, Santa Marta',
                'latitude'    => 11.2119, 'longitude' => -74.2362,
            ],
            [
                'city_id' => 3, 'category_id' => 4,
                'name'        => 'Ciudad Perdida (Teyuna)',
                'description' => 'La ciudad sagrada de los Tayrona, construida hacia el año 800 d.C. en plena Sierra Nevada. Un trek de 4 días a través de selva virgen, ríos y aldeas indígenas Kogi conduce a las 169 terrazas de piedra. Más antigua que Machu Picchu y mucho menos masificada.',
                'address'     => 'Sierra Nevada de Santa Marta (acceso desde El Mamey)',
                'latitude'    => 11.0413, 'longitude' => -73.6225,
            ],
            // ── Medellín ────────────────────────────────────────────────────────────────
            [
                'city_id' => 4, 'category_id' => 6,
                'name'        => 'Comuna 13 – Graffitour',
                'description' => 'El barrio que resurgió del conflicto armado a través del arte urbano. El Graffitour recorre escaleras eléctricas únicas en Colombia entre murales de más de 200 artistas locales. Al caer el noche, las luces de neón convierten las calles en una galería de arte a cielo abierto.',
                'address'     => 'Carrera 107 # 44-57, San Javier, Medellín',
                'latitude'    => 6.2417, 'longitude' => -75.6001,
            ],
            [
                'city_id' => 4, 'category_id' => 4,
                'name'        => 'Parque Arví',
                'description' => 'Parque ecológico de 1.700 hectáreas en las montañas que rodean Medellín, accesible en el Metro Cable desde la estación Acevedo. Bosques de niebla, senderos para ciclismo y senderismo, mercado campesino los domingos y un clima 10 grados más fresco que el centro.',
                'address'     => 'Corregimiento Santa Elena, Medellín',
                'latitude'    => 6.2833, 'longitude' => -75.4983,
            ],
            // ── Tayrona ─────────────────────────────────────────────────────────────────
            [
                'city_id' => 5, 'category_id' => 4,
                'name'        => 'Parque Nacional Natural Tayrona',
                'description' => 'Uno de los parques más visitados de Colombia: selva tropical con monos aulladores y tucanes que termina abruptamente en el mar Caribe. Playas como Cabo San Juan del Guía, Arrecifes y Playa Brava son de las más salvajes del continente. Ingreso limitado para preservar el ecosistema.',
                'address'     => 'Km 34 Vía Santa Marta–Riohacha, Magdalena',
                'latitude'    => 11.3150, 'longitude' => -73.9100,
            ],
            // ── Salento ─────────────────────────────────────────────────────────────────
            [
                'city_id' => 6, 'category_id' => 4,
                'name'        => 'Valle de Cocora',
                'description' => 'El valle más fotogénico de Colombia: niebla matutina entre palmas de cera que alcanzan los 60 metros de altura, el árbol nacional. El sendero circular de 4 horas cruza bosque de niebla, puentes colgantes y el reservorio del colibrí. Al amanecer no hay lugar igual en Sudamérica.',
                'address'     => 'Vereda Cocora, Salento, Quindío',
                'latitude'    => 4.6367, 'longitude' => -75.4896,
            ],
            [
                'city_id' => 6, 'category_id' => 1,
                'name'        => 'Café Jesús Martín',
                'description' => 'La tienda de café de especialidad más reconocida del Eje Cafetero, en el colorido pasaje peatonal de Salento. Más de 12 variedades de café de origen único tostado en el local, cataciones diarias y la tradicional agua panela con buñuelo para acompañar. El café más premiado del Quindío.',
                'address'     => 'Calle Real # 6-14, Salento, Quindío',
                'latitude'    => 4.6378, 'longitude' => -75.5732,
            ],
            [
                'city_id' => 6, 'category_id' => 6,
                'name'        => 'Mirador Alto de la Cruz',
                'description' => 'El punto más alto de Salento: 15 minutos de caminata desde el parque principal llevan a un mirador a 1.900 metros con vista de 360° sobre el Valle del Quindío, el Eje Cafetero y en días despejados el Nevado del Tolima. El lugar favorito de los viajeros para ver el amanecer.',
                'address'     => 'Alto de la Cruz, Salento, Quindío',
                'latitude'    => 4.6405, 'longitude' => -75.5737,
            ],
        ];

        foreach ($places as $place) {
            Place::create(array_merge($place, ['created_at' => now(), 'updated_at' => now()]));
        }
    }
}
