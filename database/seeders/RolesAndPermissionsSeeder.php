<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * Permissions
         */

        // array with all available permissions
        $permissions = [


        ];

        // create all of the above permissions
        foreach ($permissions as $p){
            Permission::create(['name' => $p]);
        }


        /**
         * Roles
         */

        // array with all available roles
        $roles = [
            'admin', 'user'
        ];

        // create all of the above roles
        foreach ($roles as $r) {
            Role::create(['name' => $r]);
        }


        /**
         * Assign permissions to roles
         */

    }
}
