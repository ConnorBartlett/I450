import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment';
import { NONE_TYPE } from '@angular/compiler';
import { Comment } from '../_models/commentData'
import { ImageService } from './image.service';
import { DisplayCommentComponent } from '../display-comment/display-comment.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public sCommentObject;
  public _imageId;
  public commentTrigger: boolean = false;

  base = `${APIURL}/comment`;

  httpHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': '*'
  });

  constructor(
    private http: HttpClient,
    ) { }

  //POST comment
  postComment(comment: Comment) {
    console.log('Comment successfully posted to database');
    return this.http.post(`${this.base}`, JSON.stringify(comment), httpOptions);
  };

  //GET all comments
  // getAllComments(){
  //   console.log('Comments successfully retrieved from database');
  //   return this.http.get(`${this.base}`);
  // };

  passImageId(imageId){
    this._imageId = imageId;
  }
  
  getAllComments(){
    console.log('getAllComments() in comment service was triggered');
    console.log(`rendered Image Index: ${this._imageId}`);
    console.log(`Comments retrieved from db from api url" ${this.base}/${this._imageId}`);
    return this.http.get(`${this.base}/${this._imageId}`);
  }
  
  
}
