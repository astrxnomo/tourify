<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            CitySeeder::class,
            CategorySeeder::class,
            PlaceSeeder::class,
            EventSeeder::class,
            ImageSeeder::class,
            ReviewSeeder::class,
            NotificationSeeder::class,
        ]);
    }
}
