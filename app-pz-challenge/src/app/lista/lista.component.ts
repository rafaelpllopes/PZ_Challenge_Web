import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonService } from '../services/json-service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //Array para armazenar os objetos
  private imagens: Array<any> = [];
  @Output() addVideos = new EventEmitter();
  
  constructor(private service: JsonService) {}

  ngOnInit() {
    this.service.addVideos.subscribe(itens => this.imagens = itens);
    this.imagens = this.service.videos;
  }

  

}
