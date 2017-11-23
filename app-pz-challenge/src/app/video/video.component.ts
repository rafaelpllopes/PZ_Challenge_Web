import { Component, OnInit, EventEmitter, Output, ViewChild, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from '../services/json-service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  
  //Decorator
  @Output() addVideos = new EventEmitter();

  //Variavel para armazenar o id
  private id;
  //Variavel que carrega o objeto video
  private video;
  //Variavel que armazena os objetos que vem do service
  private itens: Array<any>;
  //Variavel que armazena a url do video
  private urlVideo: string;
  //Variavel que armazena a url do audio
  private urlAudio: string;
  
  //Decorator para permitir captura um elemento
  @ViewChild('controlVideo') controlVideo;
  @ViewChild('controlAudio') controlAudio;
  @ViewChild('canvas') canvas;

  constructor(private route: ActivatedRoute, private router: Router, private service: JsonService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.video = this.service.getVideo(this.id);
    });
  }

  ngOnInit() {
    this.service.addVideos.subscribe(itens => this.itens = itens);
    this.itens = this.service.videos;
    this.urlVideo = `${this.itens[0].assetsLocation}/${this.video.bg}`;
    this.urlAudio = `${this.itens[0].assetsLocation}/${this.video.sg}`;
  }
  
  //Evento que ocorre apos o component carregar
  ngAfterViewInit() {
    /*console.log(this.controlAudio);
    console.log(this.video.txts[0].txt);
    console.log(this.video.txts[0].time);
    console.log(this.canvas.nativeElement);*/
    if(this.video.txts){
      let minuto;
      let segundo;
      let tempo;
      //Verifica o tempo para desenhar o canvas
      let timer = setInterval(() =>{
        minuto = Math.floor(this.controlAudio.nativeElement.currentTime / 60);
        segundo = Math.floor(((this.controlAudio.nativeElement.currentTime / 60) %1 ) * 60);
        tempo = `${minuto}.${segundo}`;
        //console.log(tempo);
        if(tempo == this.video.txts[0].time){
          let ctx = this.canvas.nativeElement.getContext('2d');
          ctx.font = '60px serif';
          ctx.fillStyle = "yellow";
          ctx.fillText(this.video.txts[0].txt, 0, 65);
          clearInterval(timer);
        }
      },0);
    }

    //verifica se o audio terminou para parar o video
    let stop = setInterval(()=>{
      if(this.controlAudio.nativeElement.ended){
        console.log('Parei');
        this.controlVideo.nativeElement.pause();
        clearInterval(stop);
        return;
      }
    }, 0);
  }
}
