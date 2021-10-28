import { Component, OnInit } from '@angular/core';
import { ImageDisplayComponent } from '../image-display/image-display.component';
import { WriteCommentBoxComponent } from '../write-comment-box/write-comment-box.component';
import { DisplayCommentComponent } from '../display-comment/display-comment.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
