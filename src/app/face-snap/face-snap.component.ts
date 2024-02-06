import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  btnText!: string;

  ngOnInit(): void {
    this.title = 'YAROU';
    this.description = 'Dévéloppeur FullStack';
    this.createdDate = new Date();
    this.snaps = 5;
    this.btnText = "Oh add Snap";
    this.imageUrl = "https://yaroumhr.website/storage/about/thumbnails/I9PB6XKCyICkp65erD0ZYhrW6ElhQN-metaTUhSLnN2Zw==-.svg";
  }

  onSnaps() {
    if (  this.btnText === "Oh remove Snap!") {
      this.snaps--;
      this.btnText = "Oh add Snap!";
    } else {
      this.snaps++;
      this.btnText = "Oh remove Snap!";
    }
  }

}
