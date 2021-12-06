import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '563492ad6f91700001000001918ed54a119f43649c7f7d36f34c7517'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public imageObject;
  public imageId;
  public photographer;
  public randomId;
  public currentRnum;
  public imageDbId;
  
  //temp Image ID's
  public tempImageIds = new Array('2014422', '2014433', '2014428' );

  //Server API
  base = `${APIURL}/image`;

  //Image API accessed from: pexels.com

  baseImageUrl = 'https://api.pexels.com/v1/photos/';
  pexelsApiKey = '563492ad6f91700001000001918ed54a119f43649c7f7d36f34c7517';

  httpHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `${this.pexelsApiKey}`
  });

  constructor(private http: HttpClient) { }
  public ready: boolean = false;

  randomNumGenerator(temp){
    var max = temp.length;
    var current;
    var result;
    current = this.currentRnum;

    console.log(`RNG currentRnum is: ${current}`)
    if(this.currentRnum != null){
      console.log('RNG COMPAIRING');
      if(result != null){
        while(result = current){
          result = Math.floor(Math.random() * max);
        }
      }
    } else {
        result = Math.floor(Math.random() * max);
    };
    this.currentRnum = result;
    return result;
  }; //preventative overlapping conditional. complete test case upon submission component refresh.

  randomIdGenerator(){
    var tempIndex;
    var id;
    tempIndex = this.randomNumGenerator(this.tempImageIds);
    id = this.tempImageIds[tempIndex];
    return id;
  };


  getPexelImage(){
    this.randomId = this.randomIdGenerator();
    console.log(`*random ID @ getImage() is: ${this.randomId}`);
    return this.http.get(`${this.baseImageUrl}${this.randomId}`, httpOptions);
  };

  //sets imageId from generated photo
  setImageId(currentImage){
    this.imageId = currentImage;
  };

  setImageDbId(tempInt){
    this.imageDbId = tempInt;
  }


  //sets photographer name var
  setImagePhotographer(currentImage){
    this.photographer = currentImage;
  };



  
}
