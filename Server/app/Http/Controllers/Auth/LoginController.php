<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Hash;
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $req)
    {
        $data = $req->json()->all();
        //$ema $datail = $req->get('email');
        //$password = $req->get('password');
        if(Auth::attempt(['email'=>$data['email'] , 'password'=>$data['password'],'roleId'=>1]))
        {
            $model = new User();
            $inforUserLogin = Auth::user();
            $customer = $model->getUserById($inforUserLogin['id']);
            $inforUserLogin['phone'] = $customer->phone;
            $inforUserLogin['address'] = $customer->address;

            return response()->json(['status'=>'success','data'=>$inforUserLogin]);
        }
        return response()->json(['status'=>'fails','data'=>Auth::user()]);
        
    }

    public function register(Request $req){
        $result =  User::create([
            'name' => $req->get('name'),
            'email' => $req->get('email'),
            'password' => Hash::make($req->get('password')),
        ]);
         return response()->json(['status'=>'success','data'=>$result]);
    }


}
