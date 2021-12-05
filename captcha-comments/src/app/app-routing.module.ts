import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//generated component imports for internal routing
import { HomeComponent } from './home/home.component';
import { DisplayCommentComponent } from './display-comment/display-comment.component';
import { WriteCommentBoxComponent } from './write-comment-box/write-comment-box.component';
import { ImageDisplayComponent } from './image-display/image-display.component';





const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'api/comment', component: DisplayCommentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
