<?php

use App\Http\Controllers\ReportShoutController;
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
Route::post("add", [ShoutsController::class, 'uploadmedia']);
Route::get("list", [ShoutsController::class, 'list']);

Route::get('/show/{id}', [ShoutsController::class, 'show']);

Route::post('/update/{id}', [ShoutsController::class, 'update']);

Route::get('/destroy/{id}', [ShoutsController::class, 'destroy']);

Route::post('/report/shout', [ReportShoutController::class, 'store']);

Route::get('/report', [ReportShoutController::class, 'list']);

Route::get('/report/shout/{id}', [ReportShoutController::class, 'show']);

Route::delete('/report/{id}', [ReportShoutController::class, 'destroy']);
