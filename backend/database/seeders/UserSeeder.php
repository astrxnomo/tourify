<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            ['role_id' => 1, 'name' => 'Admin Tourify',   'email' => 'admin@tourify.com',  'password' => Hash::make('password')],
            ['role_id' => 2, 'name' => 'Juan García',      'email' => 'juan@example.com',   'password' => Hash::make('password')],
            ['role_id' => 2, 'name' => 'María López',      'email' => 'maria@example.com',  'password' => Hash::make('password')],
            ['role_id' => 2, 'name' => 'Carlos Rodríguez', 'email' => 'carlos@example.com', 'password' => Hash::make('password')],
            ['role_id' => 2, 'name' => 'Ana Martínez',     'email' => 'ana@example.com',    'password' => Hash::make('password')],
        ];

        foreach ($users as $user) {
            User::create(array_merge($user, ['created_at' => now(), 'updated_at' => now()]));
        }
    }
}
