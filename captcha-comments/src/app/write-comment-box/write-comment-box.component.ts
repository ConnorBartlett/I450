import { Component, Inject, OnInit } from '@angular/core';
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

  commentForm: FormGroup;
  editContent: '';
  completeComment: Comment;

  constructor(@Inject(MAT_DIALOG_DATA)
  public data: any,
  private commentService: CommentService,
  private formBuilder: FormBuilder,
  private imageService: ImageService,

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
    console.log('userName: ' + JSON.stringify(commentObj.userName));
    console.log('commentBody ' + JSON.stringify(commentObj.commentBody));
    console.log('Id ' + this.imageService.imageDbId);
    console.log(typeof(commentObj.userName));
    this.completeComment = new Comment({
      imageId: this.imageService.imageDbId,
      userName: commentObj.userName,
      commentBody: commentObj.commentBody
    })
    this.commentService.postComment(this.completeComment).subscribe(resNewComment =>{
      console.log(`Response after submission: ${this.completeComment}`);
    });
    window.location.href;
  }



  ngOnInit() {
    console.log('comment-box ran');
  }

}
