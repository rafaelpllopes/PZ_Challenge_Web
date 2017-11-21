import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Jsonp } from '@angular/http'
import { ImagesService } from '../services/images-service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //Array para armazenar os objetos
  private imagens = [];
  //variavel para configuar o cabeçalho
  private headers: Headers;
  //variavel que armazena a url que possui o json
  private url: string = 'http://pbmedia.pepblast.com/pz_challenge/assets.json';
  
  constructor(private http: Jsonp) {
    //Instanciar o Headers
    this.headers = new Headers();
    //Configuar cabeçalho
    this.headers.append("Access-Control-Allow-Origin", "*");
    this.headers.append('Content-Type', 'application/json');
  }

  ngOnInit() {
    this.listar()
      .subscribe(json => {
        json.forEach(obj => this.imagens.push(obj));
      }, erro => console.log(erro));
      console.log(this.imagens);
  }

  //Metodo publico que obtem o json no servidor
  listar(): Observable<any> {
      return this.http
        .get(this.url)
        .map(res => res.json());
  }
}
