<?php

use Illuminate\Http\Request;
use App\Http\Controllers\CineController;
use App\Http\Controllers\HabitacionController;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::Resource('cines',CineController::class);
Route::get('cines',[CineController::class,'index']);


Route::Resource('habitaciones',HabitacionController::class);//guardar datos de una habitacion
Route::get('habitacion',[HabitacionController::class,'index']);
Route::get('habitacion/{cine_id}',[HabitacionController::class,'habitaciones']); //obtener todas las habitaciones por id
Route::get('habitacion/reserva/{habitacion_id}/{cantidad_asientos}',[HabitacionController::class,'reserva']);