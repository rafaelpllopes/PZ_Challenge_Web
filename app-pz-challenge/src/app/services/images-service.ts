import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class ImagesService {
    //Array para armazenar os objetos 
    private imagens = [];
    //Instancia do EventEmitter (Eventos Globais)
    private addImagens = new EventEmitter();
    //Montar o cabeçalho para o request

    constructor() {}
}