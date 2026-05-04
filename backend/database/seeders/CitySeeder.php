<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    public function run(): void
    {
        $cities = [
            [
                'name'        => 'Bogotá',
                'description' => 'La capital de Colombia a 2.600 metros de altura, con el mayor número de museos del país, una bulliciosa escena gastronómica y La Candelaria como epicentro histórico. Combina rascacielos modernos con casonas coloniales en un contraste que la hace única en Latinoamérica.',
                'country'     => 'Colombia',
            ],
            [
                'name'        => 'Cartagena',
                'description' => 'Patrimonio de la Humanidad por la UNESCO, Cartagena deslumbra con su casco antiguo amurallado, calles de flores y balcones de madera. Sus playas caribeñas, la arquitectura colonial y su cocina de mariscos la convierten en el destino más romántico y colorido de Colombia.',
                'country'     => 'Colombia',
            ],
            [
                'name'        => 'Santa Marta',
                'description' => 'La ciudad más antigua de América del Sur fundada por los españoles. Puerta de entrada al Parque Tayrona y base de los treks a Ciudad Perdida. La Sierra Nevada de Santa Marta —la montaña costera más alta del mundo— es su telón de fondo impresionante.',
                'country'     => 'Colombia',
            ],
            [
                'name'        => 'Medellín',
                'description' => 'Elegida ciudad más innovadora del mundo, Medellín se transformó de forma radical en las últimas décadas. La "Ciudad de la Eterna Primavera" enamora con su clima perfecto, el Metro Cable, los murales de la Comuna 13, el Parque Arví y una vibrante vida nocturna.',
                'country'     => 'Colombia',
            ],
            [
                'name'        => 'Tayrona',
                'description' => 'El Parque Nacional Natural Tayrona es uno de los más espectaculares de Colombia: selva tropical que desemboca directamente en el mar Caribe, con playas salvajes como Cabo San Juan y Arrecifes, fauna exuberante y los vestigios de la civilización Tayrona.',
                'country'     => 'Colombia',
            ],
            [
                'name'        => 'Salento',
                'description' => 'Pequeño pueblo del Eje Cafetero declarado Patrimonio Nacional por su arquitectura republicana de colores vivos. Rodeado de fincas cafeteras centenarias, el Valle de Cocora con sus palmas de cera —árbol nacional de Colombia— y el delicioso café de origen.',
                'country'     => 'Colombia',
            ],
        ];

        foreach ($cities as $city) {
            City::create(array_merge($city, ['created_at' => now(), 'updated_at' => now()]));
        }
    }
}
