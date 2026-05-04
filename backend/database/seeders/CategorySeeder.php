<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Restaurantes',  'description' => 'Los mejores lugares para comer'],
            ['name' => 'Playas',        'description' => 'Playas paradisíacas'],
            ['name' => 'Museos',        'description' => 'Historia y cultura'],
            ['name' => 'Parques',       'description' => 'Espacios naturales y recreativos'],
            ['name' => 'Vida Nocturna', 'description' => 'Bares, discotecas y entretenimiento'],
            ['name' => 'Monumentos',    'description' => 'Sitios históricos y monumentos'],
        ];

        foreach ($categories as $cat) {
            Category::create(array_merge($cat, ['created_at' => now(), 'updated_at' => now()]));
        }
    }
}
