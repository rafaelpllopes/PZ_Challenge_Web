import { EventEmitter, Injectable, Output } from '@angular/core';
import { Http, Headers  } from '@angular/http';

@Injectable()
export class JsonService {
    //Array para armazenar os objetos 
    videos = [];
    //Instancia do EventEmitter (Eventos Globais)
    addVideos = new EventEmitter();
    //variavel que armazena a url que possui o json
    //private url: string = 'https://pbmedia.pepblast.com/pz_challenge/assets.json';
    private url: string = 'http://localhost:3000/json';

    constructor(private http: Http) {
        this.atualiza();
    }

    //Metodo para adcionar os itens obtidos pelo Json
    setVideo(item) {
        this.videos.push(item);
        this.addVideos.emit(this.videos);
    }

    //Metodo que traz um item do Array
    getVideo(index: number) {  
        return this.videos[0].objects[index];
    }

    //Metodo publico que obtem o json no servidor
    private _listar(){
        let lista = this.http.get(this.url).map(res => res.json());
        return lista;
    }

    atualiza(): void{
        this._listar().forEach(item => this.setVideo(item));
    }
}