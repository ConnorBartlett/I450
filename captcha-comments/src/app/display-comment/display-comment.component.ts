import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../_models/commentData';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.css']
})



export class DisplayCommentComponent implements OnInit{

  public comFinal: Comment;

@Input() comm; //trigger for pushing new comment

  public _comments;
  constructor(
    private commentService: CommentService,
  ) { }

  getComments(){
    this.commentService.getAllComments()
    .subscribe(data => {
      console.log("VVV comment object logged from display comment component VVV");
      console.log(data);
      this._comments = data;
    });
  }



  ngOnInit(){
    this.getComments();
    console.log("DISPLAY COMMENT COMPONENT INIT");
  }

  ngOnChanges(){
    //this.getComments();
    if(this.comm){
    this._comments.push(this.comm);
    console.log('onchange fires');
    };

  };

}
