import { Component, OnInit, EventEmitter, Output, ViewChild, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonService } from '../services/json-service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Output() addVideos = new EventEmitter();
  private id;
  private video;
  private itens: Array<any>;
  private urlVideo: string;
  private urlAudio: string;
  @ViewChild('controlVideo') controlVideo;
  @ViewChild('controlAudio') controlAudio;

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
  
  ngAfterViewInit() {
    //console.log(this.controlVideo);
    let tempo;
    setTimeout(() => {
      tempo = Math.floor((((this.controlAudio.nativeElement.duration /60) % 1) * 60) * 1000);
      console.log(tempo);
    }, 2000);

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
