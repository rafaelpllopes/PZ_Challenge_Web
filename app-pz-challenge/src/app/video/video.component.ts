import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  private id;
  private route;
  private router;
  private video;

  constructor(route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      //this.video = this.id;
    });
  }

  ngOnInit() {
  }

}
