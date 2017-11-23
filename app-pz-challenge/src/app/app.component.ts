import { Component } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { JsonService } from './services/json-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = "Pz Challenge Web";
  author: string = "Rafael Pereira de Lacerda Lopes";
  constructor(){}
}
