<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\http\controllers\ShoutsController;
use App\Http\Controllers\CommentController;
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

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::put("update", [UserController::class, 'update']);
    Route::delete("delete/{id}", [UserController::class, 'delete']);
});

Route::post("userLogin", [AuthController::class, 'userLogin']);
Route::post("register", [UserController::class, 'register']);
// Route::put("update", [UserController::class, 'update']);
// Route::delete("delete/{id}", [UserController::class, 'delete']);

Route::post("add", [ShoutsController::class, 'uploadmedia']);
Route::get("list", [ShoutsController::class, 'list']);
Route::get('shouts/show/{id}', [ShoutsController::class, 'show']);
Route::post('shouts/update/{id}', [ShoutsController::class, 'update']);
Route::get('shouts/destroy/{id}', [ShoutsController::class, 'destroy']);


Route::post("comment", [CommentController::class, 'store']);
Route::post("editComment/{id}", [CommentController::class, 'update']);
Route::get("comment/{id}", [CommentController::class, 'show']);
Route::get("commentRemove/{id}", [CommentController::class, 'destroy']);

Route::get("friendRequest/{id}", [FriendsController::class, 'getFriendRequest']);
Route::get("getUsers/{id}", [FriendsController::class, 'getUserList']);
Route::get('friends/{id}', [FriendsController::class, 'show']);
Route::post('sendRequest', [FriendsController::class, 'request']);
Route::post('request', [FriendsController::class, 'acceptRequest']);
Route::post('remove', [FriendsController::class, 'remove']);
Route::post('deleteRequest', [FriendsController::class, 'deleteRequest']);
