import { Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { ReservaComponent } from './reserva/reserva.component';

export const routes: Routes = [
    {
        path:'cine',component:CineComponent //exportar las rutas
        
    },
    
    {
        path:'habitacion',component:HabitacionComponent
    },

    {
        path:'reserva',component:ReservaComponent
    }
];
