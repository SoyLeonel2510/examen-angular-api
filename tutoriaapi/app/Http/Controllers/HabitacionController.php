<?php

namespace App\Http\Controllers;

use App\Models\Habitacion;
use Illuminate\Http\Request;

class HabitacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $habi = Habitacion::all();
        return response()->json(['habitacion'=>$habi]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    //guardar una habitacion
    public function store(Request $r)
    {
        $habitaciones = new Habitacion();
        $habitaciones->numero_habitacion = $r->numero_habitacion;
        $habitaciones->numero_asientos= $r->numero_asientos;
        $habitaciones->pelicula = $r->pelicula;
        $habitaciones->cine_id= $r->cine_id;
        $habitaciones->save();

        return response()->json(['message'=>'Datos guardados']);
    }

    //para traer todas las habitaciones a base del id
    public function habitaciones($cine_id){
        $habitaciones = Habitacion::where('cine_id', $cine_id)->get();
        return response()->json(['Habitaciones' => $habitaciones],200);
    }

    
    public function reserva($habitacion_id, $cantidad_asientos){ 
        $habitacion = Habitacion::find($habitacion_id);//nos va a devolver el numero de asientos disponiibles
        
        if(!$habitacion){
            return response()->json(['Message' => 'Habitacion no encontrada'],404);
        }

        if($habitacion->numero_asientos >= $cantidad_asientos){
            $habitacion->numero_asientos -= $cantidad_asientos;
            $habitacion->save();
            return response()->json(['message'=>'Reserva exitosa','Habitacion' => $habitacion]);
        }else{
            return response()->json(['Message' => 'la cantidad a reservar no esta disponible'],202);
        }
    }

    //para obtener 1 habitacion por id
    public function show(Habitacion $habitacion)
    {
        if($habitacion){
            return response()->json(['habitaciones' => $habitacion->numero_asientos],200);
        }else{
            return response()->json(['Message' => 'habitacion no encontrada'],404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Habitacion $habitacion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Habitacion $habitacion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Habitacion $habitacion)
    {
        //
    }
}
