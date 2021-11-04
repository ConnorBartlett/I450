import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../environments/environment';
import { NONE_TYPE } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  base = `${APIURL}/comment`;

  httpHeaders = new Headers({
    'Content-Type': 'application/json',
    'Authorization': '*'
  })

  constructor(private http: HttpClient) { }

  //POST
  // postComment(userName, commentBody) {
  //   return this.http.post(`${this.base}/api/comment`)
  // }

  //GET all comments
  getAllComments(){
    return this.http.get(`${this.base}`);
  }
  
}
