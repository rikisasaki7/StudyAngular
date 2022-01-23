// import { NgModule, LOCALE_ID }      from '@angular/core';
import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ThreeComponent } from './03/three.component';
import { FourComponent } from './04/four.component';
import { EventComponent } from './04/event/event.component';
import { BookComponent } from './04/books/books.component';
import { WingComponent } from './04/wings/wing.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ThreeComponent, FourComponent, EventComponent, BookComponent, WingComponent ],
  // bootstrap:    [ AppComponent, FourComponent ],
  // providers: [{ provide: LOCALE_ID, useValue: 'de-DE'}]
  bootstrap:    [ AppComponent, ThreeComponent, FourComponent ],
  entryComponents: [EventComponent, BookComponent, WingComponent]
})
export class AppModule { }
