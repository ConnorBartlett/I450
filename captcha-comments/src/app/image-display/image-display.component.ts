import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../services/image.service';
import { CommentService } from '../services/comment.service';
// import { DisplayCommentComponent } from '../display-comment/display-comment.component';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {
  @Output() eventBool = new EventEmitter<boolean>();

  public _image;
  public _imageTemp;
  constructor(
    public imageService: ImageService,
    public commentService: CommentService,
    // public displayCommentComponent: DisplayCommentComponent,
  ) { }

  //api call to pexel
  getPexelImage(){
    this.imageService.getPexelImage().subscribe(resImage => {
      console.log('VVV here is the image in the image display component VVV');
      console.log(resImage);
      this._image = resImage;
      this._imageTemp = resImage;
      this.imageIsolator(this._image);
      this.imageIdIsolator(this._imageTemp);
      this.imagePhotographerIsolator(this._imageTemp);

      //triggers show comment component init
      this.triggerCommentComponent();
    })
  };

  //pexel api returns a json object with the following sizes for the photo:
  //landscape, large, large2x, medium, original, portrait, small, tiny
  imageIsolator(imageParse){
    console.log('**Image URL sent to service**');
    this._image = imageParse.src.large;//size ajusted here
    console.log(`URL = ${imageParse.src.large.toString()}`);
    return this._image;
  };

  imageIdIsolator(imageParse){
    console.log('**Begin ID Translation from API to DB**');
    var tempString;
    var tempInt;
    var imageOne = '2014422';
    var imageTwo = '2014433';
    var imageThree = '2014428';

    tempString = imageParse.id.toString();
    console.log(`Temp variable is: ${tempString} . imageOne variable is: ${imageOne}. imageTwo: ${imageTwo} . imageThree: ${imageThree} `);
    if(tempString == imageOne){
      tempInt = 0;
    } else if(tempString == imageTwo){
      tempInt = 1;
    } else if(tempString == imageThree){
      tempInt = 2;
    } 

    console.log(`Temp Int = ${tempInt}`);
    this.imageService.imageDbId = tempInt;
    console.log('-----END ID TRANSLATE------');

    //pass image array index to instance of comment service
    this.commentService._imageId = tempInt;
    this.commentService.getAllComments();
    // this.displayCommentComponent.getComments();
    //trigger API call in comment service. The reason this is done here rather than in a comment component
    //init is to avoid attempting to load comments by image index before the image index has been generated.
    //if API call is made prior to index rng, index is sent as "undefined" and ignored by server.
    //this will be fixed later.

    this.imageService.setImageId(imageParse.id.toString());
    console.log('***Image ID sent to service***');
  }


  imagePhotographerIsolator(imageParse){
    console.log('**Image photographer sent to service**');
    this.imageService.setImagePhotographer(imageParse.photographer.toString());
  };

  triggerCommentComponent(){
    this.eventBool.emit(true);
    console.log(`*comment conditional triggered*`);
  }




  ngOnInit(){
    console.log("IMAGE DISPLAY COMPONENT INIT");
    this.getPexelImage();
  };

}
