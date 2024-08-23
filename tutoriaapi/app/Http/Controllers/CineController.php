<?php

namespace App\Http\Controllers;

use App\Models\Cine;
use Illuminate\Http\Request;

class CineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cines = Cine::all();
        return response()->json(['cine'=>$cines]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }
    
    /**
     * Guardar el cine
     * Store a newly created resource in storage.
     */
    public function store(Request $r)
    {
        $cines = new Cine();
        $cines->nombre = $r->nombre;
        $cines->direccion= $r->direccion;
        $cines->ciudad = $r->ciudad;
        $cines->save();

        return response()->json(['message'=>'Datos guardados']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cine $cine)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cine $cine)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cine $cine)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cine $cine)
    {
        //
    }
}
