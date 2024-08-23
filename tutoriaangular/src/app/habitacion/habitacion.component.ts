import { HabitacionService } from './../servicios/habitacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-habitacion',
  standalone: true,
  imports: [],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {
  cines:any

  constructor(private HabitacionService:HabitacionService){}

  ngOnInit(){   //llamado de datos en el combobox
    this.getHabitacion();
  }

  getHabitacion(){    //mostrar todos los cine 
    this.HabitacionService.getcine().subscribe({
      next:(data:any)=>{
          this.cines = data.cine
      },
      error:(error)=>{
          debugger
      }
    })
  }

  storeHabitacion(numero_habitacion:any,numero_asientos:any,pelicula:any,cine:any){
    this.HabitacionService.storeHabitacion(numero_habitacion.value,numero_asientos.value,pelicula.value,cine.value).subscribe({
      next:(data)=>{
          debugger
      },
      error:(error)=>{
          debugger
      }
    })
  }

}
