<?php

use Illuminate\Database\Seeder;
use App\Category;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('m_categories')->insert([
            'category_icon' => '',
            'category_name' => 'Sách thiếu nhi',
            'category_parrent_id' => 0,
            'category_sort' => 1,
            'IsPublic' => 1,
            'IsHaveChild' => 1,
            'IsDelete' => 0,
        ]);
        DB::table('m_categories')->insert([
            'category_icon' => '',
            'category_name' => 'Sách kỹ năng sống',
            'category_parrent_id' => 0,
            'category_sort' => 2,
            'IsPublic' => 1,
            'IsHaveChild' => 1,
            'IsDelete' => 0,
        ]);
        DB::table('m_categories')->insert([
            'category_icon' => '',
            'category_name' => 'Sách tiểu thuyết,văn học',
            'category_parrent_id' => 0,
            'category_sort' => 2,
            'IsPublic' => 1,
            'IsHaveChild' => 1,
            'IsDelete' => 0,
        ]);
        DB::table('m_categories')->insert([
            'category_icon' => '',
            'category_name' => 'Sách kinh tế',
            'category_parrent_id' => 0,
            'category_sort' => 3,
            'IsPublic' => 1,
            'IsHaveChild' => 1,
            'IsDelete' => 0,
        ]);
           DB::table('m_categories')->insert([
            'category_icon' => '',
            'category_name' => 'Sách học ngoại ngữ',
            'category_parrent_id' => 0,
            'category_sort' => 3,
            'IsPublic' => 1,
            'IsHaveChild' => 1,
            'IsDelete' => 0,
        ]);
        DB::table('m_categories')->insert([
            'category_icon' => '',
            'category_name' => 'Sách kỹ năng',
            'category_parrent_id' => 2,
            'category_sort' => 2,
            'IsPublic' => 1,
            'IsHaveChild' => 1,
            'IsDelete' => 0,
        ]);
   
        $this->call([
            ProductsTableSeeder::class,
        ]);
      
    }
}
