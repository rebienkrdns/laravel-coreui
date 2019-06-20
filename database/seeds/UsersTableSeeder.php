<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'      => 'Admin',
            'email'     => 'admin@admin.com',
            'email_verified_at' => now(),
            'password'  => bcrypt('secret')
        ]);

        if (app()->environment() !== 'production') {
            factory(User::class, 200)->create();
        }
    }
}
