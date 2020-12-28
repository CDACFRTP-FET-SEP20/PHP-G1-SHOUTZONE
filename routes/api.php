<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FriendsController;

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

Route::get("friendRequest/{id}", [FriendsController::class, 'getFriendRequest']);
Route::get('friends/{id}', [FriendsController::class, 'show']);
Route::post('sendRequest', [FriendsController::class, 'request']);
Route::post('request', [FriendsController::class, 'acceptRequest']);
Route::post('remove', [FriendsController::class, 'remove']);
