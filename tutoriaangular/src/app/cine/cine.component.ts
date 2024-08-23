import { CineService } from './../servicios/cine.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  standalone: true,
  imports: [],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
    constructor(private cineService:CineService){}

    storeCine(cine:any,direccion:any,ciudad:any){
      this.cineService.storeCine(cine.value,direccion.value,ciudad.value).subscribe({
        next:(data)=>{
            debugger
        },
        error:(error)=>{
            debugger
        }
      })
    }


    
}
