<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [AdminController::class,'index']);
Route::post( '/adminLogin', [AuthController::class, 'adminLogin']);
Route::get('/userlist', [AdminController::class, 'userlist']);
Route::get('/adminApproval/{id}', [AdminController::class, 'adminApproval'])->name( 'adminApproval');
Route::get("delete/{id}", [AdminController::class, 'delete'])->name("deleteuser");
Route::get( "logout", [AdminController::class, 'logout'])->name( "logout");

