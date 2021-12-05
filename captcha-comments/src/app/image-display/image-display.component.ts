import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  public _image;

  constructor(
    private imageService: ImageService,
  ) { }

  //api call to pexel
  getImage(){
    this.imageService.getImage().subscribe(resImage => {
      console.log('here is the image in i display');
      console.log(resImage);
      this._image = resImage;
      this.imageIsolator(this._image);
    })
  }

  //pexel api returns a json object with the following sizes for the photo:
  //landscape, large, large2x, medium, original, portrait, small, tiny
  imageIsolator(imageParse){
    var img;
    console.log('here is the url')
    console.log(imageParse.src.large);
    this._image = imageParse.src.large;//size ajusted here
    return this._image;
  }

  ngOnInit(){
    console.log("FIRING IMAGE CANNON");
    this.getImage();
    console.log("---------------------");
  }

}
