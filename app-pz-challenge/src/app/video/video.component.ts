import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
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
  id: number;
  //Variavel que carrega o objeto video
  video;
  //Variavel que armazena os objetos que vem do service
  itens: Array<any>;
  //Variavel que armazena a url do video
  urlVideo: string;
  //Variavel que armazena a url do audio
  urlAudio: string;
  
  //Decorator para permitir captura um elemento
  @ViewChild('controlVideo') controlVideo;
  @ViewChild('controlAudio') controlAudio;
  @ViewChild('canvas') canvas;

  constructor(private route: ActivatedRoute, private router: Router, private service: JsonService) {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
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
    //Iniciar video e audio apos 5s para o preload conseguir ter carregado um pouco de ambos
    setTimeout(() => {
      this.controlVideo.nativeElement.play();
      this.controlAudio.nativeElement.play();
    }, 5000);

    if(this.video.txts){
      let minuto;
      let segundo;
      let tempo;
      let index = 0;
      let ctx = this.canvas.nativeElement.getContext('2d');
      //Verifica o tempo para desenhar o canvas
      let timer = setInterval(() =>{
        //minuto = Math.floor(this.controlAudio.nativeElement.currentTime / 60);
        //segundo = Math.floor(((this.controlAudio.nativeElement.currentTime / 60) %1 ) * 60);
        tempo = this.controlAudio.nativeElement.currentTime; //`${minuto}.${segundo}`;
        if(tempo >= this.video.txts[index].time){
          ctx.fillRect(1, 50, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
          ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
          ctx.font = 'bold 60px serif';
          ctx.fillStyle = "#F5FFFA";
          ctx.fillText(this.video.txts[index].txt, 0, 50);
          if(index == 1){
            clearInterval(timer);
          }
          index++;       
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

  //Metodo que volta para o video anterior
  anterior() {
    if(this.id > 0) {
      setTimeout(() => {
        this.router.navigate([`/video/${this.id - 1}`]);
      }, 10); 
    }
  }

  //Metodo que vai para o proximo video  
  proximo() {
    if(this.id < 9){
      let host = location.host;
      setTimeout(() => {
        this.router.navigate([`/video/${this.id + 1}`]);
      }, 10);      
    }
  }
}
