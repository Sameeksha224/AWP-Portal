<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectDetailsController;
use App\Http\Controllers\BlockController;

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

Route::GET('/getBlockNames', [BlockController::class, 'getBlockNames']);
Route::GET('/getFinancialYear', [BlockController::class, 'getFinancialYear']);
Route::GET('/getBlockTypes', [BlockController::class, 'getBlockTypes']);
Route::GET('/getBasinNames', [BlockController::class, 'getBasinNames']);
Route::GET('/getProcessingType', [BlockController::class, 'getProcType']);
Route::GET('/getSurveyType' , [BlockController::class, 'getSurveyType']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
