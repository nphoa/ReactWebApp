<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
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
    	$collectionParent = Category::where(['IsHaveChild'=>1,'IsDelete'=>0])->get();
    	foreach ($collectionParent as $key => $value) {
    		$lstChild = Category::where(['category_parrent_id'=>$value['category_id'],'IsDelete'=>0])->get();
    		$value['listChild'] = $lstChild;
    	}
    	return $collectionParent;
    }
    public function getCategoryById($id)
    {   $result = null;
        try {
            $result = DB::table('m_categories')
                        ->where('category_id',$id)
                        ->first();
        } catch (Exception $e) {
            $result = $e;
        }
        return $result;
    }
    public function saveCategory($arrCategory)
    {
    
        $result = false;
        try {
            if($arrCategory['category_id'] ==0){
                //Add new
                $arrCategory['IsPublic'] = 1;
                $arrCategory['IsDelete'] = 0;
                $arrCategory['created_at'] = DB::raw('now()');
                $arrCategory['updated_at'] = DB::raw('now()');
                $arrCategory['IsHaveChild'] = ($arrCategory['category_parrent_id'] == 0) ? 1 : 0;
                DB::table('m_categories')->insert($arrCategory);
            }else{
                //Update
                DB::table('m_categories')->where('category_id',$arrCategory['category_id'])
                                         ->update($arrCategory);
            }
            $result = true;
        } catch (Exception $e) {
            $result = $e;
        }
        return $result;
    }
    public function deleteCategory($idCategory)
    {
        $result = false;
        try {
            $result = DB::table('m_categories')
                        ->where('category_id',$idCategory)
                        ->update(['IsDelete'=>1]);
            $result = true;             
        } catch (Exception $e) {
            $result = false;
        }
        return $result;
    }
    public function updateCategoryParent($objCategory)
    {
        $result = false;
        try {
            $result = DB::table('m_categories')
                        ->where('category_id',$objCategory->idCategory)
                        ->update(['category_parrent_id'=>$objCategory->idParentCategory]);
            $result = true;             
        } catch (Exception $e) {
            $result = false;
        }
        return $result;
    }
}
