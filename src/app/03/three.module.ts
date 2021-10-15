// import { NgModule, LOCALE_ID }      from '@angular/core';
import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ThreeComponent } from './three.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ThreeComponent ],
  bootstrap:    [ ThreeComponent ]
})
export class AppModule { }
