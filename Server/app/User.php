<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use DB;
use Hash;
class User extends Authenticatable 
{
    protected $table='users';
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    public function getAll($currentPage)
    {
      $itemPerPage = 4;
      $countData = DB::table('users')->where(['IsDelete'=>0])->count(); 
      if($currentPage == 1){
        $dem = 0;
      }elseif($countData == (((int)$currentPage * $itemPerPage) - $itemPerPage)) {
          $currentPage -= 1;
          $dem = ((int)$currentPage * $itemPerPage) - $itemPerPage;
      }
      else{
        $dem = ((int)$currentPage * $itemPerPage) - $itemPerPage;
      }
      

      $users = User::where(['IsDelete'=>0])
                        ->offset($dem)
                        ->limit($itemPerPage)
                        ->get();
                       
      $countRestData = $countData - ($currentPage * $itemPerPage);
      $result = ['users'=>$users,'countData'=>$countData,'countRestData'=>$countRestData,'currentPage'=>$currentPage];
      return $result;
    }
    public function saveUser($user)
    {
        $result = null;
        DB::beginTransaction();
        try {
            $queryTableUser = [
                'name'      => $user['name'],
                'sort'      => $user['sort'],
                'roleId'    => $user['roleId'],
            ];
            $queryTableCustomer = [
                'customer_name'     => $user['name'],
                'customer_phone'    => $user['phone'],
                'customer_address'  => $user['address'],
            ];
            if($user['id'] == 0){
                //Insert Table User
                $queryTableUser['email']      = $user['email'];
                $queryTableUser['password']   = Hash::make($user['password']);
                $queryTableUser['IsDelete']   = 0;
                $queryTableUser['created_at'] = DB::raw('now()');
                $queryTableUser['updated_at'] = DB::raw('now()');

                $idUserAfterInsert = DB::table('users')->insertGetId($queryTableUser);
                //Insert Table Customer
                $queryTableCustomer['customer_email']    = $user['email'];
                $queryTableCustomer['customer_login_id'] = $idUserAfterInsert;
                $queryTableCustomer['create_user']       = 1;
                $queryTableCustomer['update_user']       = 1;
                $queryTableCustomer['created_at']        = DB::raw('now()');
                $queryTableCustomer['updated_at']        = DB::raw('now()');

                DB::table('m_customers')->insert($queryTableCustomer); 
            }else{
                //Update Table User
                DB::table('users')->where('id',$user['id'])->update($queryTableUser);
                //Update Table Customer
                DB::table('m_customers')->where('customer_login_id',$user['id'])->update($queryTableCustomer);

            }
            DB::commit();
            $result = true;
        } catch (Exception $e) {
            DB::rollBack();
            $result = false;
        }
         return $result;
    }

    public function getUserById($idUser)
    {
        $result = null;
        try {
           $result =  DB::table('users')->where('users.id',$idUser)
                    ->leftJoin('m_customers','users.id','=','m_customers.customer_login_id')
                    ->select(
                        'users.id as id',
                        'm_customers.customer_name as name',
                        'm_customers.customer_phone as phone',
                        'm_customers.customer_address as address',
                        'users.sort as sort'
                    )
                    ->first(); 
        } catch (Exception $e) {
             $result = null;
        }
        return $result;
    }
    public function deleteUser($idUser)
    {
        $result = false;
        try {
            $rowEffect = DB::table('users')
                        ->where('id', $idUser)
                        ->update(['IsDelete'=>1]);
          
        if($rowEffect == 1){$result=true;}  
        } catch (Exception $e) {
             $result = false;
        }
        return $result;
    }
}
