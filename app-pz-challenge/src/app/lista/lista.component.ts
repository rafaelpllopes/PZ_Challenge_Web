import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers  } from '@angular/http'
import { ImagesService } from '../services/images-service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //Array para armazenar os objetos
  private imagens: Array<any> = [];
  //variavel para configuar o cabeçalho
  private headers: Headers;
  //variavel que armazena a url que possui o json
  private url: string = 'http://localhost:3000/json';
  
  constructor(private http: Http) {
    /*
    //Instanciar o Headers
    this.headers = new Headers();
    //Configuar cabeçalho
    this.headers.append("Access-Control-Allow-Origin", "*");
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    this.headers.append("Access-Control-Allow-Credentials", "true");
    this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    this.headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    this.headers.append('Content-Type', 'application/json');
    */
  }

  ngOnInit() {
      this.listar()      
      .forEach(item => this.imagens.push(item));
  }

  //Metodo publico que obtem o json no servidor
  listar(){
    let lista = this.http.get(this.url).map(res => res.json());
    return lista;
  }
}
