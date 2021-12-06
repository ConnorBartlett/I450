import { Component, OnInit } from '@angular/core';
import { ImageDisplayComponent } from '../image-display/image-display.component';
import { WriteCommentBoxComponent } from '../write-comment-box/write-comment-box.component';
import { DisplayCommentComponent } from '../display-comment/display-comment.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ImageService } from '../services/image.service';
import { Comment } from '../_models/commentData';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public loadCommentsTrigger: boolean = false;
  private imageService: ImageService;
  public comMiddleMan: Comment; 
  public comSend: Comment;
  public refreshCommentsTrigger: boolean = false;

  toggleComments(bool){
    if(bool == true){
      console.log('show comment component loaded on conditional');
      this.loadCommentsTrigger = true;
    }
  };

  storeComment(comment){
    this.comMiddleMan = comment;
    this.comSend = comment;
    console.log(`*-*-* COMMENT AT HOME COMP, User: ${comment.userName} Com: ${comment.commentBody} `);
    this.sendComment();
  }; //gets obj from write com component, assigns to cmm

  sendComment(){
    return this.comSend;
  }

  refreshComponents(){
    this.ngOnInit;
  }


  ngOnInit(): void {
  }

}
