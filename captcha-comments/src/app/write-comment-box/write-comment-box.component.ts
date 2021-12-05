import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from '../services/comment.service';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Comment } from '../_models/commentData';

@Component({
  selector: 'app-write-comment-box',
  templateUrl: './write-comment-box.component.html',
  styleUrls: ['./write-comment-box.component.css']
})
export class WriteCommentBoxComponent implements OnInit {

  // comments: Array<Comment>;

  // selectedComment: Comment;

  // constructor(private _commentService: CommentService){}

  // ngOnInit() {
  //   this._commentService.getAllComments().subscribe((resCommentData: Comment[]) => this.comments = resCommentData);
  // }

  // onSubmitPostComment(commentObj){
  //   console.log('this is the comment object: ');
  //   console.log(commentObj);
  //   this._commentService.postComment(commentObj);
  // }

  commentForm: FormGroup;
  editContent: '';

  constructor(@Inject(MAT_DIALOG_DATA)
  public data: any,
  private commentService: CommentService,
  private formBuilder: FormBuilder,

  ) { 
    this.createForm()
  }

  private createForm(){
    this.commentForm = this.formBuilder.group({
      content: ''
    });
  };

  //on submit function posts data from html form to db
  onSubmitPostComment(commentObj){
    console.log('this is the data: ' + this.data);
    console.log('this is the comment form value: ' + commentObj);
    this.commentService.postComment(commentObj).subscribe(resNewComment =>{
      console.log(commentObj);
    });window.location.href;
  }



  ngOnInit() {
    console.log('comment-box ran');
  }

}
