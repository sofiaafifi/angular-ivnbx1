import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularCropperjsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
