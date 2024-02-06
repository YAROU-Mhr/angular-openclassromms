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
    this.mySnap = {
      title:'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      createdDate:new Date(),
      snaps:0,
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location:'Port-Novo',
    };

    this.myOtherSnap = {
      title:'YAROU MHR',
      description:'Dévéloppeur FullStack',
      createdDate:new Date(),
      snaps:0,
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location:'Cotonou',
    };

    this.myLatestSnap = {
      title:'Bref',
      description:'Mon meilleur ami depuis tout petit !',
      createdDate:new Date(),
      snaps:10,
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    };

  }
}
