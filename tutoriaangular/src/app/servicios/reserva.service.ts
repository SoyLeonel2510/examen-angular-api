import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private http: HttpClient) { }
  getHabitacion(){
    return this.http.get('http://127.0.0.1:8000/api/habitacion');
  }

  //metodo para registrar reserva
  storeReserva(cantidad_asientos:string,habitacion_id:string){//hacemos metodo store para registar reserva
    const parametros={    //declaramos nuestros campos
      "cantidad_asientos":cantidad_asientos,
      "habitacion_id":habitacion_id
    }
    
    return this.http.get('http://127.0.0.1:8000/api/habitacion/reserva/'+habitacion_id+"/"+cantidad_asientos) // pasamos la direccion de postman para registrar
  }
}
