import { Component } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { JsonService } from './services/json-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //variavel que armazena a url que possui o json
  private url: string = 'http://localhost:3000/json';
  
  constructor(private service: JsonService, private http: Http){
    this.listar().forEach(item => this.service.setVideo(item));
  }

  //Metodo publico que obtem o json no servidor
  listar(){
    let lista = this.http.get(this.url).map(res => res.json());
    return lista;
  }
}
