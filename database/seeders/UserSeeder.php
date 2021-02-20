<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //create admin user
        $user = User::create([
            'name' => 'Admin',
            'email' => 'admin@docucountant.com',
            'password' => Hash::make('password'),
        ]);

        $user->assignRole('admin');
    }
}
