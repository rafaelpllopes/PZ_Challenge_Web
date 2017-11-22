import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routing }  from './app.routes';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { ImagesService } from './services/images-service';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    Routing
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
