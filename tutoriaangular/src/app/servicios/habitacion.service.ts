import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private http: HttpClient) { }
  getcine(){
    return this.http.get('http://127.0.0.1:8000/api/cines') // pasamos la direccion de postman para registrar
  }

  //metodo para registrar habitacion
  storeHabitacion(numero_habitacion:string,numero_asientos:string,pelicula:string,cine:string){//hacemos metodo store para registar habitacion
    const parametros={    //declaramos nuestros campos
      "numero_habitacion":numero_habitacion,
      "numero_asientos":numero_asientos,
      "pelicula":pelicula,
      "cine_id":cine
    }
    
    return this.http.post('http://127.0.0.1:8000/api/habitaciones',parametros) // pasamos la direccion de postman para registrar
  }

}
