import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../_models/commentData';

@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.css']
})
export class DisplayCommentComponent implements OnInit {

  public _comments;

  constructor(
    private commentService: CommentService,

  ) { }

  getComments(){
    this.commentService.getAllComments()
    .subscribe(data => {
      console.log(data)
      this._comments = data
    });
  }

  ngOnInit(){
    this.getComments();
    console.log("made it here");
  }

}
