<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table='m_categories';

    protected $fillable = [
        'category_id', 'category_icon', 'category_name','category_parrent_id',
        'category_sort','IsPublic','isHaveChild','IsDelete'
    ];

    public function getAll()
    {
    	return $this->all();
    }
    public function getAllV2()
    {
    	$collectionParent = Category::where('IsHaveChild',1)->get();
    	foreach ($collectionParent as $key => $value) {
    		$lstChild = Category::where('category_parrent_id',$value['category_id'])->get();
    		$value['listChild'] = $lstChild;
    	}
    	return $collectionParent;
    }
}
