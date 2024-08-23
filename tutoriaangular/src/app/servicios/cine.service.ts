import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  //importamos desde la pagina el httpclient
  constructor(private http: HttpClient) { }
  storeCine(cine:string,direccion:string, ciudad:string){//hacemos metodo store para registar cine
    const parametros={    //declaramos nuestros campos
      "nombre":cine,
      "direccion":direccion,
      "ciudad":ciudad
    }
    
    return this.http.post('http://127.0.0.1:8000/api/cines',parametros) // pasamos la direccion de postman para registrar
  }

}
