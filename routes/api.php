<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\controllers\ShoutsController;

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
Route::get("list", [ShoutsController::class, 'list']);
Route::post("add", [ShoutsController::class, 'uploadmedia']);

Route::get('/edit/{id}',[ShoutsController::class, 'edit']);
// Route::get('/show/{id}',"CourseController@show");
// Route::get('/create1',"CourseController@create");
// Route::post('/store1',"CourseController@store");
 Route::post('/update/{id}',[ShoutsController::class, 'update']);


 Route::get('/destroy/{id}',[ShoutsController::class, 'destroy']);