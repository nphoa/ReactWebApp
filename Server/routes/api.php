<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('categories', 'CategoryController@all')->middleware('cors');
Route::get('getProductByCategory','ProductController@getProductByIdCategory')->middleware('cors');
Route::get('getProductById','ProductController@getProductById')->middleware('cors');
Route::post('login','Auth\LoginController@login')->middleware('cors');
Route::post('register','Auth\LoginController@register')->middleware('cors');

Route::get('paymentTypes', 'PaymentTypeController@getAll')->middleware('cors');
Route::get('shipmentTypes', 'ShipmentTypeController@getAll')->middleware('cors');

Route::post('order','OrderController@order')->middleware('cors');

Route::get('products','ProductController@getAllProduct')->middleware('cors');

Route::get('authors','AuthorController@getAll')->middleware('cors');
Route::get('publishers','PublisherController@getAll')->middleware('cors');
Route::get('releaseCompanys','ReleaseCompanyController@getAll')->middleware('cors');

Route::get('categoriesV2','CategoryController@allV2')->middleware('cors');

Route::post('uploadImage','ProductController@uploadImage')->middleware('cors');
Route::post('saveProduct','ProductController@saveProduct')->middleware('cors');
Route::post('saveProductImages','ProductController@saveProductImages')->middleware('cors');