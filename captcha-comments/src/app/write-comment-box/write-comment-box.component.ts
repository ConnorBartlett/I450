import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentService } from '../services/comment.service';
import { FormGroup, FormBuilder, Form, FormsModule, FormControl } from '@angular/forms';
import { Comment } from '../_models/commentData';
import { ImageService } from '../services/image.service';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-write-comment-box',
  templateUrl: './write-comment-box.component.html',
  styleUrls: ['./write-comment-box.component.css']
})
export class WriteCommentBoxComponent implements OnInit {
  @Output() sendNewCom = new EventEmitter<Comment>();

  // commentForm: FormGroup;
  // editContent: '';
  completeComment: Comment;

  //v3
  commentForm = new FormGroup({
    userName: new FormControl(''),
    commentBody: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA)
  public data: any,
  private commentService: CommentService,
  private formBuilder: FormBuilder,
  private imageService: ImageService,

  ) {}

  onSubmitPostComment(){
    //log statement
    console.log(`*------------Posting Comment-----------*`);
    console.log(`* username: ${this.commentForm.value.userName} *`);
    console.log(`* commentBody: ${this.commentForm.value.commentBody} *`);
    console.log(`* photo ID: ${this.imageService.imageDbId} *`);
    console.log('*----------END Posting Comment---------*');
    //end log statement

    //create instance of comment object, assign variables to object.
    this.completeComment = new Comment({
      imageId: this.imageService.imageDbId,
      userName: this.commentForm.value.userName,
      commentBody: this.commentForm.value.commentBody,
    });
    
    this.sendCom(this.completeComment);

    this.commentService.postComment(this.completeComment).subscribe(resNewComment =>{
      console.log(`Comm service response ${resNewComment}`)
    });

    this.commentForm.reset(); //clears forms as function completes
  };

  onSubmitTest(){
    console.log(this.commentForm.value);
  };

  sendCom(comment: Comment){
    this.sendNewCom.emit(comment);
  };



  ngOnInit() {
    console.log('comment-box ran');
  };

}


//V2
  // private createForm(){
  //   this.commentForm = this.formBuilder.group({
  //     content: ''
  //   });
  // };

  //on submit function posts data from html form to db
  // onSubmitPostComment(commentObj){
  //   console.log('userName: ' + JSON.stringify(commentObj.userName));
  //   console.log('commentBody ' + JSON.stringify(commentObj.commentBody));
  //   console.log('Id ' + this.imageService.imageDbId);
  //   console.log(typeof(commentObj.userName));
  //   this.completeComment = new Comment({
  //     imageId: this.imageService.imageDbId,
  //     userName: commentObj.userName,
  //     commentBody: commentObj.commentBody
  //   })
  //   this.commentService.postComment(this.completeComment).subscribe(resNewComment =>{
  //     console.log(`Response after submission: ${this.completeComment}`);
  //   });
  //   window.location.href;
  // }