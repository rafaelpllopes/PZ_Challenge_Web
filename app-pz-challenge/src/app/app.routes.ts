import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';

const appRoutes: Routes = [
    { path: '', component: ListaComponent },
    { path: '**', component: ListaComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);