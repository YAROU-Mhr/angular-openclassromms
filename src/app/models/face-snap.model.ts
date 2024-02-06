export  class FaceSnap{
  // Methode classic
  // title: string;
  // description: string;
  // createdDate: Date;
  // snaps: number;
  // imageUrl: string;

  // constructor(title: string, description: string, createdDate: Date, snaps: number, imageUrl: string) {
  //   this.title = title;
  //   this.description = description;
  //   this.createdDate = createdDate;
  //   this.snaps = snaps;
  //   this.imageUrl = imageUrl ;
  // }

  // Methode rapide type script
  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public snaps: number,
    public imageUrl: string ) {

      
  }


}
