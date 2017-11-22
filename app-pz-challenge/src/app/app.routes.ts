import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { VideoComponent } from './video/video.component';

const appRoutes: Routes = [
    { path: '', component: ListaComponent },
    { path: 'video/:id', component: VideoComponent },
    { path: '**', component: ListaComponent }
];

export const Routing = RouterModule.forRoot(appRoutes);