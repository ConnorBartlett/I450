import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material Imports (not necessarily used)
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { WriteCommentBoxComponent } from './write-comment-box/write-comment-box.component';
import { DisplayCommentComponent } from './display-comment/display-comment.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageDisplayComponent,
    WriteCommentBoxComponent,
    DisplayCommentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

        //Angular Material
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
        MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
