<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

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

Route::group(['middleware' => 'auth:sanctum'], function(){


    Route::put("update", [UserController::class, 'update']);
    Route::delete("delete/{id}", [UserController::class, 'delete']);


    });

Route::post( "userLogin", [AuthController::class, 'userLogin']);
Route::post("register", [UserController::class, 'register']);
// Route::put("update", [UserController::class, 'update']);
// Route::delete("delete/{id}", [UserController::class, 'delete']);
