import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment';
import { NONE_TYPE } from '@angular/compiler';
import { Comment } from '../_models/commentData'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  base = `${APIURL}comment`;

  httpHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': '*'
  })

  constructor(private http: HttpClient) { }

  //POST comment
  postComment(comment: Comment) {
    console.log('i posted');
    return this.http.post(`${this.base}`, JSON.stringify(comment), httpOptions);
  }

  //GET all comments
  getAllComments(){
    console.log('this is the base:' + `${this.base}`)
    return this.http.get(`${this.base}`);
  }
  
}
