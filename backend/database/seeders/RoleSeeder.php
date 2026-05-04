<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        Role::insert([
            ['name' => 'admin', 'label' => 'Administrator', 'description' => 'Full system access', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'user',  'label' => 'User',          'description' => 'Regular user access', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
