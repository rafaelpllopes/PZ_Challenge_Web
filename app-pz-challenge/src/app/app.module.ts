import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routing }  from './app.routes';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { ImagesService } from './services/images-service';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
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
