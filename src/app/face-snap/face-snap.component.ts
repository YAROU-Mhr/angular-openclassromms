import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  btnText!: string;

  ngOnInit(): void {

    this.btnText = "Oh add Snap !";
  }

  onSnaps() {
    if (  this.btnText === "Oh remove Snap !") {
      this.faceSnap.snaps--;
      this.btnText = "Oh add Snap !";
    } else {
      this.faceSnap.snaps++;
      this.btnText = "Oh remove Snap !";
    }
  }

}
