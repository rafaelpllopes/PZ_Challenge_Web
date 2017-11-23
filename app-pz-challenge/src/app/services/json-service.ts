import { EventEmitter, Injectable, Output } from '@angular/core';
import { concat } from 'rxjs/operators/concat';

@Injectable()
export class JsonService {
    //Array para armazenar os objetos 
    videos = [];
    //Instancia do EventEmitter (Eventos Globais)
    addVideos = new EventEmitter();

    constructor() {}

    //Metodo para adcionar os itens obtidos pelo Json
    setVideo(item) {
        this.videos.push(item);
        this.addVideos.emit(this.videos);
    }

    //Metodo que traz um item do Array
    getVideo(index: number) {  
        return this.videos[0].objects[index];
    }
}