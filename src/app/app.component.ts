import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLatestSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    );
    this.myOtherSnap = new FaceSnap(
      'YAROU MHR',
      'Dev full stack!',
      new Date(),
      0,
      'https://yaroumhr.website/storage/about/thumbnails/I9PB6XKCyICkp65erD0ZYhrW6ElhQN-metaTUhSLnN2Zw==-.svg'
    );
    this.myLatestSnap = new FaceSnap(
      'Bref',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    );
  }
}
