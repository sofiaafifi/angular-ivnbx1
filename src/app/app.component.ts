import { Component , ViewChild } from '@angular/core';
import { CropperComponent } from 'angular-cropperjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  imgUrl = null;
  config = {
    aspectRatio : 16/9,
    dragMode : 'move',
    background : true,
    movable: true,
    rotatable : true,
    scalable: true,
    zoomable: true,
    viewMode: 1,
    checkImageOrigin : true,
    cropmove:this.cropMoved.bind(this),
    checkCrossOrigin: true
  };
  imageUrl = 'https://c.staticblitz.com/assets/sponsors/nrwl-63566809483ae6dec3bec24675bd9843224451c45c6a1693ecfa9d71b2cfe631.png'

  constructor(){
  }

  cropMoved(data){
    this.imgUrl = this.angularCropper.cropper.getCroppedCanvas().toDataURL();
  }
}