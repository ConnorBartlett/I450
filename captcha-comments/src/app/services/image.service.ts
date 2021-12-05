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

  //Image API accessed from: pexels.com

  baseImageUrl = 'https://api.pexels.com/v1/photos/';
  pexelsApiKey = '563492ad6f91700001000001918ed54a119f43649c7f7d36f34c7517';

  httpHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': `${this.pexelsApiKey}`
  });

  constructor(private http: HttpClient) { }

  //Image holder
  

  //GET Image from external API
  // getImage(){
  //   console.log('...Getting image');
  //   this.imageObject = this.http.get('https://picsum.photos/400/400.jpg');
  //   console.log(this.imageObject);
  //   return this.imageObject;
  // }

  getImage(){
    console.log('...Getting image');
    return this.http.get(`${this.baseImageUrl}2014422`, httpOptions);
  };
}
