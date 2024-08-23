<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitacion extends Model
{
    use HasFactory;
    protected $table ='habitaciones';
    protected $fillable = ['numero_habitacion','numero_asientos','pelicula','cine_id'];

    public $timestamps = false;
}
