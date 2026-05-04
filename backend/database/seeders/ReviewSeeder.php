<?php

namespace Database\Seeders;

use App\Models\Review;
use Illuminate\Database\Seeder;

class ReviewSeeder extends Seeder
{
    // user_id:  2=Juan  3=María  4=Carlos  5=Ana
    public function run(): void
    {
        $reviews = [
            // ── Andrés Carne de Res (place 1) ───────────────────────────────────────────
            ['user_id' => 2, 'reviewable_id' => 1, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'Una experiencia que va mucho más allá de comer. Los chorizos son de otro nivel y el ambiente festivo te hace querer quedarte hasta el amanecer. Imprescindible para cualquiera que visite Colombia.'],
            ['user_id' => 3, 'reviewable_id' => 1, 'reviewable_type' => 'place', 'rating' => 4,
             'comment' => 'La comida es excelente y la decoración es una locura en el buen sentido. Un poco costoso para lo que es, pero la experiencia lo justifica. Reserven con al menos una semana de anticipación.'],
            ['user_id' => 4, 'reviewable_id' => 1, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'Fui el día de mi cumpleaños y fue mágico. Los cortes de carne son perfectos, la música en vivo increíble y el personal súper atento. Volveré cada vez que pueda.'],

            // ── Museo del Oro (place 2) ──────────────────────────────────────────────────
            ['user_id' => 3, 'reviewable_id' => 2, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'La Balsa Muisca me dejó sin palabras. Uno de los museos más impresionantes de Latinoamérica. La sala del depósito dorado es espectacular. Ir sin apuro y llevar al menos 3 horas.'],
            ['user_id' => 5, 'reviewable_id' => 2, 'reviewable_type' => 'place', 'rating' => 4,
             'comment' => 'Colección extraordinaria con más de 55.000 piezas. La señalización podría ser mejor en algunas salas. La tienda del museo tiene artesanías bonitas y de buen precio.'],

            // ── Centro Histórico de Cartagena (place 4) ─────────────────────────────────
            ['user_id' => 2, 'reviewable_id' => 4, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'Caminar por las calles del casco amurallado al atardecer es de las experiencias más hermosas que he tenido. Las flores en los balcones, el calor caribeño y la gente hacen que te quieras quedar para siempre.'],
            ['user_id' => 4, 'reviewable_id' => 4, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'Patrimonio de la Humanidad totalmente merecido. Cada esquina es una foto. Recomiendo ir temprano en la mañana antes de que llegue el calor y los turistas.'],

            // ── Playa El Laguito (place 5) ───────────────────────────────────────────────
            ['user_id' => 3, 'reviewable_id' => 5, 'reviewable_type' => 'place', 'rating' => 4,
             'comment' => 'La playa más tranquila de Cartagena sin duda. Aguas calmadas perfectas para nadar con niños. Al amanecer es casi desierta y el agua parece una piscina. Cuidado con los vendedores ambulantes al mediodía.'],
            ['user_id' => 5, 'reviewable_id' => 5, 'reviewable_type' => 'place', 'rating' => 4,
             'comment' => 'Muy linda para descansar. El agua es turquesa y limpia. Hay pocas sombras naturales así que lleva parasol. Los restaurantes de la orilla tienen buena comida a precios razonables.'],

            // ── Playa Grande de Taganga (place 8) ────────────────────────────────────────
            ['user_id' => 2, 'reviewable_id' => 8, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'El snorkel aquí es de los mejores del Caribe colombiano. El fondo marino con coral y peces de colores es increíble. El paseo en lancha desde Taganga vale cada peso. Lleva comida porque los precios en el chiringuito son altos.'],
            ['user_id' => 4, 'reviewable_id' => 8, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'Paraíso absoluto. El agua es de un verde esmeralda impresionante. Fuimos un martes y casi teníamos la playa para nosotros solos. El pescado frito con patacones de la señora del chiringuito: 10/10.'],

            // ── Ciudad Perdida (place 10) ────────────────────────────────────────────────
            ['user_id' => 2, 'reviewable_id' => 10, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'El mejor trek de mi vida. Cuatro días de selva, ríos cristalinos y comunidades Kogi que te cambian la perspectiva. Las terrazas de piedra al llegar son emocionantes. Mucho más especial que Machu Picchu por lo auténtico.'],
            ['user_id' => 3, 'reviewable_id' => 10, 'reviewable_type' => 'place', 'rating' => 4,
             'comment' => 'Experiencia transformadora aunque físicamente exigente. Los guías conocen perfectamente la historia Tayrona. Llegué llorando de emoción. El segundo día es el más duro, el tercero es mágico.'],

            // ── Valle de Cocora (place 14) ───────────────────────────────────────────────
            ['user_id' => 4, 'reviewable_id' => 14, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'Las palmas de cera emergiendo entre la niebla son una imagen que nunca olvidaré. Llegué a las 6 am y tenía el valle para mí solo. El sendero circular está bien señalizado. Lleva ropa de abrigo porque puede hacer mucho frío.'],
            ['user_id' => 5, 'reviewable_id' => 14, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'El lugar más fotogénico de Colombia sin ninguna duda. El colibrí de pico de espada que vive en el reservorio es un regalo de la naturaleza. El camino de regreso por el bosque de niebla es misterioso y hermoso.'],

            // ── Parque Nacional Tayrona (place 13) ───────────────────────────────────────
            ['user_id' => 2, 'reviewable_id' => 13, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'Cabo San Juan del Guía es la playa más espectacular que he visto. La caminata de 2 horas por selva para llegar hace que todo valga doble. Los monos aulladores al amanecer son la mejor alarma natural.'],
            ['user_id' => 5, 'reviewable_id' => 13, 'reviewable_type' => 'place', 'rating' => 4,
             'comment' => 'Increíble pero hay que saber que es un parque silvestre: nada de sombra artificial, poca señal y mucha humedad. El cupo diario es limitado, reserva con semanas de antelación en temporada alta.'],

            // ── El Celler de Don Jediondo (place 6) ─────────────────────────────────────
            ['user_id' => 2, 'reviewable_id' => 6, 'reviewable_type' => 'place', 'rating' => 4,
             'comment' => 'El risotto de camarones con leche de coco es una obra maestra. Ambiente íntimo dentro de una casona del siglo XVIII. Servicio un poco lento pero el resultado final justifica la espera.'],
            ['user_id' => 3, 'reviewable_id' => 6, 'reviewable_type' => 'place', 'rating' => 5,
             'comment' => 'La mejor cena que tuve en todo Colombia. La carta de vinos es excepcional y el tartar de atún con ají amarillo está al nivel de cualquier restaurante de Lima o Buenos Aires. Precio elevado pero completamente justificado.'],

            // ── Festival Internacional de Música del Caribe (event 1) ────────────────────
            ['user_id' => 3, 'reviewable_id' => 1, 'reviewable_type' => 'event', 'rating' => 5,
             'comment' => 'Tres noches increíbles con los mejores exponentes del vallenato y la música caribeña. La acústica dentro de la ciudad amurallada es perfecta y la gente de Cartagena sabe cómo celebrar. Volvería sin dudarlo.'],
            ['user_id' => 4, 'reviewable_id' => 1, 'reviewable_type' => 'event', 'rating' => 4,
             'comment' => 'Excelente organización. El cartel era muy variado: cumbia, jazz afrocaribeño y champeta. El único inconveniente es la cantidad de personas en el casco histórico. Llega temprano para un buen sitio.'],

            // ── Feria de las Flores de Medellín (event 3) ────────────────────────────────
            ['user_id' => 2, 'reviewable_id' => 3, 'reviewable_type' => 'event', 'rating' => 5,
             'comment' => 'El Desfile de Silleteros es una emoción difícil de describir: ver a los campesinos cargar esas estructuras de flores de decenas de kilos durante horas es arte puro y mucho más. La Feria de las Flores es el alma de Medellín.'],
            ['user_id' => 5, 'reviewable_id' => 3, 'reviewable_type' => 'event', 'rating' => 5,
             'comment' => 'Vine especialmente desde Bogotá para el festival y no me arrepiento. Los conciertos nocturnos gratuitos en el Parque de los Pies Descalzos son de primer nivel. La gastronomía paisa durante la feria es un espectáculo aparte.'],

            // ── Maratón de Bogotá 42K (event 4) ─────────────────────────────────────────
            ['user_id' => 4, 'reviewable_id' => 4, 'reviewable_type' => 'event', 'rating' => 4,
             'comment' => 'Mi primera maratón a 2.600 metros de altura. La altitud es un factor real: los primeros 10 km son una sorpresa. El recorrido por La Candelaria y la Séptima es hermoso. La organización es impecable y la comunidad de corredores muy amigable.'],
        ];

        foreach ($reviews as $review) {
            Review::create(array_merge($review, ['created_at' => now(), 'updated_at' => now()]));
        }
    }
}
