import { ReservaService } from './../servicios/reserva.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {
  habitaciones:any

  constructor(private ReservaService:ReservaService){}

  ngOnInit(){
    this.getReserva();
  }

  getReserva(){
    this.ReservaService.getHabitacion().subscribe({
      next:(date:any)=>{
        this.habitaciones = date.habitacion
      },
      error:(error)=>{
        debugger
      }
    })
  }

  storeReserva(cantidad_asientos:any,habitacion_id:any){
    this.ReservaService.storeReserva(cantidad_asientos.value,habitacion_id.value).subscribe({
      next:(data)=>{
          debugger
      },
      error:(error)=>{
          debugger
      }
    })
  }

}
